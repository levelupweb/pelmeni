import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "../../context";
import "../../../../../semantic/semantic/dist/components/dropdown";
import "../../../../../semantic/semantic/dist/components/transition";

const getItemIdByWeight = (category, weight) => {
    const item = category.items.filter(item => 
        item.weight === Number(weight)
    )[0];
    console.log(item);
    if (item) {
        return item._id
    }

    return null;
}

class Weight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `dropdown_${props.currentItem._id}`
        }
    }

    componentDidMount() {
        const { id } = this.state;

        $(`.${id}`).dropdown({
            onChange: (value) => {
                const { 
                    handleItem,
                    category
                } = this.props;
                
                const nextItem = getItemIdByWeight(category, value);
                
                if (nextItem) {
                    handleItem(nextItem);
                }
            }
        });
    }

    componentDidUpdate(prevProps) {
        const { 
            selectedItem,
            currentItem
        } = this.props;

        const {
            id
        } = this.state;

        
        if (selectedItem !== prevProps.selectedItem) {
            $(`.${id}`).dropdown("set selected", currentItem.weight)
        }
    }

    render() {
        const {
            category,
            currentItem
        } = this.props;

        const {
            id
        } = this.state;
        
        return (
            <div class={`${id} ui selection dropdown labeled`}>
                <input 
                    type="hidden"
                    value={currentItem.weight}
                />
                <i class="dropdown icon"></i>
                <div class="default text">Выберите вес</div>
                <div class="menu">
                    {category.items.map((item) => (
                        <div class="item" data-value={item.weight}>
                            {item.weight} гр.
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Weight.propTypes = {
    category: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(({
            weight: PropTypes.number,
            price: PropTypes.number,
            category: PropTypes.string,
        })))
    }),
    currentItem: PropTypes.shape({
        weight: PropTypes.number,
        price: PropTypes.number,
        category: PropTypes.string,
    }),
    handleItem: PropTypes.func.isRequired,
    selectedItem: PropTypes.string
}

Weight.defaultProps = {
    selectedItem: null,
    currentItem: null,
    category: null,
}

const EnhancedWeight = () => (
    <CardContext.Consumer>
        {({ category, currentItem, handleItem, selectedItem }) => (
            <Weight
                category={category}
                currentItem={currentItem}
                handleItem={handleItem}
                selectedItem={selectedItem}
            />
        )}
    </CardContext.Consumer>
)

export default EnhancedWeight;
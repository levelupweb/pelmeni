export default (Component) =>
	class WithAsyncSetState extends Component {
		asyncSetState = (state) => {
			return new Promise(resolve => {
				this.setState(state, (...args) => {
					resolve(args);
				});
			});
		}
	};

import images from "./images";

export const attachImagesToEntries = (items) => items
  .map((category) => {
    const categoryImages = images[category._id];

    if (categoryImages) {
      return {
        ...category,
        items: category.items.map((item) => {
          const itemImage = categoryImages[item._id];

          if (itemImage) {
            return {
              ...item, 
              image: itemImage
            }
          }
          return item;
        })
      }
    }
    return category;
  })
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./productTypes";

const initialState = {
  products: [
    {
      id: 0,
      name: "Object maxi shirt dress with pleating and volume sleeve",
      images: [
        {
          url: "https://images.asos-media.com/products/object-maxi-shirt-dress-with-pleating-and-volume-sleeve-in-white-spot/20642354-1-spotprint?$XXL$&wid=513&fit=constrain",
          alt: "Image 1"
        },
        {
          url: "https://images.asos-media.com/products/object-maxi-shirt-dress-with-pleating-and-volume-sleeve-in-white-spot/20642354-2?$n_640w$&wid=513&fit=constrain",
          alt: "Image 2"
        },
        {
          url: "https://images.asos-media.com/products/object-maxi-shirt-dress-with-pleating-and-volume-sleeve-in-white-spot/20642354-3?$n_640w$&wid=513&fit=constrain",
          alt: "Image 3"
        },
        {
          url: "https://images.asos-media.com/products/object-maxi-shirt-dress-with-pleating-and-volume-sleeve-in-white-spot/20642354-4?$n_640w$&wid=513&fit=constrain",
          alt: "Image 4"
        },
      ],
      colors: [
        {
          name: "Black",
          code: "#000000"
        },
        {
          name: "Grey",
          code: "gainsboro"
        },
      ],
      sizes: ["SM", "S", "M", "L", "XL"],
      availableQuantity: 2,
      price: 2500,
    },
    {
      id: 1,
      name: "Skinny fit shirt with grandad collar in pale pink",
      images: [
        {
          url: "https://images.asos-media.com/products/asos-design-skinny-fit-shirt-with-grandad-collar-in-pale-pink/22454415-1-palepink?$n_640w$&wid=513&fit=constrain",
          alt: "Image 1"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-skinny-fit-shirt-with-grandad-collar-in-pale-pink/22454415-2?$n_640w$&wid=513&fit=constrain",
          alt: "Image 2"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-skinny-fit-shirt-with-grandad-collar-in-pale-pink/22454415-3?$n_640w$&wid=513&fit=constrain",
          alt: "Image 3"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-skinny-fit-shirt-with-grandad-collar-in-pale-pink/22454415-4?$n_640w$&wid=513&fit=constrain",
          alt: "Image 4"
        },
      ],
      colors: [
        {
          name: "Pink",
          code: "#FADADD"
        },
      ],
      sizes: ["SM", "S", "M"],
      availableQuantity: 100,
      price: 4000,
    },
    {
      id: 2,
      name: "Nike Running essential jacket in black",
      images: [
        {
          url: "https://images.asos-media.com/products/nike-running-essential-jacket-in-black/23712889-1-black?$n_640w$&wid=513&fit=constrain",
          alt: "Image 1"
        },
        {
          url: "https://images.asos-media.com/products/nike-running-essential-jacket-in-black/23712889-2?$n_640w$&wid=513&fit=constrain",
          alt: "Image 2"
        },
        {
          url: "https://images.asos-media.com/products/nike-running-essential-jacket-in-black/23712889-3?$n_1280w$&wid=1125&fit=constrain",
          alt: "Image 3"
        },
        {
          url: "https://images.asos-media.com/products/nike-running-essential-jacket-in-black/23712889-4?$n_640w$&wid=513&fit=constrain",
          alt: "Image 4"
        },
      ],
      colors: [
        {
          name: "Black",
          code: "#000000"
        }
      ],
      sizes: ["L", "XL"],
      availableQuantity: 3,
      price: 2000,
    },
    {
      id: 3,
      name: "ASOS DESIGN Petite crop vest with lettuce edge in white",
      images: [
        {
          url: "https://images.asos-media.com/products/asos-design-petite-crop-vest-with-lettuce-edge-in-white/23421516-3?$n_640w$&wid=513&fit=constrain",
          alt: "Image 1"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-petite-crop-vest-with-lettuce-edge-in-white/23421516-4?$n_640w$&wid=513&fit=constrain",
          alt: "Image 2"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-petite-crop-vest-with-lettuce-edge-in-white/23421516-2?$n_640w$&wid=513&fit=constrain",
          alt: "Image 3"
        },
        {
          url: "https://images.asos-media.com/products/asos-design-petite-crop-vest-with-lettuce-edge-in-white/23421516-1-white?$n_640w$&wid=513&fit=constrain",
          alt: "Image 4"
        },
      ],
      colors: [
        {
          name: "White",
          code: "#FFFFFF"
        }
      ],
      sizes: ["M", "L", "XL"],
      availableQuantity: 10,
      price: 3000,
    },
    {
      id: 4,
      name: "Selected Homme zip through fleece jacket with contrast chest pocket",
      images: [
        {
          url: "https://images.asos-media.com/products/selected-homme-zip-through-fleece-jacket-with-contrast-chest-pocket-in-navy/23539962-1-navyblazer?$n_750w$&wid=750&fit=constrain",
          alt: "Image 1"
        },
        {
          url: "https://images.asos-media.com/products/selected-homme-zip-through-fleece-jacket-with-contrast-chest-pocket-in-navy/23539962-2?$n_640w$&wid=513&fit=constrain",
          alt: "Image 2"
        },
        {
          url: "https://images.asos-media.com/products/selected-homme-zip-through-fleece-jacket-with-contrast-chest-pocket-in-navy/23539962-3?$n_640w$&wid=513&fit=constrain",
          alt: "Image 3"
        },
        {
          url: "https://images.asos-media.com/products/selected-homme-zip-through-fleece-jacket-with-contrast-chest-pocket-in-navy/23539962-4?$n_640w$&wid=513&fit=constrain",
          alt: "Image 4"
        },
      ],
      colors: [
        {
          name: "Blue",
          code: "#00316E"
        },
        {
          name: "Black",
          code: "#000000"
        },
        {
          name: "Grey",
          code: "gainsboro"
        },
      ],
      sizes: ["SM", "S", "M", "L", "XL"],
      availableQuantity: 1,
      price: 2000,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products + 1,
      };

    case REMOVE_PRODUCT:
      return state.products > 0
        ? { ...state, products: state.products - 1 }
        : state;

    default:
      return state;
  }
};

export default productReducer;

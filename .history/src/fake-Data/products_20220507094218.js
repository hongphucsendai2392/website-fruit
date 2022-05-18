import Img1 from "../sanzai/imgs/product/1.jpg";
import Img2 from "../sanzai/imgs/product/2.jpg";
import Img3 from "../sanzai/imgs/product/3.jpg";
import Img4 from "../sanzai/imgs/product/4.jpg";
import Img5 from "../sanzai/imgs/product/5.jpg";
import Img6 from "../sanzai/imgs/product/6.jpg";
import Img7 from "../sanzai/imgs/product/7.jpg";
import Img8 from "../sanzai/imgs/product/8.jpg";
import Img9 from "../sanzai/imgs/product/9.jpg";
import Img10 from "../sanzai/imgs/product/10.jpg";
import Img11 from "../sanzai/imgs/product/11.jpg";
import Img12 from "../sanzai/imgs/product/12.jpg";

const products = [
  {
    title: "Táo úc ",
    price: 195000,
    priceold: 500000,
    img: Img1,
    size: ["s", "m", "l"],
  },
  {
    title: "Nho mỹ ",
    price: 195000,
    priceold: 500000,
    img: Img2,
    size: ["s", "m", "l"],
  },
  {
    title: "Lê mỹ",
    price: 195000,
    priceold: 500000,
    img: Img3,
    size: ["s", "m", "l"],
  },
  {
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img4,
    size: ["s", "m", "l"],
  },
  {
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img5,
    size: ["s", "m", "l"],
  },
  {
    title: "Táo úc ",
    price: 195000,
    priceold: 500000,
    img: Img6,
    size: ["s", "m", "l"],
  },
  {
    title: "Nho mỹ ",
    price: 195000,
    priceold: 500000,
    img: Img7,
    size: ["s", "m", "l"],
  },
  {
    title: "Lê mỹ",
    price: 195000,
    priceold: 500000,
    img: Img8,
    size: ["s", "m", "l"],
  },
  {
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img9,
    size: ["s", "m", "l"],
  },
  {
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img10,
    size: ["s", "m", "l"],
  },
  {
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img11,
    size: ["s", "m", "l"],
  },
  {
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img12,
    size: ["s", "m", "l"],
  },
];
const getAllProducts = () => products;
const getProducts = (number) => {
  const max = products.length - number;
  const start = Math.floor(Math.random() * max);
  return products.slice(start, start + number);
};
const productData = {
  getAllProducts,
  getProducts,
};
export default productData;

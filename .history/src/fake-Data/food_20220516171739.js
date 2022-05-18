import Img0 from "../sanzai/imgs/food/0.jpg";
import Img1 from "../sanzai/imgs/food/1.jpg";
import Img2 from "../sanzai/imgs/food/2.jpg";
import Img3 from "../sanzai/imgs/food/3.jpg";
import Img4 from "../sanzai/imgs/food/4.jpg";
import Img5 from "../sanzai/imgs/food/5.jpg";
import Img6 from "../sanzai/imgs/food/6.jpg";
import Img7 from "../sanzai/imgs/food/7.jpg";
import Img8 from "../sanzai/imgs/food/8.jpg";
import Img9 from "../sanzai/imgs/food/9.jpg";
import Img10 from "../sanzai/imgs/food/10.jpg";
import Img11 from "../sanzai/imgs/food/11.jpg";
import Img12 from "../sanzai/imgs/food/12.jpg";
import Img13 from "../sanzai/imgs/food/13.jpg";

const products = [
  {
    id: 0,
    title: "Bánh nhập úc ",
    price: 395000,
    priceold: 420000,
    img: Img0,
    size: ["s", "m", "l"],
  },
  {
    id: 1,
    title: "Bánh đa ",
    price: 395000,
    priceold: 420000,
    img: Img1,
    size: ["s", "m", "l"],
  },
  {
    id: 2,
    title: "Bánh socola ",
    price: 235000,
    priceold: 302000,
    img: Img2,
    size: ["s", "m", "l"],
  },
  {
    id: 3,
    title: "thuc mỹ",
    price: 420000,
    priceold: 500000,
    img: Img3,
    size: ["s", "m", "l"],
  },
  {
    id: 4,
    title: "thuc  mỹ",
    price: 153000,
    priceold: 211000,
    img: Img4,
    size: ["s", "m", "l"],
  },
];
const getAllProducts = () => products;
const getProducts = (number) => {
  const max = products.length - number;
  const start = Math.floor(Math.random() * max);
  return products.slice(start, start + number);
};
const getProductId = (id) => products.find((e) => e.id === Number(id));
const getCartItem = (items) => {
  let res = [];
  if (items.length > 0) {
    items.forEach((e) => {
      res.push({
        ...e,
        product: getProductId(e.id),
      });
    });
  }
  return res;
};
const productData = {
  getAllProducts,
  getProducts,
  getProductId,
  getCartItem,
};
export default productData;

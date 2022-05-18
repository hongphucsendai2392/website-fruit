import Img0 from "../sanzai/imgs/gift/0.jpg";
import Img1 from "../sanzai/imgs/gift/1.jpg";
import Img2 from "../sanzai/imgs/gift/2.jpg";
import Img3 from "../sanzai/imgs/gift/3.jpg";
import Img4 from "../sanzai/imgs/gift/4.jpg";
import Img5 from "../sanzai/imgs/gift/5.jpg";
import Img6 from "../sanzai/imgs/gift/6.jpg";
import Img7 from "../sanzai/imgs/gift/7.jpg";
import Img8 from "../sanzai/imgs/gift/8.jpg";
import Img9 from "../sanzai/imgs/gift/9.jpg";
import Img10 from "../sanzai/imgs/gift/10.jpg";
import Img11 from "../sanzai/imgs/gift/11.jpg";
import Img12 from "../sanzai/imgs/gift/12.jpg";
import Img13 from "../sanzai/imgs/gift/13.jpg";
import Img14 from "../sanzai/imgs/gift/14.jpg";
import Img15 from "../sanzai/imgs/gift/15.jpg";
import Img16 from "../sanzai/imgs/gift/16.jpg";
import Img17 from "../sanzai/imgs/gift/17.jpg";
import Img18 from "../sanzai/imgs/gift/18.jpg";
import Img19 from "../sanzai/imgs/gift/19.jpg";

const products = [
  {
    id: 0,
    title: "Kẹo ngọt ",
    price: 395000,
    priceold: 420000,
    img: Img0,
    size: ["s", "m", "l"],
  },
  {
    id: 1,
    title: "Kẹo vị chua ",
    price: 395000,
    priceold: 420000,
    img: Img1,
    size: ["s", "m", "l"],
  },
  {
    id: 2,
    title: "Kẹo nho ",
    price: 235000,
    priceold: 302000,
    img: Img2,
    size: ["s", "m", "l"],
  },
  {
    id: 3,
    title: "Lê mỹ",
    price: 420000,
    priceold: 500000,
    img: Img3,
    size: ["s", "m", "l"],
  },
  {
    id: 4,
    title: "kẹo táo",
    price: 153000,
    priceold: 211000,
    img: Img4,
    size: ["s", "m", "l"],
  },
  {
    id: 5,
    title: "Cam mỹ",
    price: 321000,
    priceold: 325000,
    img: Img5,
    size: ["s", "m", "l"],
  },
  {
    id: 6,
    title: "Táo úc ",
    price: 460000,
    priceold: 500000,
    img: Img6,
    size: ["s", "m", "l"],
  },
  {
    id: 7,
    title: "Nho mỹ ",
    price: 195000,
    priceold: 500000,
    img: Img7,
    size: ["s", "m", "l"],
  },
  {
    id: 8,
    title: "Lê mỹ",
    price: 195000,
    priceold: 500000,
    img: Img8,
    size: ["s", "m", "l"],
  },
  {
    id: 9,
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img9,
    size: ["s", "m", "l"],
  },
  {
    id: 10,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img10,
    size: ["s", "m", "l"],
  },
  {
    id: 11,
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img11,
    size: ["s", "m", "l"],
  },
  {
    id: 12,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img12,
    size: ["s", "m", "l"],
  },
  {
    id: 13,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img13,
    size: ["s", "m", "l"],
  },
  {
    id: 14,
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img14,
    size: ["s", "m", "l"],
  },
  {
    id: 15,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img15,
    size: ["s", "m", "l"],
  },
  {
    id: 16,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img16,
    size: ["s", "m", "l"],
  },
  {
    id: 17,
    title: "Kiwi mỹ",
    price: 195000,
    priceold: 500000,
    img: Img17,
    size: ["s", "m", "l"],
  },
  {
    id: 18,
    title: "Cam mỹ",
    price: 195000,
    priceold: 500000,
    img: Img18,
    size: ["s", "m", "l"],
  },
  {
    id: 19,
    title: "Táo úc ",
    price: 395000,
    priceold: 420000,
    img: Img19,
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

// all images imported from images directory
import accessories from "../images/accessories.jpg";
import accessories1 from "../images/accessories1.jpg";
import vaccum from "../images/vaccum.jpg";

import appliances from "../images/appliances.jpg";
import appliances1 from "../images/appliances1.jpg";
import appliances2 from "../images/appliances2.jpg";

import autoparts from "../images/autoparts.jpg";
import autoparts1 from "../images/autoparts1.jpg";
import autoparts2 from "../images/autoparts2.jpg";

import clothes from "../images/clothes.jpg";
import clothes1 from "../images/clothes1.jpg";
import clothes2 from "../images/clothes2.jpg";

import electronic from "../images/electronic.jpg";
import electronic1 from "../images/electronic1.jpg";
import electronic2 from "../images/electronic2.jpg";

import footwear from "../images/footwear.jpg";
import footwear1 from "../images/footwear1.jpg";
import footwear2 from "../images/footwear2.jpg";

const products = [
  {
    id: "01",
    title: "Hats",
    price: 24.0,
    image01: accessories,
    image02: accessories1,
    image03: vaccum,
    category: "Accessories",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Fridge",
    price: 115.0,
    image01: appliances,
    image02: appliances1,
    image03: appliances2,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Engine",
    price: 110.0,
    image01: autoparts,
    image02: autoparts1,
    image03: autoparts2,
    category: "Autoparts",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Blue tie",
    price: 110.0,
    image01: clothes,
    image02: clothes1,
    image03: clothes2,
    category: "Clothes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Motherboard",
    price: 24.0,
    image01: electronic,
    image02: electronic1,
    image03: electronic2,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Classic specs",
    price: 24.0,
    image01: accessories1,
    image02: vaccum,
    image03: accessories,
    category: "Accessories",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Dell oven",
    price: 115.0,
    image01: appliances1,
    image02: appliances,
    image03: appliances2,
    category: "Home Appliances",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Spedometer",
    price: 110.0,
    image01: autoparts1,
    image02: autoparts,
    image03: autoparts2,
    category: "Autoparts",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Official shirt",
    price: 110.0,
    image01: clothes1,
    image02: clothes,
    image03: clothes2,
    category: "Clothes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Motherboard",
    price: 24.0,
    image01: electronic2,
    image02: electronic,
    image03: electronic1,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Tommy shoes",
    price: 35.0,
    image01: footwear1,
    image02: footwear,
    image03: footwear2,
    category: "Footwear",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Official men shoes",
    price: 35.0,
    image01: footwear2,
    image02: footwear1,
    image03: footwear,
    category: "Footwear",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Yellow boots",
    price: 35.0,
    image01: footwear,
    image02: footwear2,
    image03: footwear1,
    category: "Footwear",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
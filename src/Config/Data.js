import R1 from "./../Views/Home/Img/R1.jpg";
import R2 from "./../Views/Home/Img/R2.jpg";
import R3 from "./../Views/Home/Img/R3.jpg";
import R4 from "./../Views/Home/Img/R4.jpg";
import R5 from "./../Views/Home/Img/R5.avif";
import R6 from "./../Views/Home/Img/R6.avif";
import one from "./../Views/Home/Img/1.jpg";
import two from "./../Views/Home/Img/2.avif";
import three from "./../Views/Home/Img/3.avif";
import four from "./../Views/Home/Img/4.avif";

const THEME = {
    primary : "#405D72",
    secondary : "#758694",
    tertiary : "#F7E7DC",
    quaternary : "#FFF8F3"
}
const RentItems = [
    {
      No: 1,
      bgImg: R1,
      Name: 'Bed Room Furniture',
      Pricetag: 'Starting From',
      Price: '@1500/mo',
      link: './furniture'
    },
    {
      No: 2,
      bgImg: R2,
      Name: 'Living Room Furniture',
      Pricetag: 'Starting From',
      Price: '@1300/mo',
      link: './furniture'
    },
    {
      No: 3,
      bgImg: R3,
      Name: 'Garments Deals',
      Pricetag: 'Starting From',
      Price: '@300/day',
      link: './garments'
    },
    {
      No: 4,
      bgImg: R4,
      Name: 'Study Room Furniture',
      Pricetag: 'Starting From',
      Price: '@400/mo',
      link: './furniture'
    },
    {
      No: 5,
      bgImg: R5,
      Name: 'Appliances Quality',
      Pricetag: 'Starting From',
      Price: '@250/mo',
      link: './electronics'
    },
    {
      No: 6,
      bgImg: R6,
      Name: 'Deals & Offers',
      Pricetag: 'Starting From',
      Price: '@500/day',
      link: './furniture'
    },
  ]
  const KeyItems = [
    {
      No: 1,
      Img: one,
      Title: 'Wide Range of Items',
      SubTitle: 'From furniture to electronics, find everything you need in one place.'
    },
    {
      No: 2,
      Img: two,
      Title: 'Affordable Prices',
      SubTitle: 'Quality rentals at prices that fit your budget.'
    },
    {
      No: 3,
      Img: three,
      Title: 'Flexible Terms',
      SubTitle: 'Rent items for as long or as short as you need.'
    },
    {
      No: 4,
      Img: four,
      Title: 'Convenient Delivery',
      SubTitle: 'Get items delivered to your doorstep hassle-free.'
    }
  ];


export {
    THEME,
    RentItems,
    KeyItems
}
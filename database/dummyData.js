const mongoose = require('mongoose');
const rentTheRunwayDbModel = require('./index.js');

const designerPool = [
    'Alexander McQueen', 'Betsey Johnson', 'Emilio Pucci', 'Miuccia Prada', 'Riccardo Tisci', 'Le Corbusier', 'Coco Chanel'
]

const itemNamePool= [
    'Chill', 'Lit', 'n', 'Mara', 'Delicate', '1004', 'Payton', 'Chiffon', 'Cropped', 'Column', 'Wrap', 'Isabella', 'Lia',
    'Metallic', 'Deconstructed', 'Hetty', 'Track', 'Nell', 'Ella', 'Tank', 'Tie', 'Wild', 'WildFlower', 'Tiger', 'Ellii', 
    'Sha', 'Ira', 'Miya', 'dark', 'light'
];

const cataPool = [
    'Dress', 'Bag', 'Earrings', 'Activewear', 'Jumpsuits', 'Knits', 'Buttoms', 'Jackets', 'Skirts', 'Pants', 'Tops'
]

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * Math.floor(max - min) + min);
};

//create facebook likes and designer name
const createItemFLAndDN = function(arr) {
  while (arr.length < 100) {
      arr.push({productID: 0, itemName: '', designerName: '', facebookLike: 0})
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].facebookLike = getRandomInt(0, 10000);
    arr[i].designerName = designerPool[getRandomInt(0, designerPool.length)];
    arr[i].price = getRandomInt(50, 100) * 10;
  }
};

//create itemName
const createItemName = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let name = '';
      const numOfWords = getRandomInt(1, 3);
      for (let j = 0; j < numOfWords; j++) {
          name = name + ' ' + itemNamePool[getRandomInt(0, itemNamePool.length)] + ' ' +cataPool[getRandomInt(0, cataPool.length)];
      }
      arr[i].itemName = name;
    }
};

//look into padStart when refactor
const addproductIDNum = function(arr) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        let id = 'HRLA';
        if (count.toString().length === 1) {
            num = id + '00' + count.toString();
            arr[i].productID = num;
            count++;
        } else if (count.toString().length === 2) {
            num = id + '0' + count.toString();
            arr[i].productID = num;
            count++;
        } else if (count.toString().length === 3) {
            num = id + count.toString();
            arr[i].productID = num;
            count++;
        }
    }
};


const dummyData = [
{productID: 0, itemName: 'Blue Starry Gown', designerName: 'Mischka', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Slate & Willow', designerName: 'Mischka', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Iro', designerName: 'Mischka', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Mara Dress', designerName: 'A.L.C.', facebookLike: 0}, 
{productID: 0, itemName: 'Kaitlyn Mini Dress', designerName: 'Blank Halo', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Floral Overlay Dress', designerName: 'ML Monique Lhuillier', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Compact Column Slit Dress', designerName: 'Nicholas', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Blank off Shoulder Dress', designerName: 'Derek Lam Collective', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Blue Lace Miya Dress', designerName: 'Catherine Deane', facebookLike: 0, price: 0}, 
{productID: 0, itemName: 'Love Light Jumpsuit', designerName: 'Keepsake', facebookLike: 0, price: 0}, 
];

createItemFLAndDN(dummyData);
addproductIDNum(dummyData);
createItemName(dummyData);


const seedFunc = (arr) => {
    rentTheRunwayDbModel.create(arr)
      .then(() => {
          console.log('dummy data seeded')
          mongoose.connection.close();
      })
      .catch(err => console.error(err));
};

seedFunc(dummyData);






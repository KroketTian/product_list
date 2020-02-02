import { apiUrl } from './config.js'
const basePath = "https://tintinhome-1259774835.cos.ap-chengdu.myqcloud.com";

const  resData = {
  categotyData: [
      {
          categories: [],
          code: "2",
          name: "沙发",
          searchKey: "product-sofa"
      },
      {
          categories: [],
          code: "3",
          name: "桌",
          searchKey: "product-disk"
      },
      {
          categories: [],
          code: "4",
          name: "椅",
          searchKey: "product-chair"
      }
  ],
  productsData: {
      sofa: [{
              code: "sf6",
              imgUrl: basePath + "/sf6.jpg",
              name: "沙发 SF6",
              price: 1999.9,
              oldPrice: 3000.0
          },
          {
            code: "sf5",
              imgUrl: basePath + "/sf5.jpg",
              name: "沙发 SF5",
              price: 3000,
              oldPrice: 4000.0
          },
          {
            code: "sf4",
              imgUrl: basePath + "/sf4.jpg",
              name: "沙发 SF4",
              price: 2560,
              oldPrice: 3000.0
          },
          {
            code: "sf3",
              imgUrl: basePath + "/sf3.jpg",
              name: "沙发 SF3",
              price: 998.9,
              oldPrice: 3000.0
          },
          {
            code: "sf2",
              imgUrl: basePath + "/sf2.jpg",
              name: "沙发 SF2",
              price: 4523,
              oldPrice: 6000.0
          },
          {
            code: "sf1",
              imgUrl: basePath + "/sf1.jpg",
              name: "沙发 SF1",
              price: 1205,
              oldPrice: 3000.0
          }
      ],
      chair:[
          {
            code: "ch1",
              imgUrl: basePath + "/ch1.jpg",
              name: "椅子 SF1",
              price: 123,
              oldPrice: 500
          },
          {
            code: "ch2",
              imgUrl: basePath + "/ch2.jpg",
              name: "椅子 SF2",
              price: 100,
              oldPrice: 200
          },
          {
            code: "ch3",
              imgUrl: basePath + "/ch3.jpg",
              name: "椅子 SF3",
              price: 78,
              oldPrice: 90
          },
          {
            code: "ch4",
              imgUrl: basePath + "/ch4.jpg",
              name: "椅子 SF4",
              price: 56,
              oldPrice: 120
          },
          {
            code: "ch5",
              imgUrl: basePath + "/ch5.jpg",
              name: "椅子 SF5",
              price: 120,
              oldPrice: 150
          }
      ],
      disk:[
          {
            code: "di1",
              imgUrl: basePath + "/di1.jpg",
              name: "桌子 SF1",
              price: 123,
              oldPrice: 500
          },
          {
            code: "di2",
              imgUrl: basePath + "/di2.jpg",
              name: "桌子 SF2",
              price: 123,
              oldPrice: 500
          },
          {
            code: "di3",
              imgUrl: basePath + "/di3.jpg",
              name: "桌子 SF3",
              price: 123,
              oldPrice: 500
          },
          {
            code: "di4",
              imgUrl: basePath + "/di4.jpg",
              name: "桌子 SF4",
              price: 123,
              oldPrice: 500
          },
          {
            code: "di5",
              imgUrl: basePath + "/di5.jpg",
              name: "桌子 SF5",
              price: 123,
              oldPrice: 500
          }
      ]
  }
}

function fetchself(params = {}) {
  const { option, id } = params
  return new Promise(function (resolve, reject) {
    var res = {
      statusCode: 200,
      data: []
    };
    if(option){
      switch(option){
        case 'category':
          res.data = resData.categotyData;
          break;
        case 'product-sofa':
          res.data = resData.productsData.sofa;
          break;
        case 'product-chair':
          res.data = resData.productsData.chair;
          break;
        case 'product-disk':
          res.data = resData.productsData.disk;
          break;
        case 'product-all':
          var allProduct = [];
          Object.keys(resData.productsData).forEach(key => {
            Object.keys(resData.productsData[key]).forEach(product => {
              allProduct.push(resData.productsData[key][product])
            })
          })
          res.data = allProduct;
          break;
        case 'product-detail':
          if(!id){
            break;
          }
          var allProduct = [];
          Object.keys(resData.productsData).forEach(key => {
            Object.keys(resData.productsData[key]).forEach(product => {
              if(id === resData.productsData[key][product].code){
                allProduct.push(resData.productsData[key][product])
              }
            })
          })
          res.data = allProduct;
          break;
        default:
          res.data = resData;
      }
    }
    resolve(res);
  })
}

module.exports = fetchself

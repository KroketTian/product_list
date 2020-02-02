// pages/component/products/products.js
import { apiUrl } from '../../utils/config.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    products: {
      type: Array,
      value: []
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    apiUrl: apiUrl
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 跳转详情
     */
    goDetail:function(event){
      var id = event.currentTarget.dataset.productCode;
      console.log(id)
      wx.navigateTo({
        url:'../../pages/product-detail/product-detail?id=' + id
      })
    }
  },
})
// pages/mall/category/category.js
// const fetch = require('../../utils/fetch.js')
import fetch from '../../utils/fetch.js'
import fetchself from '../../utils/fetchself.js'
import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
import Watch from '../../libs/watch';

let watch;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    products: [],
    active: '',
    searchOption:'product-all',
  },
  watch: {
    searchOption: function(val,oldval){
      this.getProductsByKey(val);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    watch = new Watch(this);
    this.fetchCategory()
  },

  fetchCategory: async function () {
    // 请求获得列表
    const data = await fetchself({option:'category'}).then(res => res).catch(err => err)
    if (data.statusCode === 200) {
      const categories = (data.data || []).map(item => {
        item.categories.forEach(entry => {
          const fillSize = 3 - entry.categories.length % 3

          if (fillSize === 3) return

          for (let i = 0; i < fillSize; i++) {
            entry.categories.push({ code: '' + Date.now(), name: '' })
          }
        })

        return item
      })

      this.setData({
        categories: categories
      })
    }
    
    // 请求获得商品目录
    this.getProductsByKey('product-all');
  },
  /**
   * 根据关键字搜索产品列表
   */
  getProductsByKey:async function(option){
    const productsData = await fetchself({option:option}).then(res => res).catch(err => err);
    if(productsData.statusCode === 200){
      this.setData({
        products: productsData.data
      })
    }
  },
  /**
   * 修改搜索关键字
   */
  selectSearchOption:function(e){
    watch.setData({
      searchOption: e.detail.seachKey
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
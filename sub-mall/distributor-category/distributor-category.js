// pages/mall/distributor-category/distributor-category.js
import fetch from '../../utils/fetch.js'
import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
import { showToast } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    distributorId: '',
    categories: [],
    active: '',
    categoryType: 10,
    keyword: ''
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const distributorId = options['distributor_id']
    this.fetchCategory(distributorId)
  },

  fetchCategory: async function (distributorId) {
    const data = await fetch(`/v1/stores/${distributorId}/categories`).then(res => res).catch(err => err)

    if (data.recode === 200) {
      const categories = (data.categories || []).map(item => {
        item.categories.forEach(entry => {
          if (Array.isArray(entry.categories)) {
            const fillSize = 3 - entry.categories.length % 3

            if (fillSize === 3) return

            for (let i = 0; i < fillSize; i++) {
              entry.categories.push({ code: '' + Date.now(), name: '' })
            }
          }
        })

        return item
      })

      this.setData({
        distributorId,
        categories,
        categoryType: data.categoryType,
        active: categories[0] && categories[0].code,
      })
    }
  },

  /**
   * 搜索
   */
  bindSearch: function (e) {
    const { distributorId, categoryType } = this.data

    const { keyword } = e.detail

    if (!keyword) {
      showToast({title: '请输入店铺内商品名称'})
      return
    }

    wx.navigateTo({
      url: `/sub-mall/search-product/search-product?distributor_id=${distributorId}&category_type=${categoryType}&keyword=${keyword}`,
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
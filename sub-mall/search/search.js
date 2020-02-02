// pages/mall/search/search.js
import fetch from '../../utils/fetch.js'
import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
import { showToast } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    placeholder: '请输入商品名称',
    tabs: [
      "商品",
      "店铺"
    ],
    hotWords: [[], []]
  },

  fetchData: async function () {
    const data = await fetch('/v1/systems/search/hotwords').then(res => res).catch(err => err)

    if (data.recode === 200) {
      const product = data.product || []
      const store = data.store || []

      this.setData({
        hotWords: [product, store]
      })

      console.log([product, store])
    }
  },

  bindChange: function (e) {
    const { current } = e.detail

    this.setData({
      current,
      placeholder: `请输入${current === 0 ? '商品' : '店铺'}名称`
    })
  },

  /**
   * 搜索
   */
  bindSearch: function (e) {
    const { keyword } = e.detail
    console.log(this.data.current)
    const path = this.data.current === 0 ? '/sub-mall/search-product/search-product' : '/sub-mall/search-store/search-store'

    if (!keyword) {
      showToast({ title: this.data.placeholder })
      return
    }

    wx.navigateTo({
      url: `${path}?keyword=${keyword}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
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
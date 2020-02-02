// pages/other/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [{
      name: "五金店",
      value: 1
    }, {
      name: "建筑装修公司",
      value: 2
    }, {
      name: "水电安装师傅",
      value: 3
    }, {
      name: "经销商",
      value: 4
    }, {
      name: "生产厂家",
      value: 5
    }, {
      name: "其他",
      value: 6
    }],
    typeValue: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  selectType(event) {
    this.setData({
      typeValue: event.target.dataset.value
    })
  }
})
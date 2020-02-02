// pages/product-detail/product-detail.js
import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
import fetchself from '../../utils/fetchself.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBarShowLevel:0,
    productDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 获取相应的商品详情
    this.getDetailDataById(options.id);
  },
  getDetailDataById: async function(id){
    const detailData = await fetchself({option:'product-detail',id:id}).then(res => res).catch(err => err);
    if(detailData.statusCode === 200){
      this.setData({
        productDetail:detailData.data[0]
      })
    }else{
      console.log('获取商品详情失败')
    }
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

  },

  /**
   * 监听滚动条
   */
  onPageScroll:function(e){
    if(e.scrollTop < 110){
      this.setData({
        topBarShowLevel: parseInt(e.scrollTop/10)
      })
    }
  },
  /**
   * 返回
   */
  goBack:function(){
    wx.navigateBack({ changed: true });
  },
})
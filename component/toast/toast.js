// pages/component/toast/toast.js
/**
 * 使用示例：
 * 1、在需要使用toast的页面wxml文件中添加 <toast id="toast" />
 * 2、在需要使用toast的页面js文件中
 *  onReady: function () {
 *    this.toast = this.selectComponent("#toast")
 *  }
 *  事件中调用 this.toast.show('提示信息')
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持 
  // },

  /**
   * 在组件实例被从页面节点树移除时执行
   */
  detached() {
    this.timer && clearTimeout(this.timer)
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeClass: '',
    content: '',
    style: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /** 
     * 显示toast，定义动画
     */
    show(val) {
      this.timer && clearTimeout(this.timer)

      this.setData({
        content: val || ''
      })

      const systemInfo = wx.getSystemInfoSync()
      const query = wx.createSelectorQuery().in(this)
      query.select('#m-toast').boundingClientRect((res) => {
        const { windowWidth, windowHeight } = systemInfo
        const { width, height } = res
        this.setData({
          activeClass: 'active',
          style: `left: ${(windowWidth - width) * .5}px; top: ${(windowHeight - height) * .5}px`
        })
      }).exec()

      /**
       * 延时消失
       */
      this.timer = setTimeout(() => {
        this.setData({
          activeClass: ''
        })
      }, 3000)
    }
  }
})

// component/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchButton: {
      type: Boolean,
      value: true
    },
    placeholder: {
      type: String,
      value: ''
    },
    jumpUrl: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindFocus: function (e) {
      if (this.data.jumpUrl) {
        wx.navigateTo({
          url: this.data.jumpUrl
        })
      }
    },
    /**
    * 失去焦点
    */
    bindBlur: function (e) {
      this.setData({
        keyword: (e.detail.value || '').trim()
      })
    },

    /**
     * 搜索
     */
    bindConfirm: function (e) {
      const keyword = (e.detail.value || this.data.keyword || '').trim()

      this.triggerEvent('search', { keyword })
    },
  }
})

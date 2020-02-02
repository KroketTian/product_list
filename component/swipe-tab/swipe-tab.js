// component/swipe-tab/swipe-tab.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    tabStyle: {
      type: String,
      value: ''
    },
    tabItemStyle: {
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
    bindTabTap: function (e) {
      const dataset = e.currentTarget.dataset

      this.setData({
        current: dataset.idx
      })

      this.triggerEvent('change', { current: dataset.idx })
    },
    bindChange: function (e) {
      const { current, source } = e.detail

      if (source !== 'touch') return

      this.setData({
        current
      })

      this.triggerEvent('change', { current })
    }
  }
})

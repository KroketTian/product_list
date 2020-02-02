// pages/component/category-list/category-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    distributorId: {
      type: String,
      value: ''
    },
    categories: {
      type: Array,
      value: []
    },
    categoryType: {
      type: Number,
      value: 11
    },
    active: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    subActives: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
    * 一级分类触摸事件
    */
    bindTabTap: function (event) {
      // 点开详情
      const dataset = event.currentTarget.dataset;
      if(dataset.code === this.properties.active){
        this.setData({
          active: '0'
        })
      }else{
        this.setData({
          active: dataset.code
        })
      }
      // 跳转
      if(event.currentTarget.dataset.searchKey){
        this.searchProduct(event)
      }else{
        
      }
      
    },
    /**
    * 二级分类触摸事件
    */
    bindSubTap: function (event) {
      const dataset = event.currentTarget.dataset
      const subActives = { ...this.data.subActives }

      subActives[dataset.code] = !this.data.subActives[dataset.code]

      this.setData({
        subActives
      })
    },
    /**
     * 修改列表页面的搜索关键字
     */
    searchProduct: function(event){
      var option = event.currentTarget.dataset.searchKey;
      this.triggerEvent('selectSearchOption',{seachKey:option})
    }
  }
})

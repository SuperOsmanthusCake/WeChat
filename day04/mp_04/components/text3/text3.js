const myBehavior = require('../../behaviors/behavios')
// components/text3/text3.js
Component({
  behaviors:[myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    count:Number
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
    countAdd(){
      this.setData({
        count: this.properties.count + 1
      })
      this.triggerEvent('sync',{count: this.properties.count})
    }
    
  }
})

// components/text/text.js
Component({
  /**
   * 组件的属性列表
   */
  observers:{
    'n1,n2':function(n1,n2){
      this.setData({
        sum: n1 + n2
      })
    }
  },
  properties: {
    max:{
      type:Number,
      value:10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    n1:0,
    n2:0,
    sum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countAdd(){
      if(this.data.count>=this.properties.max) return ; 
      this.setData({
        count:this.data.count + 1,
        max:this.properties.max+1
      })
      this._showCount()
    },
    _showCount(){
      wx.showToast({
        title: 'count的值为' + this.data.count,
        icon:'none'
      })
    },
    showInfo(){
      console.log(this.data);
      console.log(this.properties);
      console.log(this.properties===this.data);

    },
    n1Add(){
      this.setData({
        n1:this.data.n1 + 1,
      })
    },
    n2Add(){
      this.setData({
        n2:this.data.n2 + 1,
      })
    }
  }
})

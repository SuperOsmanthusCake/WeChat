// components/text1/text1.js
Component({
  /**
   * 组件的属性列表
   */
  observers:{
    '_rgb.**':function(obj){
      this.setData({
        fullColor:  `${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  properties: {

  },
  options:{
    pureDataPattern:/^_/
  },
  /**
   * 组件的初始数据
   */
  data: {
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR(){
      this.setData({
        '_rgb.r': this.data._rgb.r >= 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG(){
      this.setData({
        '_rgb.g': this.data._rgb.g >= 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB(){
      this.setData({
        '_rgb.b': this.data._rgb.b >= 255 ? 255 : this.data._rgb.b + 5
      })
    },
    _getRandColor(){
      this.setData({
        _rgb:{
          r:Math.floor(Math.random() * 256),
          g:Math.floor(Math.random() * 256),
          b:Math.floor(Math.random() * 256)
        }
      })
    }
  },
  lifetimes:{
    created(){
      console.log('create');
    },
    attached(){
      console.log('attached');
    }
  },
  pageLifetimes:{
    show(){
      console.log('show');
      this._getRandColor();
    },
    hide(){
      console.log('hide');
    },
    resize(){
      console.log('resize')
    }
  },
})

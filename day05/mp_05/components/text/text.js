import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
// components/text/text.js
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      numA:'numA',
      numB:'numB',
      sum:'sum'
    },
    actions:{
      updataNumB:'updataNumB'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

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
    numBAdd(e){
      this.updataNumB(e.target.dataset.step)
    }
  }
})

// 在这个js文件中专门来创建store的实例对象
import { observable,action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA:1,
  numB:2,
  active: 0,
  // 计算属性
  get sum(){
    return this.numA+this.numB
  },
  // action 修改数据字段
  updataNumA: action(function (step){
     this.numA += step
  }),
  updataNumB: action(function (step){
    this.numB += step
  }),
  updataActive(newVal){
    this.active = newVal
  }
})
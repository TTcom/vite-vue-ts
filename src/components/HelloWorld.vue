<template>
  <h1>
    {{ msg }}
    <a href="">一个文档</a>
  </h1>
  <div>
    <input type="text" ref="ainput" v-model="state.count" />
  </div>
  <button @click="addcount()">count is: {{ state.count }}</button>
  <button >doubble is: {{ doubble }}</button>
  <button @click="onstopwatchEffect">stopwatchEffect</button>
  <button @click="onsendmsg">onsendmsg</button>

</template>

<script setup lang="ts">
// import { defineProps, reactive,computed,toRefs,ref,onMounted,watch,watchEffect,defineEmit,useContext } from 'vue'
import {  reactive,computed,toRefs,ref,onMounted,watch,watchEffect  } from 'vue'
defineProps({
  msg: String
})
const allEmit = defineEmits(['getmsg'])  //定义emit事件

// const { expose } = useContext()
//expose暴露出组件的方法以供父组件调用

function addcount(msg?:string):void{
  console.log('msg',msg)
  state.count++
}
const a = 1
defineExpose({
    a,
    addcount
})
const onsendmsg = ()=>{
  allEmit('getmsg','isgetmsg')
}
type DSTtype = {
       count:number;
       doubble:number;
}
const ainput = ref(null)
const state:DSTtype= reactive({ 
  count: 0,
  doubble:computed(()=> state.count * 2) 
})

const onstopwatchEffect = ()=>{   //清除watchEffect
  stopwatchEffect()
}
const { doubble } = {...toRefs(state)}
const stopwatchEffect =  watchEffect(()=>{
  console.log('watchEffect',state.count)
})
watch(()=>state.count,(count,precount)=>{
   console.log('change',count,precount)
},{
  deep:true,
  immediate:true
})
onMounted(()=>{
  console.log(ainput.value)
  console.log(ainput.value.style = "color:red;")
  
})
</script>

<style lang="scss" scoped>
h1{
  color: blue;
  a {
  color: #42b983;
}
}

</style>

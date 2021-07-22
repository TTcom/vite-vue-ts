<template>
  <div class="home">
       <img src="../assets/logo.png" style="width: 50px;height: 50px;">
       <a-button type="primary">Primary</a-button>
       <HelloWorld ref="helloroot" @getmsg="getmsg"></HelloWorld>
       <!-- <span @click="num++">{{num}}</span>
       <div @click="goon">
         goon
       </div> -->
       <div v-for="(item,i) in data" ::key="i">{{item}}</div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import API from '@/api/apitest'
import qs from "qs";
// const state = reactive({ count: 0 })
// ref: num = 11
// function goon() {
//    console.log('num',num)
// }
enum requestEnum{
  GET = "GET",
  POST = "POST"
}
const helloroot = ref(null)
const data = ref([1,2,3])
onMounted( () => {
  let method:requestEnum = requestEnum.GET
   console.log('method', method)
   console.log('helloroot', helloroot)
   console.log('helloroot', helloroot.value.a)
   helloroot.value.addcount(1456)
})
const url = "/weapi/personalized/newsong";
const params = {
      params:
        "STMyFSxbdzPb7DBrQsRgSKKT4epwn8bb3w/lskS2EPgdpqyncXjbQVQHlBhUJnit",
      encSecKey:
        "47ea337a5ba27c4258f22a9ab71a69ba47b354b0ebf37cf9e8110448e19848e600ac61322044a9e6fe927bb5837a6d9acd8cc496b17595351891b30be71f5c6f800b0f961fb3947651b638df64a877a88e9f868e400ac1b61c19f3a53f1ddf8b8ea7151c9ad73ca02c2af954810b34a84cf4dbc2568bda818ea40e359fb76271"
    };

API.getNewSongs(url, params).then(res=>{
  console.log('res', res)
})
const getmsg = (msg)=>{
  console.log('homeemit',msg)
}
</script>

<style scoped lang="scss">

</style>

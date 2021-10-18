<template>
  <div class="home">
    <div v-for="(item, i) in testarr" :key="i" :ref="setItemRef">
      {{ item }}
    </div>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
          </a-list-item-meta>
          <template #extra>
            <img width="188" alt="logo" :src="item.picUrl" />
          </template>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onUpdated, onMounted } from "vue";
import API from "@/api/apitest";

interface DataItem {
  title: string;
  picUrl: string;
}
let itemRefs = reactive([]);
const setItemRef = (el) => {
  itemRefs.push(el);
};
onUpdated(() => {
  console.log("itemRefs", itemRefs);
});
onMounted(() => {
  console.log("itemRefs", itemRefs[2]);
});

let testarr = [1, 2, 3, 5];
const data = ref<DataItem[]>([]);

const url = "/weapi/personalized/newsong";
const params = {
  params: "STMyFSxbdzPb7DBrQsRgSKKT4epwn8bb3w/lskS2EPgdpqyncXjbQVQHlBhUJnit",
  encSecKey:
    "47ea337a5ba27c4258f22a9ab71a69ba47b354b0ebf37cf9e8110448e19848e600ac61322044a9e6fe927bb5837a6d9acd8cc496b17595351891b30be71f5c6f800b0f961fb3947651b638df64a877a88e9f868e400ac1b61c19f3a53f1ddf8b8ea7151c9ad73ca02c2af954810b34a84cf4dbc2568bda818ea40e359fb76271",
};
const getSongs = async function () {
  const res: any = await API.getNewSongs(url, params);
  console.log("res", res);
  res.result.forEach((val) => {
    data.value.push({ title: val.name, picUrl: val.picUrl });
  });
};
getSongs();
</script>
<style scoped lang="scss">
.home {
  box-sizing: content-box;
  padding: 10px 0;
  background: black;
  .ant-list-item-meta-title > a {
    color: white;
  }
}
</style>

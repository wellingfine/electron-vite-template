<template>
  <div id="wrapper">
    <img id="logo" :src="logo" alt="electron-vue" />
    <main>
      <div class="left-side">
        <span class="title"> </span>
        <system-information></system-information>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import logo from "@renderer/assets/logo.png";
import { ElMessage, ElMessageBox } from "element-plus";
import { onUnmounted, Ref, ref } from "vue";

import useStoreTemplate from "@store/template";

const storeTemplate = useStoreTemplate();

console.log(`storeTemplate`, storeTemplate.getTest);
console.log(`storeTemplate`, storeTemplate.getTest1);
console.log(`storeTemplate`, storeTemplate.$state.testData);

setTimeout(() => {
  storeTemplate.TEST_ACTION("654321");
  console.log(`storeTemplate`, storeTemplate.getTest1);
}, 1000);

const { ipcRenderer, shell } = require("electron");

let percentage = ref(0);
let colors: Ref<ColorInfo[]> | Ref<string> = ref([
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#6f7ad3", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#5cb87a", percentage: 100 },
]);

let dialogVisible = ref(false);
let progressStaus = ref(null);
let showForcedUpdate = ref(false);
let filePath = ref("");
let updateStatus = ref("");

let elPageSize = ref(100);
let elCPage = ref(1);
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  padding: 114px 80px;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}
.doc {
  margin-bottom: 10px;
}
.doc p {
  color: black;
  margin-bottom: 10px;
}
.doc .el-button {
  margin-top: 10px;
  margin-right: 10px;
}
.doc .el-button + .el-button {
  margin-left: 0;
}
.conten {
  text-align: center;
}
</style>

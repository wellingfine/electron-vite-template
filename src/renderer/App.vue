<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
</script>

<style></style>

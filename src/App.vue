<template>
  <TheHeader />
  <div id="nav">
    <AppLink to="/">Home</AppLink> |
    <AppLink to="/about">About</AppLink>
  </div>
  <router-view />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style></style>

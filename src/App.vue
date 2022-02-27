<template>
  <TheHeader />
  <div id="nav">
    <AppLink to="/">Home</AppLink> |
    <AppLink :to="{ name: 'ShoesCustom' }">Shoes Custom</AppLink> |
    <AppLink :to="{ name: 'ShoesCollection' }">Shoes Collection</AppLink> |
    <AppLink :to="{ name: 'Skate' }">Skate</AppLink> |
    <AppLink :to="{ name: 'Prints' }">Prints</AppLink>
  </div>
  <router-view />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style>
.active-link {
  color: red;
  opacity: 1;
}
</style>

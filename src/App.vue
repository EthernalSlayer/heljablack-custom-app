<template>
  <TheHeader v-on:burger-toggle="burgerToggle" />
  <TheBurgerMenu
    v-show="burgerOpen"
    v-on:auto-close="close"
    v-on:burger-close="burgerToggle"
  />
  <router-view />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheBurgerMenu from "@/components/TheBurgerMenu.vue";

export default {
  components: { TheHeader, TheBurgerMenu },
  data() {
    return {
      burgerOpen: false,
    };
  },
  methods: {
    burgerToggle() {
      this.burgerOpen = !this.burgerOpen;
    },
    close() {
      this.burgerOpen = false;
    },
  },
};
</script>

<style>
.active-link {
  color: red;
  opacity: 1;
}
</style>

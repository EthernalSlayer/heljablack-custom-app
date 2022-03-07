<template>
  <TheHeader v-on:burger-toggle="burgerToggle" />
  <TheBurgerMenu
    v-show="burgerOpen"
    v-on:auto-close="close"
    v-on:burger-close="burgerToggle"
  />
  <div class="main-container">
    <TheSidebar class="desktop-sidebar" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheBurgerMenu from "@/components/TheBurgerMenu.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  components: { TheHeader, TheBurgerMenu, TheSidebar },
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
@import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.active-link {
  color: red;
  opacity: 1;
}

.main-container {
  display: flex;
}

@media (max-width: 890px) {
  .desktop-sidebar {
    display: none;
  }
}
</style>

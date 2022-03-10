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
  <TheFooter class="mobile-footer-bar" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheBurgerMenu from "@/components/TheBurgerMenu.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheHeader, TheBurgerMenu, TheSidebar, TheFooter },
  data() {
    return {
      burgerOpen: false,
    };
  },
  methods: {
    burgerToggle() {
      this.burgerOpen = !this.burgerOpen;
      if (this.burgerOpen === true) {
        const body = document.getElementsByTagName("body");
        body[0].classList.add("modal-open");
      } else {
        const body = document.getElementsByTagName("body");
        body[0].classList.remove("modal-open");
      }
    },
    close() {
      this.burgerOpen = false;
      const body = document.getElementsByTagName("body");
      body[0].classList.remove("modal-open");
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

@media (min-width: 891px) {
  .mobile-footer-bar {
    display: none;
  }
}
</style>

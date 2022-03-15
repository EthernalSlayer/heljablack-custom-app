<template>
  <div class="footer-container">
    <div class="arrow-button" @click="shopNavToggle">
      <img src="@/assets/arrow-up.svg" alt="arrow icon" height="35" />
    </div>
    <Transition>
      <ShopNav v-show="shopNavOpen" v-on:auto-close="close" />
    </Transition>
    <div class="shop-bar" @click="shopNavToggle">
      <h2 class="shop-title">SHOP</h2>
    </div>
  </div>
</template>

<script>
import ShopNav from "@/components/ShopNav.vue";

export default {
  components: { ShopNav },
  data() {
    return {
      shopNavOpen: false,
    };
  },
  methods: {
    shopNavToggle() {
      this.shopNavOpen = !this.shopNavOpen;
    },
    close() {
      this.shopNavOpen = false;
    },
  },
};
</script>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0px;
  /* z-index: 1; */
}

.shop-bar {
  background-color: #000;
  box-shadow: 0px -4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shop-title {
  color: #fff;
  margin: 0;
  font-size: 48px;
  font-family: Megrim;
}

.arrow-button {
  background-color: #000;
  box-shadow: 0px -4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
}

.v-enter-active {
  animation: myAnim 0.5s;
}
.v-leave-active {
  animation: myAnim 0.2s reverse;
}

@keyframes myAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

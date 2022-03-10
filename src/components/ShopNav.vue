<template>
  <div class="sidebar-container">
    <div class="sidebar-item item-1">
      <div class="sidebar-item-text-container" @click="shoesToggle">
        <h2>SHOES</h2>
      </div>
    </div>
    <ul class="sidebar-subitem-list" v-show="shoesOpen">
      <AppLink :to="{ name: 'ShoesCustom' }" @click="autoClose">
        <li class="sidebar-subitem-list-item">CUSTOM</li>
      </AppLink>
      <AppLink :to="{ name: 'ShoesCollection' }" @click="autoClose">
        <li class="sidebar-subitem-list-item">COLLECTION</li>
      </AppLink>
    </ul>
    <AppLink :to="{ name: 'Skate' }" @click="autoClose">
      <div class="sidebar-item item-2">
        <div class="sidebar-item-text-container">
          <h2>SKATE</h2>
        </div>
      </div>
    </AppLink>
    <AppLink :to="{ name: 'Prints' }" @click="autoClose">
      <div class="sidebar-item item-3">
        <div class="sidebar-item-text-container">
          <h2>PRINT</h2>
        </div>
      </div>
    </AppLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoesOpen: false,
    };
  },
  methods: {
    shoesToggle() {
      this.shoesOpen = !this.shoesOpen;
    },
    autoClose() {
      this.shoesOpen = false;
      this.$emit("auto-close");
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  height: 100vh;
  width: 30%;
  position: sticky;
  top: 0px;
  background-color: #000;
}

.sidebar-item {
  display: flex;
  width: 100%;
  height: 33.3%;
  background-color: #000;
  justify-content: center;
  align-items: center;
}

.item-1 {
  background-image: url("../assets/hel-slipon-2.webp");
  background-position: center;
  background-size: cover;
}

.item-2 {
  background-image: url("../assets/hel-skate-1.webp");
  background-position: center;
  background-size: cover;
}

.item-3 {
  background-image: url("../assets/hel-print-2.webp");
  background-position: center;
  background-size: cover;
}

.sidebar-item-text-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
}

h2 {
  font-family: Sedgwick Ave Display;
  font-size: 72px;
  color: #ffd700;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  text-shadow: 4px 4px 4px #000000;
}

.sidebar-subitem-list {
  margin: 40px;
  list-style: none;
}

.sidebar-subitem-list-item {
  font-family: Roboto;
  font-size: 36px;
  color: #fff;
  text-align: center;
  margin: 20px;
}

@media (max-width: 890px) {
  .sidebar-container {
    width: 100%;
    height: 68vh;
    position: relative;
  }
}
</style>

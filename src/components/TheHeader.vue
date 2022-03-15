<template>
  <div class="header-container">
    <div class="icon-container" @click="select">
      <img
        class="burger-icon"
        src="@/assets/burger-icon.svg"
        alt="burger icon"
      />
    </div>
    <div class="logo-container">
      <AppLink class="shopTitle-container" to="/"
        ><img
          class="heljablack-logo"
          src="@/assets/heljablack-logo-white.svg"
          alt="heljablack icon"
      /></AppLink>
    </div>
    <AppLink class="shopTitle-container" to="/"
      ><h1 class="shopTitle">Heljablack Custom</h1></AppLink
    >
  </div>
</template>

<script>
export default {
  methods: {
    select() {
      this.$emit("burger-toggle");
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 107px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 2;
}

@media (max-width: 890px) {
  .header-container {
    height: 70px;
  }

  .shopTitle {
    display: none;
  }

  .logo-container {
    width: 50%;
  }

  .icon-container {
    width: 50%;
    display: flex;
    justify-content: flex-start;
  }

  .burger-icon {
    margin-left: 10px;
  }
}

@media (min-width: 891px) {
  .heljablack-logo {
    display: none;
  }

  .shopTitle-container {
    width: 100%;
  }

  .shopTitle {
    width: 100%;
    font-family: "Megrim", cursive;
    font-size: 55px;
    color: #fff;
    text-align: center;
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
  }

  .burger-icon {
    margin-left: 10px;
  }
}
</style>

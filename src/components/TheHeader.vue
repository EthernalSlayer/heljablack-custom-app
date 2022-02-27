<template>
  <div class="header-container">
    <div class="icon-container">
      <img
        class="burger-icon"
        src="@/assets/burger-icon.svg"
        alt="burger icon"
      />
    </div>
    <div class="logo-container">
      <img
        class="heljablack-logo"
        src="@/assets/heljablack-logo-white.svg"
        alt="heljablack icon"
      />
    </div>
    <h1 class="shopTitle">Heljablack Custom</h1>
  </div>
</template>

<script>
export default {};
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
}

@media (max-width: 890px) {
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

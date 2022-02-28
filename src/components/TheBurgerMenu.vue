<template>
  <div class="container">
    <div class="burger-menu-container">
      <ul class="list">
        <li class="list-item">
          <AppLink to="/" @click="autoClose">home</AppLink>
        </li>
        <li class="list-item" @click="openShoes">
          shoes
          <ul class="list" v-show="shoesOpen">
            <li class="sublist-item">
              <AppLink :to="{ name: 'ShoesCustom' }">custom</AppLink>
            </li>
            <li class="sublist-item">
              <AppLink :to="{ name: 'ShoesCollection' }">collection</AppLink>
            </li>
          </ul>
        </li>
        <li class="list-item">
          <AppLink :to="{ name: 'Skate' }" @click="autoClose">skate</AppLink>
        </li>
        <li class="list-item">
          <AppLink :to="{ name: 'Prints' }" @click="autoClose">prints</AppLink>
        </li>
      </ul>
      <ul class="list">
        <li class="list-item">politique de confidentialité</li>
        <li class="list-item">payment</li>
        <li class="list-item">envoi</li>
      </ul>
      <img
        class="instagram-icon"
        src="@/assets/instagram-icon.svg"
        alt="instagram icon"
        height="80"
      />
      <p class="signature">Made by EthernalSlayer</p>
    </div>
    <div class="burger-menu-overlay" @click="overlayClick"></div>
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
    autoClose() {
      this.$emit("auto-close");
    },
    overlayClick() {
      this.$emit("burger-close");
    },
    openShoes() {
      this.shoesOpen = !this.shoesOpen;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
}

.burger-menu-container {
  width: 25%;
  height: 100vh;
  background: #373737;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 4px 2px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.burger-menu-overlay {
  width: 75%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
}

.list {
  list-style: none;
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
}

.list-item {
  margin: 30px 0;
}

.sublist-item {
  margin: 10px 0;
}

.instagram-icon {
  margin: 30px 0;
}

.signature {
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-family: Roboto;
  margin-top: 70px;
}
</style>

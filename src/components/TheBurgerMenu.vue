<template>
  <div class="container">
    <div class="burger-menu-container">
      <AppLink
        class="insta-logo-container"
        to="https://www.instagram.com/heljablack/"
      >
        <img
          class="instagram-icon"
          src="@/assets/instagram-icon.svg"
          alt="instagram icon"
          height="60"
        />
      </AppLink>
      <ul class="list">
        <li class="list-item">
          <AppLink to="/" @click="autoClose">home</AppLink>
        </li>
        <li class="list-item" @click="openShoes">
          shoes
          <ul class="sublist" v-show="shoesOpen">
            <li class="sublist-item">
              <AppLink :to="{ name: 'ShoesCustom' }" @click="autoClose"
                >custom</AppLink
              >
            </li>
            <li class="sublist-item">
              <AppLink :to="{ name: 'ShoesCollection' }" @click="autoClose"
                >collection</AppLink
              >
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
        <li class="list-item">
          <AppLink :to="{ name: 'Confidentials' }" @click="autoClose"
            >politique de confidentialité</AppLink
          >
        </li>
        <li class="list-item">payment</li>
        <li class="list-item">envoi</li>
      </ul>
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
  min-height: 100%;
  top: 107px;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
}

.burger-menu-container {
  width: 32%;
  height: 100%;
  background: #373737;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 4px 0px 4px 2px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.burger-menu-overlay {
  width: 75%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
}

.list {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
}

.sublist {
  list-style: none;
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
}

.list-item {
  cursor: pointer;
}

.insta-logo-container {
  align-self: center;
}

.instagram-icon {
  margin-top: 15px;
}

.signature {
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-family: Roboto;
  margin-top: 35px;
}

@media (max-width: 890px) {
  .container {
    top: 70px;
  }

  .burger-menu-container {
    width: 150%;
    height: 100%;
  }
}
</style>

<template>
  <div class="prints">
    <h3 class="print-title">Prints</h3>
    <h4 class="print-subtitle">1 - Choisi le(s) print(s) que tu veux</h4>
    <div class="prints-card-container">
      <div
        class="prints-card"
        :class="{ selected: selectedPrints.find((el) => el.id === print.id) }"
        v-for="print in prints"
        :key="print.id"
        @click="selectPrint(print)"
      >
        <img
          class="prints-card-img"
          :src="`/images/${print.image}`"
          :alt="print.name"
        />
        <div class="print-price-container">
          <p class="print-price">{{ print.price }} €</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      prints: sourceData.prints,
      selectedPrints: [],
    };
  },
  methods: {
    selectPrint(print) {
      if (this.selectedPrints.find((el) => el.id === print.id)) {
        this.selectedPrints = this.selectedPrints.filter(
          (el) => el.id !== print.id
        );
      } else {
        this.selectedPrints.push(print);
      }
    },
  },
};
</script>

<style scoped>
.prints {
  width: 70%;
}

.print-title {
  widows: 100%;
  font-family: "Megrim", cursive;
  font-size: 40px;
  text-align: center;
}

.print-subtitle {
  font-family: Roboto;
  font-size: 24px;
  margin-top: 100px;
  margin-left: 20px;
}

.prints-card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  margin-bottom: 5em;
}

.prints-card {
  width: 40%;
  height: 40%;
  margin-bottom: 2em;
}

.prints-card:hover {
  cursor: pointer;
}

.prints-card-img {
  width: 100%;
  border-radius: 10px;
}

.print-price-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.print-price {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 150px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
}

.selected > div > p {
  background-color: #ffd700;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 890px) {
  .prints {
    width: 100%;
  }

  .prints-card {
    width: 70%;
    height: 70%;
  }
}
</style>

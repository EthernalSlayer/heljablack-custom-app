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
    <h4 class="print-subtitle">2 - vérifies ton panier</h4>
    <div class="cart-container">
      <div class="cart-line" />
      <p v-for="print in selectedPrints" :key="print.id" class="cart-item">
        {{ print.name }} {{ print.price }}€
      </p>
      <p class="cart-total">total: {{ totalPrice }}€</p>
      <div class="cart-line" />
    </div>
    <h4 class="print-subtitle">3 - remplis le formulaire</h4>
    <form class="print-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label" for="lastName">nom :</label>
        <input
          class="text-input"
          type="text"
          id="lastName"
          v-model="form.nom"
          placeholder="nom"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="firstName">prenom :</label>
        <input
          class="text-input"
          type="text"
          id="firstName"
          v-model="form.prenom"
          placeholder="prénom"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="mail">mail :</label>
        <input
          class="text-input"
          type="text"
          id="mail"
          v-model="form.email"
          placeholder="adresse mail"
          required
        />
      </div>
      <button class="submit-button">COMMANDER</button>
    </form>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import axios from "axios";

export default {
  data() {
    return {
      prints: sourceData.prints,
      selectedPrints: [],
      form: {
        nom: "",
        prenom: "",
        email: "",
      },
    };
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.selectedPrints.forEach((print) => (price += print.price));
      return price;
    },
    order() {
      let commandItems = [];
      this.selectedPrints.forEach((print) => commandItems.push(print.name));
      return { ...this.form, articles: commandItems, prix: this.totalPrice };
    },
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
    submitForm() {
      axios
        .post("https://heljablack-mailer.ethernalslayer.com/prints", this.order)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.form = {
        nom: "",
        prenom: "",
        email: "",
      };
      this.selectedPrints = [];
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

.cart-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
}

.cart-line {
  width: 90%;
  height: 2px;
  background-color: #000;
}

.cart-item {
  font-family: Roboto;
  font-size: 16px;
}

.cart-total {
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
}

.print-form {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-group {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.form-label {
  font-family: Roboto;
  font-size: 16px;
  width: 25%;
  margin-top: 30px;
}

.text-input {
  width: 55%;
  margin: 15px;
  padding: 15px;
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
}

.submit-button {
  width: 218px;
  align-self: center;
  background: #000;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 150px;
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  color: #fff;
}

.submit-button:hover {
  cursor: pointer;
  border: 1px #fff solid;
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

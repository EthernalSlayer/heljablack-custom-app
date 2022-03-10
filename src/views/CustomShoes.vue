<template>
  <div class="custom-shoes-view">
    <h3 class="custom-shoes-title">Custom Shoes</h3>
    <form class="custom-shoes-form" @submit.prevent="submitForm">
      <div class="name-form-group">
        <div class="text-form-group">
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
        <div class="text-form-group">
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
      </div>
      <div class="mail-form-group">
        <div class="text-form-group">
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
        <div class="text-form-group">
          <label class="form-label" for="pointure">pointure :</label>
          <select
            class="select-input"
            name="pointure"
            id="pointure"
            v-model="form.size"
            required
          >
            <option
              v-for="shoesSize in shoeSizes"
              :key="shoesSize.id"
              :value="shoesSize.size"
            >
              {{ shoesSize.size }}
            </option>
          </select>
        </div>
      </div>
      <div class="model-form-group">
        <p class="form-label-model">modèle :</p>
        <div class="radio-button-container">
          <label
            class="radio-button-label"
            v-for="shoesModel in shoesModels"
            :key="shoesModel.id"
            :for="shoesModel.name"
            ><input
              class="radio-input"
              :value="shoesModel.name"
              v-model="form.model"
              type="radio"
              name="model"
              :id="shoesModel.name"
              required
            />
            <div class="radio-button">{{ shoesModel.name }}</div>
          </label>
        </div>
      </div>
      <div class="description-form-group">
        <label class="form-label-description" for="message"
          >description :</label
        >
        <textarea
          class="description-text-area"
          name="message"
          id="message"
          v-model="form.description"
          placeholder="Décris la paires custom de tes rêves"
          required
        ></textarea>
      </div>
      <div class="submit-button-form-group">
        <button class="submit-button">ENVOYER</button>
      </div>
    </form>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        email: "",
        size: "",
        model: "",
        description: "",
      },
      shoesModels: sourceData.shoesModels,
      shoeSizes: sourceData.shoeSizes,
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      axios
        .post(
          "https://heljablack-mailer.ethernalslayer.com/shoes/custom",
          this.form
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.custom-shoes-view {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-shoes-title {
  width: 100%;
  font-family: "Megrim", cursive;
  font-size: 40px;
  text-align: center;
}

.custom-shoes-form {
  width: 90%;
  display: flex;
  flex-direction: column;
}

.form-label {
  font-family: Roboto;
  font-size: 24px;
  width: 25%;
}

.form-label-model {
  font-family: Roboto;
  font-size: 24px;
  width: 70%;
}

.form-label-description {
  font-family: Roboto;
  font-size: 24px;
  width: 70%;
  margin-top: 50px;
}

.name-form-group,
.mail-form-group {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.text-form-group {
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
}

.text-input {
  width: 55%;
  margin: 15px;
  padding: 15px;
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
}

.select-input {
  width: 30%;
  margin: 15px;
  padding: 15px;
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
}

.model-form-group,
.description-form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio-button-container {
  display: flex;
}

.radio-input {
  appearance: none;
}

.radio-button {
  width: 120px;
  font-family: Roboto;
  font-size: 22px;
  text-align: center;
  padding: 10px;
  margin: 15px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.radio-input:checked + div {
  color: #fff;
  background-color: #000;
}

.submit-button-form-group {
  display: flex;
  justify-content: center;
}

.submit-button {
  width: 218px;
  background: #ffd700;
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

.description-text-area {
  width: 60%;
  height: 150px;
  padding: 10px;
  margin: 20px;
  box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
}

@media (max-width: 890px) {
  .custom-shoes-view {
    width: 100%;
  }

  .custom-shoes-form {
    width: 100%;
  }

  .name-form-group,
  .mail-form-group {
    flex-direction: column;
    justify-content: center;
  }

  .text-form-group {
    width: 100%;
    justify-content: center;
  }

  .form-label,
  .form-label-model,
  .form-label-description {
    font-size: 21px;
  }

  .radio-button-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .description-text-area {
    width: 80%;
  }
}
</style>

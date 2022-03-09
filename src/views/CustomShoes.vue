<template>
  <div class="custom-shoes-view">
    <h3 class="custom-shoes-title">Custom Shoes</h3>
    <form class="custom-shoes-form">
      <div class="name-form-group">
        <label class="form-label" for="lastName">nom :</label>
        <input
          class="text-input"
          type="text"
          id="lastName"
          v-model="form.nom"
          placeholder="nom"
          required
        />
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
      <div class="mail-form-group">
        <label class="form-label" for="mail">mail :</label>
        <input
          class="text-input"
          type="text"
          id="mail"
          v-model="form.email"
          placeholder="adresse mail"
          required
        />
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
            /><span class="radio-button">{{ shoesModel.name }}</span>
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
  widows: 100%;
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

.text-input {
  width: 27%;
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
  font-family: Roboto;
  font-size: 22px;
  padding: 10px;
  margin: 15px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.radio-input:checked + span {
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
  margin-bottom: 200px;
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
    flex-wrap: wrap;
  }

  .text-input {
    width: 80%;
    margin-left: 50px;
    margin-right: 50px;
  }

  .radio-button-container {
    flex-wrap: wrap;
    height: 120px;
    justify-content: center;
    align-content: space-around;
  }

  .radio-button-label {
    height: 0px;
    margin: 0;
    padding: 0;
  }

  .description-text-area {
    width: 80%;
  }
}
</style>

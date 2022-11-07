<template>
  <div class="custom-skate-view">
    <h3 class="custom-skate-title">Custom Skate</h3>
    <form class="custom-skate-form" ref="form" @submit.prevent="submitForm">
      <div class="name-form-group">
        <div class="text-form-group">
          <label class="form-label" for="lastName">nom :</label>
          <input
            class="text-input"
            type="text"
            id="lastName"
            name="nom"
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
            name="prenom"
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
            name="email"
            v-model="form.email"
            placeholder="adresse mail"
            required
          />
        </div>
        <div class="text-form-group"></div>
      </div>
      <div class="size-form-group">
        <label class="form-label-size" for="pointure"
          >taille de la planche :</label
        >
        <select
          class="select-input"
          name="pointure"
          id="pointure"
          v-model="form.size"
          required
        >
          <option
            v-for="skateSize in skateSizes"
            :key="skateSize.id"
            :value="skateSize.size"
          >
            {{ skateSize.size }}
          </option>
        </select>
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
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        email: "",
        size: "",
        description: "",
      },
      skateSizes: sourceData.skateSize,
    };
  },
  methods: {
    submitForm() {
      emailjs
        .sendForm(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_1,
          this.$refs.form,
          process.env.PUBLIC_KEY
        )
        .then(
          (result) => {
            this.$toast.success("email envoyer", {
              position: "top-right",
              duration: 3077,
              max: 1,
            });
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            this.$toast.error("echec de l'envoi", {
              position: "top-right",
              duration: 3077,
              max: 1,
            });
            console.log("FAILED...", error.text);
          }
        );
      this.form = {
        nom: "",
        prenom: "",
        email: "",
        size: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.custom-skate-view {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-skate-title {
  width: 100%;
  font-family: "Megrim", cursive;
  font-size: 40px;
  text-align: center;
}

.custom-skate-form {
  width: 90%;
  display: flex;
  flex-direction: column;
}

.form-label {
  font-family: Roboto;
  font-size: 24px;
  width: 25%;
}

.form-label-size {
  font-family: Roboto;
  font-size: 24px;
  width: 70%;
  margin-top: 50px;
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

.select-input:hover {
  cursor: pointer;
}

.size-form-group,
.description-form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.submit-button:hover {
  cursor: pointer;
  border: 1px #fff solid;
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
  .custom-skate-view {
    width: 100%;
  }

  .custom-skate-form {
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
  .form-label-size,
  .form-label-description {
    font-size: 21px;
  }

  .description-text-area {
    width: 80%;
  }
}
</style>

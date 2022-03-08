<template>
  <div class="home">
    <h3 class="gallery-title">Mes Créations</h3>
    <div class="gallery-card-container">
      <img
        class="gallery-card-img"
        v-for="realisation in realisations"
        :key="realisation.id"
        :src="`/images/${realisation.image}`"
        :alt="realisation.name"
      />
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      realisations: sourceData.realisations,
    };
  },
};
</script>

<style scoped>
.home {
  width: 70%;
}

.gallery-title {
  widows: 100%;
  font-family: "Megrim", cursive;
  font-size: 40px;
  text-align: center;
}

.gallery-card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  margin-bottom: 5em;
}

.gallery-card-img {
  width: 40%;
  height: 40%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 2em;
}

@media (max-width: 890px) {
  .home {
    width: 100%;
  }

  .gallery-card-img {
    width: 70%;
    height: 70%;
  }
}
</style>

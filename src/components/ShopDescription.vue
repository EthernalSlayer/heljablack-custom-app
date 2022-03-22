<template>
  <div class="description-container">
    <div class="breakline-container-top">
      <img class="breakline" src="@/assets/breakline-2.svg" alt="break line" />
    </div>
    <h3 class="description-title">Le Concept</h3>
    <div class="description-text-container">
      <p class="description-text">
        bienvenu sur ma boutique de custom en ligne ! <br />
        <br />
        Tu pourras trouver ici toutes mes dernières créations custom et si toi
        aussi tu veux ta propre customisation entièrement faite par mes soins
        n'hésite pas à aller visiter les sections "shoes" et "skate" pour
        commander l'article custom de tes rêves. <br />
        <br />
        Si tu souhaites faire un cadeau sympa ou encore décorer ton petit chez
        toi, n'hésite pas à aller faire un tour dans la section "prints". Tu
        pourras y découvrir toutes mes dernières séries de prints et commander
        celui qui te plaît.
      </p>
    </div>
    <div class="breakline-container-bottom">
      <img class="breakline" src="@/assets/breakline-2.svg" alt="break line" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.description-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description-title {
  widows: 100%;
  font-family: "Megrim", cursive;
  font-size: 40px;
  text-align: center;
}

.breakline-container-top {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.breakline-container-bottom {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.breakline {
  width: 60%;
}

.description-text-container {
  width: 60%;
  align-self: center;
  margin-bottom: 35px;
}

.description-text {
  font-family: Roboto;
  font-size: 24px;
}

@media (max-width: 890px) {
  .breakline {
    width: 90%;
  }

  .description-text-container {
    width: 90%;
  }

  .description-text {
    font-size: 20px;
  }
}
</style>

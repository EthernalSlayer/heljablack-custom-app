<template>
  <div class="confidentials-view">
    <h3 class="confidentials-title">Envoi</h3>
    <h4 class="confidentials-subtitle">Intro</h4>
    <ul>
      <li>
        <p>
          La satisfaction de nos client est primordial à nos yeux. Cette page
          est là pour vous informer en détails sur notre politique de livraison.
        </p>
      </li>
      <li>
        <p>
          Notre politique de livraison pourra évoluer en fonction de l'évolution
          du site. Il vous sera possible de voir les changements ici
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Condition de livraison</h4>
    <ul>
      <li>
        <p>
          Pour le moment, pour des raisons logistique, nous autorisons
          uniquement les livraisons en France métropolitaine.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">méthode de livraison</h4>
    <ul>
      <li>
        <p>
          Pour des raisons de simplicité nous proposons uniquement l'envoi via
          colissimo. Aucun envoi de type express ne sera proposer sur nos
          articles.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Délai de livraison</h4>
    <ul>
      <li>
        <p>
          Nos produits sont spécialement customisés pour nos clients, la
          customisation ne commencera dès que le paiement aurra été effectuer,
          par conséquent nos délai de livraison sont assez long. En fonction de
          la disponibilité de l'artiste et de la complexité de la customisation
          les délai de création sont variables. Quand le colis vous sera
          expédier, vous recevrez un mail pour vous informer de la livraison
          imminente du colis, une fois le mail reçu le colis devrait vous être
          livrer en moins d'une semaine (jours ouvrables).
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Suivi du colis</h4>
    <ul>
      <li>
        <p>
          Dans le mail de notification de l'expédition de la commande, un numéro
          de suivi vous sera communiquer. Celui ci vous permetra de suivre votre
          colis en temps réel et de savoir avec précision quand le colis vous
          sera livrer.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.confidentials-view {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.confidentials-title {
  width: 100%;
  font-family: "Megrim", cursive;
  font-size: 30px;
  text-align: center;
}

.confidentials-subtitle {
  font-family: Roboto;
  font-size: 24px;
  text-align: center;
}

@media (max-width: 890px) {
  .confidentials-view {
    width: 100%;
    margin: 15px;
    margin-bottom: 120px;
  }
}
</style>

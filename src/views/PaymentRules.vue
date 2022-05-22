<template>
  <div class="confidentials-view">
    <h3 class="confidentials-title">Payment</h3>
    <h4 class="confidentials-subtitle">Intro</h4>
    <ul>
      <li>
        <p>
          La satisfaction de nos client est primordial à nos yeux. Cette page
          est là pour vous informer en détails sur notre politique de paiement.
        </p>
      </li>
      <li>
        <p>
          Notre politique de paiement pourra évoluer en fonction de l'évolution
          du site. Il vous sera possible de voir les changements ici
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Moyen de paiement</h4>
    <ul>
      <li>
        <p>
          Pour le moment nous autorisons uniquement les réglements effectuer via
          paypal en mode personnel.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">paiement</h4>
    <ul>
      <li>
        <p>
          Dans un premier temps vous devrez remplir un formulaire de contact
          pour décrire le projet custom que vous voulez. Ensuite si le projet
          est accepté un mail vous sera envoyer, contenant l'adresse du compte
          paypal sur lequel vous devrez effectuer le virement.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Remboursement, retour et échange</h4>
    <ul>
      <li>
        <p>
          Notre site est spécialisé dans la création d'article custom et donc
          chaque article est imaginé et conçu pour une personne bien spécifique,
          c'est donc pour cela qu'aucun remboursement, retour ou échange ne sera
          accepté. Si vous passer commande sur notre site vous vous engagez donc
          à avoir pris connaissances de ces informations et savez qu'aucun
          remboursement ne pourra être effectuer une fois le travail commencer.
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

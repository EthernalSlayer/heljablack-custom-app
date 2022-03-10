<template>
  <div class="confidentials-view">
    <h3 class="confidentials-title">Politiques de confidentialité</h3>
    <h4 class="confidentials-subtitle">Intro</h4>
    <ul>
      <li>
        <p>
          La confidentialité de nos visiteurs est très importante à nos yeux, et
          nous engageons à la protéger. Cette page est là pour vous informer en
          détails de ce que nous faisons de vos informations personneles.
        </p>
      </li>
      <li>
        <p>
          Notre politique de confidentialité pourra évoluer en fonction de
          l'évolution du site. Il vous sera possible de voir les changements ici
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Collecte d'informations personnelles</h4>
    <ul>
      <li>
        <p>
          Pour le moments se site ne requiert pas l'utilisation de cookies pour
          fonctionner. N'ayant pas non plus besoin de vous authentifier il n'y a
          également aucune informations vous concernant dans nos bases de
          données.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">
      Utilisation de vos informations personnelles
    </h4>
    <ul>
      <li>
        <p>
          Les seul informations personnelles utilisées sont celles que vous
          inscrivez dans le formulaire pour passer commande, ces informations
          seront uniquement utilisées pour l'envoi d'un mail et ne seront pas
          collectées.
        </p>
      </li>
    </ul>
    <h4 class="confidentials-subtitle">Sites web tiers</h4>
    <ul>
      <li>
        <p>
          Notre site contient des liens menant vers des sites web tiers. Nous
          n'avons aucun contrôle sur ces sites et ne somme pas responsable de
          leur politiques de confidentialité ni de leur pratique
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

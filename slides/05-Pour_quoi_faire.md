# Pour quoi faire **?**

---
<style scoped>
section {
    text-align: center
}
ul {
    list-style-type: none
}
</style>

## **TL**;**DR**<br>🔻<br>créer une **~~équipe~~** culture qualité

* accélérer la mise en production
* atténuer les goulots d'étranglement
* raccourcir la boucle de feedback

---

## **Échouer** au plus tôt

<!--
La qualité comme facteur de réduction des coûts,
rien de plus coûteux que le temps passé
par le support client et les équipes de dev
pour résoudre les problèmes rencontrés par les utilisateurs
-->

* revue de design

<!--
[raccourcir la boucle de feedback]
Utiliser les revue de design (UX & solution technique) pour:
- discuter les impacts sur les utilisateurs
- discuter la nécessité / priorité (c'est le meilleur moment pour changer d'avis)
- tester sur papier les différents cas, surtout les cas d'erreurs
- collecter le feedback des équipes supports
-->

* petits incréments

<!--
[accélérer la mise en production]
[raccourcir la boucle de feedback]
Petits incréments au plus tôt:
- revue de design des que possible pour commencer les développements en parallèle
- build en continue pour commencer les tests exploratoire des que possible
- déploiement au plus tot pour avoir le design selon les retours utilisateurs
-->

---

## Améliorer la **réception** par les utilisateurs

<!--
La qualité comme facteur d'amélioration des revenus,
quelque soit le budget marketing,
des utilisateurs insatisfaits ne génèrent pas de revenu,
mais plutôt des revues négatives qui peuvent déterrer de futures utilisateurs
une mauvaise reception nécessite un budget plus important en support
-->

* interview d'utilisateurs
<!--
[raccourcir la boucle de feedback]
Utiliser les interview d'utilisateurs:
- collecter les avis sur de futurs changements
- identifier les points douloureux
-->

* revue de design
<!--
[raccourcir la boucle de feedback]
Utiliser les revue de design (UX & solution technique) pour:
- discuter les impacts sur les utilisateurs
- identifier les différents cas, surtout les cas d'erreurs
- collecter le feedback des équipes supports
-->

* tests de localisation
<!--
[raccourcir la boucle de feedback]
Tester la localisation pour:
- éviter une mauvaise expérience utilisateurs (traductions confuses or incorrectes)
- éviter une mauvaise perception de votre produit (traduction par la machine)
-->

* utilisation d'un design system
<!--
[accélérer la mise en production]
Utiliser un design system pour:
- réduire le temps sur le design et le développement de l'interface
- réduire le temps d'apprentissage des nouvelles fonctionnalités (ergonomie)
- réduire les risques de bugs
-->

* messages d'erreur explicites
<!--
[raccourcir la boucle de feedback]
Utiliser messages d'erreur explicites - trop souvent traités en 2nde classe - pour:
- réduire le temps de résolution avant la prod et en prod
- réduire les coût du support client  - certaines erreurs peuvent être résolu sans support
-->

---

## Réduire le travail des **équipes**

* automatisation des tâches
<!--
[atténuer les goulots d'étranglement]
Automatiser des tâches pour libérer le temps de vos équipes, par exemples:
- pipeline de déploiement
- surveillances des resources (alerte)
- réparation des incidents
- automatisation des traductions
- automatisation des tests
- generation de la documentation
-->

* feature toggle
<!--
[accélérer la mise en production]
Utiliser les feature toggles pour:
- déployer avec des incertitudes et réduire le temps en tests
- stopper les problèmes en production et réduire le temps en support
-->

* tests exploratoires
<!--
[accélérer la mise en production]
Utiliser les tests exploratoire
- réduire le temps passé à maintenir des cas de tests
- augmenter le temps sur l'execution des tests
- ajuster rapidement le périmètre de tests
-->

---

## Améliorer la **communication** interne

* backlog à taille humaine

* minimiser les dépendances

* objectifs d'équipe

* communiquer avec les équipes support
<!--
[raccourcir la boucle de feedback]
Communiquer avec les équipes support, ce sont vos meilleurs alliés:
- informer au plus tot des changements pour anticiper le besoin de support
- identifier les problèmes les plus frequents pour les réduire
-->

* roadmaps transparentes

<!--
[atténuer les goulots d'étranglement]
Les roadmaps doivent être transparentes:
- chacun doit comprendre pourquoi on décide de faire quelque chose
- important de comprendre les impacts si on ne le fait pas, ou si on est en retard
- les autres équipes doivent pouvoir alerter les risques de conflits, pensez finances, juridique, support client... pas seulement équipe techniques
Avec plus d'une application, il est facile d'avoir plusieurs fonctionnalités majeurs planifiées dans la même période:
- risque de surcharge des équipes support
- risque de ralentissement sur la résolution des bugs (on ne sait pas quel changement créer une régression)
- perte de visibilité sur les métriques, quels changements affecte positivement les avis utilisateurs et lequel négativement
-->

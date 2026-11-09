# Projet 1 - starship

## Mise en place du Projet

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).  
  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Exécution du projet:

1) Cloner le dépot :

`git clone git@gitlab-etu.fil.univ-lille.fr:thais.laroque.etu/tp-js-s4-24-25.git`

2) Si c'est pas déja fait :

`npm install`

3) Pour générer le Bundle :

`npm run build`

4) Démarer le serveur :

`npm run dev-server`

### Travail réalisé

Le tp est finit est fonctionne très bien!
On a codé :

- Les déplacement du vaisseau avec les touches fléchées.
- Les tir avec la barre espace.
- Apparition d'une soucoupe avec un bouton.
- Appartition d'une flotte de soucoupe avec un bouton.
- Un système de score



J'ai rajouté de nouvelles fonctionnalté comme par exemple:
Quand on touche un vaisseau l'écran "tremble"
Et j'ai rajouté un boule orange pour simuler l'effet d'une explosion.
J'ai également ajouté des messages dans la console par rapport au score du joueur (pour que se soit plus immersif).

Donc on a :

- Effet d'explosion lorsqu'une soucoupe est détruite.
- Messages dynamiques en fonction du score.

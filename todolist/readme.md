# projet 2 "React"

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp5` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).

  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.


--------------------------------------------------------------------------------------------------------------------
### Votre travail

## Installation:

1) Avant d'exécuter le projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

    Node.js : Téléchargez Node.js si ce n'est pas déjà fait.

2) Clonner le dépot :

```bash
git@gitlab-etu.fil.univ-lille.fr:thais.laroque.etu/tp-js-s4-24-25.git 
cd tp5
```

3) Installation des dépendances

```bash
npm install
npm run dev-server
```

4) Utilisation de l'application 

### Structure du projet :

```
/src
  /components
    - Task.jsx
    - Todo.jsx
    - Done.jsx
    - AddTask.jsx
    - PriorityScale.jsx
    - PriorityLevel.jsx
    - TaskApp.jsx
  /assets
    /style
      - Task.css
      - DoneButton.css
      - TaskList.css
      - PriorityScale.css
      - PriorityLevel.css
  /data
    - tasksData.js
  /scripts
    - main.js
  
```

--------------------------------------------------------------------------------------------------------------------

Task.jsx : Composant principal représentant une tâche.

Todo.jsx : Composant pour afficher la liste des tâches à faire.

Done.jsx : Composant pour afficher la liste des tâches terminées.

TaskApp.jsx : Composant racine de l'application qui gère l'état et l'affichage des tâches.

PriorityScale.jsx : Composant pour ajuster la priorité des tâches.

PriorityLevel.jsx : Composant qui affiche un niveau de priorité sous forme de boutons.


--------------------------------------------------------------------------------------------------------------------

### Travail réalisé

Résumé de mon projet
# 1) Création du composant TaskApp
Dans cette première étape, j'ai créé un composant TaskApp qui inclut un autre composant Todo affichant un contenu statique. Ce dernier représente une liste de tâches "à faire". J'ai également ajouté deux variables d'état dans TaskApp :

    - Une pour gérer la liste des tâches à faire (tacheAFaire).

    - Une pour gérer les tâches "faites" (tachesFaite).

# 2) Création du composant Task
Ensuite, j'ai créé le composant Task, qui gère une seule tâche, en affichant sa description et sa durée. Pour l'instant, je n'avais pas encore pris en compte l'échelle de priorité ni le bouton "done".

# 3) Modification du composant Todo
Le composant Todo a été modifié pour qu'il génère plusieurs composants Task à partir de la liste des tâches à faire, qui sont transmises en tant que propriété.

# 4) Ajout des informations sur le nombre de tâches et la durée totale dans Todo
J'ai ajouté un bloc dans le composant Todo pour afficher le nombre de tâches et la durée totale des tâches à faire.

# 5) Gestion de l'ajout de tâches
J'ai ensuite créé un composant AddTask qui permet d'ajouter de nouvelles tâches dans la liste des tâches à faire, et donc de mettre à jour l'état de tacheAFaire.

# 6) Création du composant Done
J'ai également créé un composant Done, qui gère l'affichage des tâches "faites". Elles sont déplacées de la liste tacheAFaire à tachesFaite lorsque l'utilisateur clique sur le bouton "done".

# 7) Ajout du bouton "done" dans Task
Dans chaque tâche, j'ai ajouté un bouton "done" qui, lorsqu'il est cliqué, déplace la tâche vers la liste des tâches faites.

# 8) Gestion de l'ouverture et de la fermeture du composant Done
J'ai ajouté un bouton qui permet d'afficher ou de masquer les tâches faites. Cela a été géré grâce à une variable d'état (showDone).

# 9) Gestion de l'échelle de priorités
L'étape suivante a consisté à ajouter un champ priority à chaque tâche pour gérer la priorité. J'ai créé un composant PriorityScale, qui inclut 6 composants PriorityLevel représentant chaque niveau de priorité (de 1 à 6). Chaque PriorityLevel est une pastille, et lorsque l'utilisateur clique dessus, la priorité de la tâche change.
J'ai également implémenté des classes CSS pour afficher les pastilles activées ou non selon la priorité de la tâche.

# 10) Gestion de l'ordre d'affichage des tâches
Enfin, j'ai fait en sorte que les tâches soient affichées par ordre de priorité dans Todo, c'est-à-dire que les tâches avec une priorité plus élevée apparaissent en premier.


--------------------------------------------------------------------------------------------------------------------

### Erreurs rencontrées et solutions

1) 
J'ai eu un problème de place dans mon git, en effait le react du cous prenez beacoup de place dans le gitlab. Je l'ai supprimé. Ca m'a empéché de faire de push avant car je ne comprenais pas pourquoi je n'avais plus de place.

2)
Erreur PriorityScale is not defined Au début, j'ai rencontré une erreur où le composant PriorityScale n'était pas défini correctement. J'ai cherché toutes les solutions possibles mais je n'ai pas réussis à le régler. J'ai du re cloner mon dépot et recommencer pour qu'enfin PriorityScale soit définit.

3)
Erreur onClick is not a function Cette erreur est survenue lorsque j'ai cliqué sur les pastilles de priorité, mais que la fonction onClick n'était pas correctement définie. J'ai vérifié que toutes les fonctions de gestion des clics étaient bien définies et passées correctement dans les props.

4)
Erreur done is not defined Cette erreur se produisait dans le composant Task lorsque la fonction pour marquer une tâche comme terminée n'était pas correctement définie. J'ai veillé à ce que la fonction onDone soit bien passée en props depuis le composant parent.

5) 
Problème d'affichage de l'échelle de priorité Initialement, l'échelle de priorité était visible même pour les tâches terminées, alors que je ne voulais plus afficher les pastilles de priorité. Pour cela, j'ai modifié le composant Task pour conditionner l'affichage de l'échelle de priorité et afficher uniquement la valeur numérique de la priorité (par exemple, "Priorité : 3") lorsque la tâche était terminée.

--------------------------------------------------------------------------------------------------------------------

### Ce que j'ai rajouté :

J'ai ajouté une petite fonctionnalité par rapport au projet. La durée (duration) se convertit en heure/ minutes. On peut écrire en heure par exemple : "1 h" et même "1h30" qui correspond à 1 heure et 30 minutes. Je l'ai fait car ca me parraissait essentiel de faire ca pour une vraie gestion des taches utiles.
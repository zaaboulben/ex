This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

here the exercice made to familiarize to algorithme 

# ALGORITHME EN JAVASCRIPT

Je vais te donner 10 exercices à faire en javascript avec un niveau de difficulté croissant. Pour chaque exercice tu auras des consignes à respecter et tu auras un indicateur de la difficulté de l'exercice avec pour indication :

🟩 Trés facile  
🟦 Facile  
🟨 Intermédiaire  
🟪 Difficile  
🟥 Trés difficile  
⬛️ 💀

Avant de commencer à faire les exercices, il ne faut surtout pas hésiter à me dire si tu as des difficultés. Au niveau du HTML / CSS et de la présentation en site de l'exercice, tu as le champ libre donc n'hésite pas à être inventif.
  
Dernière chose, je veux pas que tu passes à l'exercice suivant sans avoir eu ma bénédiction. C'est mieux que tu engages les excecices suivants quand celui d'avant à été réussi.  
  
⚠️ Je considère que l'exercice est terminée si il y a :
- Une page GITHUB avec le fichier du code fonctionnel 
- Un README.md fait pour expliquer le mieux possible le code 
- Des photos d'illustration sur le README.md si possible  
- Un code propre avec son fichier `.html` / `.css` / `.js`
- La page GITHUB écrite en anglais !
- Aucune bibliothéque javascript doit être utilisée
- Faire ces exercices sans CHATGPT et COPILOT mais seulement avec des documentations comme MDN

Bonne chance !  

## 🟩 EXERCICE 1 : PERSONNES AGES. 

**Consigne :** Ecrire un programme qui permet de saisir l’âge de 5 personnes puis qui affiche true si au moins 4 personnes sont adultes et false sinon. Une personne est considérée comme adulte si il a un âge strictement supérieur à 18 ans.

**Regle :** Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript.

## 🟩 EXERCICE 2 : PERSONNE AGES v2.  

**Consigne :** Ecrire un programme qui permet de saisir l’age de 5 personnes puis qui affiche `Il n’y a pas de mineurs` si les 5 âges sont supérieurs ou egaux a 18, qui affiche `il y a un seul mineur` si un seul age est inférieur strictement a 18, et qui affiche `il y a au moins deux mineurs` sinon.

**Regle :** Pour cet exercice, voici les régles : 

```js
// Interdiction d'utiliser : 
if()
else if()
else()

// Obligatoirement utiliser :
switch(x){
  case y:
  break;
  ...
  default:
}
```

## 🟦 EXERCICE 3 : Calculatrice + - / *.

**Consigne :** Ecrire un programme qui simule le fonctionnement d’une calculatrice a 4 opérations. On doit pouvoir entrer deux nombres et avoir le choix de faire une addition, sousctration, division ou une multiplication.  

**Regle :** Pour cet exercice, voici les régles :

```js
// Interdiction d'utiliser : 
if()
else if()
else()

// Obligatoirement utiliser :
switch(x){
  case y:
  break;
  ...
  default:
}
```

## 🟨 EXERCICE 4 : LOTO

**Consigne :** Ecrire un programme qui genere aleatoirement six nombres entiers differents entre 1 et 49 inclus. Voici un exemple :
- 1-4-45-3-23-32 ✅
- 2-2-1-45-22-34 ❌ car il y a deux fois le chiffre 2  

**Regle :** Pour cet exercice, voici les régles : 

```js
// Pour générer un nombre aléatoire, tu dois utiliser la fonction suivante : 
const Nombre_Aleatoire = Math.random() // Nombre entre 0 et 1

// Obligatoirement utiliser au moins une boucle for ou / et une boucle while :
for(let i = x; i < x; i++){
  // Code
}
while(){
  //Code
}
```

## 🟪 EXERCICE 5 : PIERRE - FEUILLE - CISEAU. 

**Consigne :**  Ecrire un programme qui permet de jouer a Pierre - Feuille - Ciseau contre l’ordinateur. Le jeu s’arrete lorsque l’un des deux joueurs a 5 points; le nom du joueur gagnant doit s’afficher a l’ecran. 

**Regle :** Pour cet exercice, voici les régles : 

```js
// Pour générer le jeu de l'ordinateur, tu dois utiliser la fonction suivante : 
const Nombre_Aleatoire = Math.random() // Nombre entre 0 et 1

// Obligatoirement utiliser au moins une boucle while :
while(condition){
  // Code
}
```

## 🟨 EXERCICE 6 : DESSIN   

**Consigne :** Ecrire un programme permettant de faire ce dessin pour n choisi par l’utilisateur. Voici des exemples du dessin pour certaines valeurs de n :

```js
// Pour n = 2 : 
* *
 *
* *

// Pour n = 3 : 
* * *
 * *
* * *
 * *
* * *

...

```

**Regle :** Pour cet exercice, voici les régles : 

```js
// Obligatoirement utiliser des boucles for :
for(let i = x; i < x; i++){
  // Code
}
```

## 🟪 EXERCICE 7 : JEU AVEC L'ORDINATEUR.  

**Consigne :** Le but est d’ecrire un programme qui permet a un utilisateur de rechercher un nombre aléatoire entre 1 et 100 généré par la machine.  
Modifier le programme pour que l’ordinateur demande un nombre entre 1 et 100 a l’utilisateur, et qu’il affiche si ce nombre est plus grand ou plus petit que le nombre genere aleatoirement par la machine (jusqu’a ce qu’il trouve!). Le nombre total d’essais necessaires pour trouver le nombre sera affiche a la fin. Modifier le programme pour que l’utilisateur n’ait plus que 7 chances au maximum. 

**Regle :** Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript.  

## 🟪 EXERCICE 8 : FUNCTION AVEC MATH.RANDOM().

**Consigne :** Le but de cet exercice sera de créer 5 functions qui seront utilisables par l'utilisateur. Ces 5 functions utilises le ```js Math.random()``` de javascript. Voici la description des 5 functions :

```js
// 1er function bool() : retourne aléatoirement false ou true. Ne prend aucun argument en entré
console.log(bool()) // Renvoie false ou true

// 2eme function oneOf([]) : retourne un des nombres aléatoirement présent dans le tableau. Prend un tableau en entré
console.log(oneOf([2,4,8])) // Renvoie 2 ou 4 ou 8

// 3eme function intRange(int, int) : retourne un des nombres aléatoirement compris entre les deux nombres donnée en entré. Prend deux int en entrés
console.log(intRange(2,5)) // Renvoie 2 ou 3 ou 4 ou 5

// 4eme function intSequence(int, int) : retourne un tableau avec un ordre aléatoire de tous les nombres présent dans l'interval des deux int. Prend deux int en entrés
console.log(intSequence(2,5)) // Renvoie par exemple [3,5,4,2]

// 5eme function char(string) : retourne une lettre aléatoire présent dans le string donné en argument. Prend un string en argument
console.log(char("hello")) // Renvoie par exemple "e" ou "l"
```

**Regle :** Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript cependant les 5 functions doivent absolument être écrit comme cela :

```js
// Si je prend en exemple la function bool() : 
const bool = () => {
  // le code ici
  return // false ou true
}

// Ou sinon

function bool(){
  // le code ici
  return // false ou true
}
```  

## 🟥 EXERCICE 9 : CONJUGAISON.  

**Consigne :**  Ecrire un programme qui lit au clavier un verbe du premier groupe (il s’assurera qu’il est bien terminé par er) et qui en affiche la conjugaison au présent de l’indicatif. On supposera qu’il s’agit d’un verbe régulier. Autrement dit, on admettra que l’utilisateur ne fournit pas un verbe tel que manger (dans ce cas, le programme affichera nous mangons !). Les résultats se présenteront ainsi :

```js
// Si l'utilisateur rentre "dire", voici ce donne le programme : 
" il ne se termine pas par er - donnez-en un autre : "

// Si l'utilisateur rentre "chanter", voici ce que donne le programme :
"je chante
tu chantes
il/elle chante
nous chantons
vous chantez
ils/elles chantent"
```

**Regle :** Pour cet exercice, il est interdit d'utiliser les opérations préfaites de javascript sur les chaines de caractères sauf trois qui sont :

```js
const string = "Bonjour le monde!"
const string2 = " Ca va ?"

// Voici les trois opérations sur les string autorisées pour cet exercice : 
console.log(string.length) // Renvoie 17
console.log(string.charAt(0)) // Renvoie "B"
console.log(string.concat(string2)) // Renvoie "Bonjour le monde! Ca va ?"

// Hormis cela, tu peux utiliser if, boucle for, des tableaux... ce que tu veux.
```

⚠️ Si tu as du mal à faire cet exercice avec seulement ces trois opérations sur les strings, je t'autorise une quatrième opération : 

```js
const string = "Bonjour le monde!"

console.log(string.substring(0, 7)) // Renvoie "Bonjour"
```

## ⬛️ EXERCICE 10 : NOMBRE PREMIER.  

**Consigne :** Ecrire un programme qui donne les nombres premiers entre 1 et un nombre n entré par l'utilisateur.  
Pour rappel, un nombre est dit premier si on peut le déviser que par 1 ou par lui même.  
Par exemple, les nombres 2, 3, 5, 7, 11, 13, et 17 sont tous des nombres premiers. Cependant, les nombres comme 4, 6, 8, et 9 ne sont pas des nombres premiers car ils peuvent être divisés de manière égale par d'autres nombres que 1 et eux-mêmes.  

```js
// Exemple si l'utilisateur rentre 8, voici ce qu'il donne :
" Voici les nombres premiers entre 1 et 8 : 2, 3, 5, 7 "
```

**Regle :** Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript.

⚠️ Cet exercice est vraiment compliqué, voici une méthode que je te donne pour réssoudre ce problème : 

Il existe une méthode de détermination de tous les
nombres premiers compris entre 1 et n, connue sous le nom de crible d’Eratosthène. Elle consiste à dresser une liste de tous les nombres entiers considérés et
à y rayer tous les multiples d’autres entiers. Plus précisément, on procéde ainsi :
- on raye le 1 (qui, par définition, n’est pas un nombre premier),
- on recherche, à partir du dernier nombre premier considéré (la première
fois, on convient qu’il s’agit du 1), le premier nombre non rayé (on peut montrer
qu’il est premier). Il devient, à son tour, le dernier nombre premier considéré et
on raye tous ses multiples,
- on répète le traitement précédent jusqu’à ce que le nombre premier considéré soit supérieur à la racine carrée de n. On peut alors démontrer que tous les
nombres non premiers ont été rayés de la liste.

⚠️ Si l'exercice reste encore trop difficile, tu peux utiliser ChatGPT mais pas COPILOT !


/*
 * Python en classe — contenu du parcours
 *
 * 8 notions × 4 exercices. Vous pouvez modifier les textes ou ajouter des exercices :
 * chaque exercice a un identifiant unique (ne le changez plus une fois les élèves lancés,
 * sinon leurs résultats ne seront plus rattachés).
 *
 * Champs d'un exercice :
 *   id       identifiant unique (ex. "m3e2")
 *   titre    titre court
 *   enonce   consigne (HTML simple autorisé)
 *   depart   code affiché au départ dans l'éditeur
 *   tests    liste de { entree: "lignes tapées au clavier", attendu: "affichage attendu" }
 *            et, pour les fonctions, { ajout: "code ajouté après celui de l'élève", attendu }
 *   exige    motifs qui doivent apparaître dans le code (ex. une boucle for)
 *   interdit motifs qui ne doivent pas apparaître (ex. la réponse écrite en dur)
 *   indices  aides révélées une par une
 */
window.PARCOURS = [
  {
    id: "m1",
    titre: "Afficher",
    notion: "print et calculs",
    cours: `
<p>Un programme est une <strong>suite d'instructions</strong> exécutées dans l'ordre, de haut en bas.</p>
<p><strong>1. Afficher un texte.</strong> <code>print(...)</code> affiche ce qu'on lui donne. Un texte s'écrit <strong>entre guillemets</strong>.</p>
<pre>print("Bonjour")</pre>
<pre class="sortie">Bonjour</pre>
<p><strong>2. Faire calculer.</strong> Sans guillemets, Python <strong>calcule</strong> et affiche le résultat.</p>
<table class="ops"><tr><td><code>+</code></td><td>addition</td><td><code>print(10 + 5)</code> affiche 15</td></tr>
<tr><td><code>-</code></td><td>soustraction</td><td><code>print(10 - 5)</code> affiche 5</td></tr>
<tr><td><code>*</code></td><td>multiplication (le signe × du clavier n'existe pas)</td><td><code>print(10 * 5)</code> affiche 50</td></tr>
<tr><td><code>/</code></td><td>division</td><td><code>print(10 / 5)</code> affiche 2.0</td></tr></table>
<p>Attention à la différence :</p>
<pre>print(2 + 3)      # calcul : affiche 5
print("2 + 3")    # texte : affiche 2 + 3</pre>
<p><strong>3. Mélanger texte et calcul.</strong> On sépare les morceaux par des <strong>virgules</strong> ; Python met un espace entre eux.</p>
<pre>print("Total :", 3 + 4)</pre>
<pre class="sortie">Total : 7</pre>`,
    exercices: [
      {
        id: "m1e1", titre: "Premier message",
        enonce: "Affiche exactement le message <code>Bonjour !</code>",
        depart: "# Écris ton programme ici\n",
        tests: [{ entree: "", attendu: "Bonjour !" }],
        indices: ["Un texte s'écrit entre guillemets : \"...\"", "La solution tient en une ligne : print(\"...\")"]
      },
      {
        id: "m1e2", titre: "Deux lignes",
        enonce: "Affiche ces deux lignes, dans cet ordre :<pre class=\"sortie\">Je m'appelle Python\nJ'ai 35 ans</pre>",
        depart: "",
        tests: [{ entree: "", attendu: "Je m'appelle Python\nJ'ai 35 ans" }],
        indices: ["Chaque print affiche une ligne.", "Il te faut deux instructions print, l'une sous l'autre."]
      },
      {
        id: "m1e3", titre: "Python calculatrice",
        enonce: "<p>Le programme contient déjà un exemple. Clique sur <strong>Exécuter</strong> pour voir ce qu'il affiche.</p><p>Ajoute ensuite <strong>une ligne</strong> qui fait calculer à Python le nombre d'heures dans une année : 365 jours × 24 heures.</p><p>Rappel : la multiplication s'écrit <code>*</code>. Tu n'as pas le droit d'écrire le résultat toi-même.</p>",
        depart: "# Exemple : Python calcule 10 + 5 et affiche 15\nprint(10 + 5)\n\n# À toi : fais calculer 365 × 24 sur la ligne suivante\n",
        tests: [{ entree: "", attendu: "15\n8760" }],
        exige: [{ motif: "\\*", message: "Utilise le signe * pour la multiplication." }],
        interdit: [{ motif: "8760", message: "Le résultat doit être calculé par Python, pas écrit à la main." }],
        indices: ["Copie la ligne de l'exemple et change le calcul.", "Pas de guillemets autour du calcul : print(365 * 24)"]
      },
      {
        id: "m1e4", titre: "Une phrase avec un calcul",
        enonce: "<p>Exemple : ce programme affiche <code>Une journée dure 1440 minutes</code>.</p><pre>print(\"Une journée dure\", 24 * 60, \"minutes\")</pre><p>Sur le même modèle, affiche la phrase <code>Il y a 168 heures dans une semaine</code> en faisant calculer 168 par Python (7 jours × 24 heures).</p>",
        depart: "",
        tests: [{ entree: "", attendu: "Il y a 168 heures dans une semaine" }],
        exige: [{ motif: "\\*", message: "Fais calculer 7 × 24 avec le signe *." }],
        interdit: [{ motif: "168", message: "Le nombre 168 doit être calculé, pas écrit à la main." }],
        indices: ["Trois morceaux séparés par des virgules : un texte, un calcul, un texte.", "print(\"Il y a\", 7 * 24, \"heures dans une semaine\")"]
      }
    ]
  },
  {
    id: "m2",
    titre: "Répéter",
    notion: "boucle for",
    cours: `
<p>Pour répéter des instructions un nombre connu de fois, on utilise une <strong>boucle for</strong>.</p>
<pre>for i in range(3):
    print("Salut")</pre>
<div class="anim-boucle" data-var="i" data-debut="0" data-fin="3" data-corps="print(&quot;Salut&quot;)" data-sortie="'Salut'"></div>
<p>Les instructions répétées sont <strong>décalées vers la droite</strong> (4 espaces) : c'est l'indentation. Elle est obligatoire.</p>
<p><code>range(3)</code> donne à <code>i</code> les valeurs 0, 1, 2. <code>range(1, 6)</code> donne 1, 2, 3, 4, 5 : le dernier nombre est exclu.</p>
<pre>for i in range(1, 4):
    print(i, "au carré :", i * i)</pre>
<pre class="sortie">1 au carré : 1
2 au carré : 4
3 au carré : 9</pre>`,
    exercices: [
      {
        id: "m2e1", titre: "Cinq fois",
        enonce: "Avec une boucle <code>for</code>, affiche cinq fois le mot <code>Python</code>, une fois par ligne.",
        depart: "",
        tests: [{ entree: "", attendu: "Python\nPython\nPython\nPython\nPython" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }],
        indices: ["for i in range(5):", "N'oublie pas les 4 espaces avant print, sur la ligne sous le for."]
      },
      {
        id: "m2e2", titre: "Compter jusqu'à 10",
        enonce: `<p>Affiche les nombres de <strong>1 à 10</strong>, un par ligne, avec une boucle <code>for</code>.</p>
<p><strong>Comment ça marche ?</strong> Dans <code>for i in range(1, 4):</code>, la variable <code>i</code> change de valeur à chaque tour : 1, puis 2, puis 3. La ligne décalée en dessous est exécutée une fois par tour, avec la valeur du moment. Regarde ce petit exemple, qui compte seulement jusqu'à 3 :</p>
<div class="anim-boucle" data-var="i" data-debut="1" data-fin="4" data-corps="print(i)" data-sortie="i"></div>
<p><strong>À toi :</strong> que faut-il changer dans <code>range(1, 4)</code> pour aller jusqu'à 10 ? Attention, le dernier nombre est <strong>exclu</strong>.</p>`,
        depart: "",
        tests: [{ entree: "", attendu: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }],
        indices: ["Recopie l'exemple de l'animation, puis change seulement le 4.", "range(1, 11) donne les nombres de 1 à 10 (le 11 est exclu).", "for i in range(1, 11):\n    print(i)"]
      },
      {
        id: "m2e3", titre: "Table de 7",
        enonce: "Affiche la table de multiplication de 7, de <code>7 x 1 = 7</code> jusqu'à <code>7 x 10 = 70</code>.",
        depart: "",
        tests: [{ entree: "", attendu: [1,2,3,4,5,6,7,8,9,10].map(i => `7 x ${i} = ${7*i}`).join("\n") }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }],
        indices: ["print(\"7 x\", i, \"=\", 7 * i)", "La boucle doit aller de 1 à 10 : range(1, 11)."]
      },
      {
        id: "m2e4", titre: "Escalier",
        enonce: "Affiche cet escalier de 5 marches :<pre class=\"sortie\">#\n##\n###\n####\n#####</pre><p>Astuce : en Python, <code>\"#\" * 3</code> vaut <code>\"###\"</code>.</p>",
        depart: "",
        tests: [{ entree: "", attendu: "#\n##\n###\n####\n#####" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }],
        indices: ["À la marche numéro i, il y a i caractères #.", "for i in range(1, 6):\n    print(\"#\" * i)"]
      }
    ]
  },
  {
    id: "m3",
    titre: "Variables",
    notion: "variables et calculs",
    cours: `
<p>Une <strong>variable</strong> est un nom qui garde une valeur en mémoire. On la crée avec <code>=</code> (on dit « affecter »).</p>
<pre>prix = 12
prix = prix + 3     # prix vaut maintenant 15
print(prix)</pre>
<p>Opérations utiles :</p>
<table class="ops"><tr><td><code>+ - *</code></td><td>addition, soustraction, multiplication</td></tr>
<tr><td><code>/</code></td><td>division (résultat à virgule : 7 / 2 vaut 3.5)</td></tr>
<tr><td><code>//</code></td><td>quotient entier (7 // 2 vaut 3)</td></tr>
<tr><td><code>%</code></td><td>reste de la division (7 % 2 vaut 1). <strong>Ce n'est pas un pourcentage !</strong></td></tr></table>
<p>Pour bien comprendre <code>//</code> et <code>%</code>, pense à des <strong>paquets</strong> : <code>17 // 5</code> = combien de paquets de 5 on peut faire avec 17 (3), et <code>17 % 5</code> = ce qui reste (2).</p>
<div class="anim-division" data-etapes='[{"n":17,"d":5,"nn":"bonbons","q":"sachets","r":"reste","paquet":"un sachet de 5 bonbons","sensq":"on remplit 3 sachets de 5","sensr":"il reste 2 bonbons qui ne remplissent pas un sachet"}]' data-fin="17 = 3 × 5 + 2 : 3 sachets complets, et 2 bonbons qui restent."></div>
<p>Dans une boucle, une variable peut <strong>accumuler</strong> : <code>total = total + i</code>.</p>`,
    exercices: [
      {
        id: "m3e1", titre: "Le total",
        enonce: "Le programme contient déjà deux variables. Crée une variable <code>total</code> qui contient le prix à payer, puis affiche-la.",
        depart: "prix = 12\nquantite = 3\n",
        tests: [{ entree: "", attendu: "36" }],
        exige: [{ motif: "total\\s*=", message: "Crée une variable nommée total." }],
        interdit: [{ motif: "\\b36\\b", message: "Le total doit être calculé à partir des variables." }],
        indices: ["total = prix * quantite", "Puis print(total)"]
      },
      {
        id: "m3e2", titre: "Convertir des secondes",
        enonce: `<p>Une vidéo dure <code>4000</code> secondes. On veut l'afficher sous la forme <code>1 h 6 min 40 s</code>.</p>
<p><strong>L'idée :</strong> on range les secondes dans des <strong>paquets</strong>. Un paquet de <strong>3600 s</strong> = 1 heure, un paquet de <strong>60 s</strong> = 1 minute.</p>
<ul><li><code>a // b</code> (deux barres) donne le <strong>nombre de paquets complets</strong> de b dans a. Exemple : <code>17 // 5</code> vaut <code>3</code> (3 paquets de 5).</li>
<li><code>a % b</code> donne <strong>ce qui reste</strong> une fois les paquets faits. Attention : ici <code>%</code> <strong>n'est pas un pourcentage</strong>, c'est le signe du reste. Exemple : <code>17 % 5</code> vaut <code>2</code> (17 = 3 × 5 + 2).</li></ul>
<div class="anim-division" data-etapes='[{"n":4000,"d":3600,"nn":"duree","q":"heures","r":"reste","paquet":"une heure","sensq":"la vidéo dure 1 heure complète","sensr":"il reste 400 secondes qui ne font pas une heure entière : on va les transformer en minutes"},{"n":400,"d":60,"nn":"reste","q":"minutes","r":"secondes","paquet":"une minute","sensq":"dans ces 400 secondes, il y a 6 minutes complètes","sensr":"il reste 40 secondes qui ne font pas une minute entière : ce sont les secondes à afficher"}]' data-masquer="2" data-fin="&lt;b&gt;Résultat :&lt;/b&gt; heures = 1, minutes = 6, secondes = 40. Le &lt;code&gt;print&lt;/code&gt; est déjà écrit à la fin du programme."></div>
<p><strong>Qui est qui ?</strong> <code>duree</code> = toutes les secondes de la vidéo · <code>heures</code> = les heures complètes · <code>reste</code> = les secondes qui restent après avoir enlevé les heures · <code>minutes</code> = les minutes complètes dans ce reste · <code>secondes</code> = ce qui reste encore à la fin. Quand Python lit une ligne, il <strong>remplace chaque nom de variable par sa valeur</strong>, calcule, puis range le résultat dans la variable à gauche du <code>=</code>.</p>
<p><strong>À toi :</strong> le début est écrit. Complète les deux lignes avec <code>...</code>. Question à te poser pour le <code>?</code> de l'étape 2 : on fait les paquets de 60 avec <strong>quelle variable</strong> ?</p>`,
        depart: "duree = 4000\n\n# Étape 1 : les heures (paquets de 3600 s)\nheures = duree // 3600\nreste = duree % 3600\n\n# Étape 2 : avec ce qui reste, les minutes (paquets de 60 s)\nminutes = ...\nsecondes = ...\n\nprint(heures, \"h\", minutes, \"min\", secondes, \"s\")\n",
        tests: [{ entree: "", attendu: "1 h 6 min 40 s" }],
        exige: [{ motif: "//", message: "Utilise le quotient entier //." }, { motif: "%", message: "Utilise le reste %." }],
        indices: ["Pour les minutes, on fait des paquets de 60 dans ce qui reste : on part de la variable reste, pas de duree.", "minutes = reste // 60", "secondes = reste % 60"]
      },
      {
        id: "m3e3", titre: "Abonnés",
        enonce: "Un compte a 1200 abonnés et en gagne 150 chaque mois. Avec une boucle, calcule le nombre d'abonnés au bout de 12 mois et affiche-le.",
        depart: "abonnes = 1200\n",
        tests: [{ entree: "", attendu: "3000" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for qui tourne 12 fois." }],
        interdit: [{ motif: "3000", message: "Le résultat doit être calculé par la boucle." }],
        indices: ["Dans la boucle : abonnes = abonnes + 150", "Le print se place après la boucle, sans décalage."]
      },
      {
        id: "m3e4", titre: "Somme de 1 à 100",
        enonce: "Calcule la somme 1 + 2 + 3 + … + 100 avec une boucle et affiche le résultat.",
        depart: "somme = 0\n",
        tests: [{ entree: "", attendu: "5050" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }],
        interdit: [{ motif: "5050", message: "Le résultat doit être calculé par la boucle." }],
        indices: ["for i in range(1, 101):", "Dans la boucle : somme = somme + i. Affiche somme après la boucle."],
        explication: `<p><strong>Pourquoi <code>somme = somme + i</code> et pas <code>somme = somme + 1</code> ?</strong></p>
<p>On veut ajouter <strong>les nombres</strong> 1, 2, 3, … 100. Or c'est justement <code>i</code> qui prend ces valeurs, une par tour : au 1er tour <code>i</code> vaut 1, au 2e tour 2, et ainsi de suite. Avec <code>+ i</code>, on ajoute donc 1, puis 2, puis 3… Avec <code>+ 1</code>, on ajouterait <strong>toujours 1</strong> : on compterait seulement le nombre de tours, et on trouverait 100 au lieu de 5050.</p>
<table><tr><th>Tour</th><th>i vaut</th><th>avec somme + i</th><th class="faux">avec somme + 1</th></tr><tr><td>1</td><td>1</td><td>0 + 1 = 1</td><td class="faux">0 + 1 = 1</td></tr><tr><td>2</td><td>2</td><td>1 + 2 = 3</td><td class="faux">1 + 1 = 2</td></tr><tr><td>3</td><td>3</td><td>3 + 3 = 6</td><td class="faux">2 + 1 = 3</td></tr><tr><td>4</td><td>4</td><td>6 + 4 = 10</td><td class="faux">3 + 1 = 4</td></tr><tr><td>…</td><td>…</td><td>…</td><td class="faux">…</td></tr><tr><td>100</td><td>100</td><td><b>5050</b></td><td class="faux"><b>100</b></td></tr></table>
<p>À retenir : <code>+ 1</code> sert à <strong>compter</strong> (combien de fois ?), <code>+ i</code> sert à <strong>additionner</strong> les valeurs de la boucle.</p>`,
        pieges: [{ sortie: "100", message: `<p><strong>Ton programme affiche 100 : tu as sûrement écrit <code>somme = somme + 1</code>.</strong> Ça ajoute toujours 1, donc ça compte seulement les tours (il y en a 100). Or on veut ajouter les nombres eux-mêmes : 1, puis 2, puis 3… Quelle variable prend ces valeurs à chaque tour ?</p><table><tr><th>Tour</th><th>i vaut</th><th>avec somme + i</th><th class="faux">avec somme + 1</th></tr><tr><td>1</td><td>1</td><td>0 + 1 = 1</td><td class="faux">0 + 1 = 1</td></tr><tr><td>2</td><td>2</td><td>1 + 2 = 3</td><td class="faux">1 + 1 = 2</td></tr><tr><td>3</td><td>3</td><td>3 + 3 = 6</td><td class="faux">2 + 1 = 3</td></tr><tr><td>4</td><td>4</td><td>6 + 4 = 10</td><td class="faux">3 + 1 = 4</td></tr><tr><td>…</td><td>…</td><td>…</td><td class="faux">…</td></tr><tr><td>100</td><td>100</td><td><b>5050</b></td><td class="faux"><b>100</b></td></tr></table>` }]
      }
    ]
  },
  {
    id: "m4",
    titre: "Demander",
    notion: "input et types",
    cours: `
<p><code>input()</code> attend que l'utilisateur tape quelque chose et le renvoie <strong>sous forme de texte</strong>.</p>
<pre>prenom = input()
print("Bonjour", prenom)</pre>
<p>Pour calculer, il faut <strong>convertir</strong> le texte en nombre : <code>int(...)</code> pour un entier, <code>float(...)</code> pour un nombre à virgule.</p>
<pre>n = int(input())
print(n * 2)</pre>
<p>Ici, pour tester ton programme, écris ce que l'utilisateur tape dans la case « Entrée clavier » (une valeur par ligne). Lors de la vérification, l'ordinateur essaie plusieurs valeurs.</p>
<p><strong>Arrondir :</strong> <code>round(nombre, chiffres)</code> arrondit un nombre. Le <strong>deuxième nombre</strong>, après la virgule de la parenthèse, dit <strong>combien de chiffres garder après la virgule</strong>.</p>
<table style="border-collapse:collapse;margin:.4rem 0"><tr><th style="text-align:left;padding:.25rem .8rem .25rem 0">On écrit</th><th style="text-align:left;padding:.25rem .8rem">Résultat</th><th style="text-align:left;padding:.25rem 0">Pourquoi</th></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 0)</code></td><td style="padding:.25rem .8rem"><code>12.0</code></td><td>0 chiffre après la virgule</td></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 1)</code></td><td style="padding:.25rem .8rem"><code>12.3</code></td><td>1 chiffre après la virgule</td></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 2)</code></td><td style="padding:.25rem .8rem"><code>12.35</code></td><td>2 chiffres après la virgule (arrondi au plus proche)</td></tr></table>`,
    exercices: [
      {
        id: "m4e1", titre: "Saluer",
        enonce: "Lis un prénom au clavier et affiche <code>Bonjour</code> suivi du prénom. Avec <code>Lina</code>, le programme affiche <code>Bonjour Lina</code>.",
        depart: "",
        tests: [{ entree: "Lina", attendu: "Bonjour Lina" }, { entree: "Yanis", attendu: "Bonjour Yanis" }, { entree: "Sofia", attendu: "Bonjour Sofia" }],
        exige: [{ motif: "input\\s*\\(", message: "Le prénom doit être lu avec input()." }],
        indices: ["prenom = input()", "print(\"Bonjour\", prenom)"]
      },
      {
        id: "m4e2", titre: "Le double",
        enonce: "Lis un nombre entier et affiche son double.",
        depart: "",
        tests: [{ entree: "4", attendu: "8" }, { entree: "21", attendu: "42" }, { entree: "-3", attendu: "-6" }],
        exige: [{ motif: "input\\s*\\(", message: "Le nombre doit être lu avec input()." }],
        indices: ["input() renvoie du texte : convertis-le avec int(...).", "n = int(input())"]
      },
      {
        id: "m4e3", titre: "Âge en 2030",
        enonce: "Lis une année de naissance et affiche l'âge qu'aura la personne en 2030.",
        depart: "",
        tests: [{ entree: "2010", attendu: "20" }, { entree: "2009", attendu: "21" }, { entree: "1985", attendu: "45" }],
        exige: [{ motif: "input\\s*\\(", message: "L'année doit être lue avec input()." }],
        indices: ["annee = int(input())", "L'âge vaut 2030 - annee."]
      },
      {
        id: "m4e4", titre: "Moyenne de trois notes",
        enonce: `<p>Lis trois notes (une par ligne) et affiche leur moyenne <strong>arrondie à 1 chiffre après la virgule</strong>. Avec 10, 12 et 14, le programme affiche <code>12.0</code>.</p>
<p><strong>Pourquoi arrondir ?</strong> Avec 9, 10 et 10, la moyenne vaut 29 ÷ 3 = <code>9.666666666666666</code> : beaucoup trop de chiffres ! On veut afficher <code>9.7</code>.</p>
<p><strong>Comment ?</strong> <code>round(moyenne, 1)</code>. Attention, il y a <strong>deux choses dans la parenthèse</strong>, séparées par une virgule :</p>
<ul><li>d'abord <strong>le nombre à arrondir</strong> : <code>moyenne</code> ;</li><li>ensuite <strong>combien de chiffres garder après la virgule</strong> : <code>1</code>.</li></ul>
<table style="border-collapse:collapse;margin:.4rem 0"><tr><th style="text-align:left;padding:.25rem .8rem .25rem 0">On écrit</th><th style="text-align:left;padding:.25rem .8rem">Résultat</th><th style="text-align:left;padding:.25rem 0">Pourquoi</th></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 0)</code></td><td style="padding:.25rem .8rem"><code>12.0</code></td><td>0 chiffre après la virgule</td></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 1)</code></td><td style="padding:.25rem .8rem"><code>12.3</code></td><td>1 chiffre après la virgule</td></tr><tr><td style="white-space:nowrap;padding:.25rem .8rem .25rem 0"><code>round(12.3456, 2)</code></td><td style="padding:.25rem .8rem"><code>12.35</code></td><td>2 chiffres après la virgule (arrondi au plus proche)</td></tr></table>
<p>Ici, <code>1</code> ne veut donc pas dire « un » ou « une note » : c'est <strong>le nombre de chiffres après la virgule</strong> qu'on garde.</p>`,
        depart: "",
        tests: [{ entree: "10\n12\n14", attendu: "12.0" }, { entree: "9\n10\n10", attendu: "9.7" }, { entree: "20\n0\n5", attendu: "8.3" }, { entree: "12.5\n14\n15.5", attendu: "14.0" }],
        exige: [{ motif: "input\\s*\\(", message: "Les notes doivent être lues avec input()." }],
        indices: ["Une note peut être à virgule : utilise float(input()) pour chacune des trois notes.", "moyenne = (a + b + c) / 3 : les parenthèses sont obligatoires, sinon seule c est divisée par 3.", "print(round(moyenne, 1))"],
        explication: `<p><strong><code>print(round(moyenne, 1))</code> se lit de l'intérieur vers l'extérieur :</strong></p>
<ol><li><code>moyenne</code> vaut par exemple <code>9.666666666666666</code> ;</li><li><code>round(moyenne, 1)</code> l'arrondit en gardant <strong>1 chiffre après la virgule</strong> : <code>9.7</code> ;</li><li><code>print(...)</code> affiche ce résultat.</li></ol>
<p>Avec <code>round(moyenne, 2)</code>, on aurait <code>9.67</code> ; avec <code>round(moyenne)</code> (sans le 1), on aurait <code>10</code>, un nombre entier.</p>`,
        pieges: [{ sortie: "9.666666666666666", message: "<p><strong>Ton programme affiche 9.666666666666666 : tu n'as pas arrondi.</strong> Remplace <code>print(moyenne)</code> par <code>print(round(moyenne, 1))</code> : le <code>1</code> veut dire « garde 1 chiffre après la virgule »." },
                 { sortie: "12", message: "<p><strong>Ton programme affiche un nombre entier (12 au lieu de 12.0) : tu as sûrement écrit <code>round(moyenne)</code> sans le 1.</strong> Sans deuxième nombre, <code>round</code> arrondit à l'entier. Écris <code>round(moyenne, 1)</code> pour garder 1 chiffre après la virgule.</p>" }]
      }
    ]
  },
  {
    id: "m5",
    titre: "Décider",
    notion: "conditions if / else",
    cours: `
<p>Une <strong>condition</strong> permet de choisir quelles instructions exécuter.</p>
<pre>age = int(input())
if age >= 18:
    print("majeur")
else:
    print("mineur")</pre>
<p>Ne pas oublier les <strong>deux-points</strong> et l'<strong>indentation</strong>.</p>
<table class="ops"><tr><td><code>==</code></td><td>égal à (deux signes = pour comparer)</td></tr>
<tr><td><code>!=</code></td><td>différent de</td></tr>
<tr><td><code>&lt; &gt; &lt;= &gt;=</code></td><td>inférieur, supérieur, inférieur ou égal, supérieur ou égal</td></tr></table>
<p>Un seul <code>=</code> affecte une variable ; deux <code>==</code> comparent.</p>`,
    exercices: [
      {
        id: "m5e1", titre: "Majeur ou mineur",
        enonce: "Lis un âge. Affiche <code>majeur</code> si la personne a 18 ans ou plus, sinon <code>mineur</code>.",
        depart: "",
        tests: [{ entree: "18", attendu: "majeur" }, { entree: "17", attendu: "mineur" }, { entree: "40", attendu: "majeur" }, { entree: "5", attendu: "mineur" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise une condition if." }],
        indices: ["if age >= 18:", "Attention à 18 : il faut >= et pas >."]
      },
      {
        id: "m5e2", titre: "Pair ou impair",
        enonce: "Lis un nombre entier. Affiche <code>pair</code> ou <code>impair</code>.",
        depart: "",
        tests: [{ entree: "4", attendu: "pair" }, { entree: "7", attendu: "impair" }, { entree: "0", attendu: "pair" }, { entree: "131", attendu: "impair" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise une condition if." }],
        indices: ["Un nombre est pair si le reste de sa division par 2 vaut 0.", "if n % 2 == 0:"]
      },
      {
        id: "m5e3", titre: "Mot de passe",
        enonce: "Lis un mot de passe. S'il vaut <code>snt2026</code>, affiche <code>Accès autorisé</code>, sinon <code>Accès refusé</code>.",
        depart: "",
        tests: [{ entree: "snt2026", attendu: "Accès autorisé" }, { entree: "SNT2026", attendu: "Accès refusé" }, { entree: "azerty", attendu: "Accès refusé" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise une condition if." }],
        indices: ["Ici on compare du texte : pas besoin de int().", "if mdp == \"snt2026\":"]
      },
      {
        id: "m5e4", titre: "Le plus grand",
        enonce: "Lis deux nombres entiers (un par ligne) et affiche le plus grand des deux, sans utiliser <code>max</code>.",
        depart: "",
        tests: [{ entree: "3\n8", attendu: "8" }, { entree: "10\n2", attendu: "10" }, { entree: "5\n5", attendu: "5" }, { entree: "-4\n-9", attendu: "-4" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise une condition if." }],
        interdit: [{ motif: "max\\s*\\(", message: "Fais-le sans max(), avec une condition." }],
        indices: ["a = int(input()) puis b = int(input())", "if a > b: affiche a, sinon affiche b."]
      }
    ]
  },
  {
    id: "m6",
    titre: "Plusieurs cas",
    notion: "elif, and, or",
    cours: `
<p>Quand il y a plus de deux cas, on enchaîne avec <code>elif</code> (« sinon si »). Python teste les conditions dans l'ordre et s'arrête à la première vraie.</p>
<pre>if note >= 16:
    print("Très bien")
elif note >= 14:
    print("Bien")
else:
    print("Autre")</pre>
<p>On peut combiner des conditions :</p>
<table class="ops"><tr><td><code>and</code></td><td>les deux conditions doivent être vraies</td></tr>
<tr><td><code>or</code></td><td>au moins une des deux est vraie</td></tr>
<tr><td><code>not</code></td><td>inverse une condition</td></tr></table>
<pre>if age >= 12 and age < 18:
    print("adolescent")</pre>`,
    exercices: [
      {
        id: "m6e1", titre: "Mention",
        enonce: "Lis une note sur 20 (entier) et affiche la mention :<br><code>Très bien</code> à partir de 16, <code>Bien</code> à partir de 14, <code>Assez bien</code> à partir de 12, <code>Passable</code> à partir de 10, sinon <code>Insuffisant</code>.",
        depart: "",
        tests: [{ entree: "18", attendu: "Très bien" }, { entree: "16", attendu: "Très bien" }, { entree: "15", attendu: "Bien" }, { entree: "12", attendu: "Assez bien" }, { entree: "10", attendu: "Passable" }, { entree: "7", attendu: "Insuffisant" }],
        exige: [{ motif: "\\belif\\b", message: "Utilise elif pour enchaîner les cas." }],
        indices: ["Commence par le cas le plus haut : if note >= 16:", "Puis elif note >= 14:, elif note >= 12:, elif note >= 10:, else:"]
      },
      {
        id: "m6e2", titre: "Tarif cinéma",
        enonce: "Lis un âge et affiche le prix de la place : <code>5</code> pour les moins de 12 ans, <code>7</code> pour les 12-17 ans et les 65 ans et plus, <code>10</code> pour les autres.",
        depart: "",
        tests: [{ entree: "8", attendu: "5" }, { entree: "12", attendu: "7" }, { entree: "17", attendu: "7" }, { entree: "18", attendu: "10" }, { entree: "64", attendu: "10" }, { entree: "65", attendu: "7" }],
        exige: [{ motif: "\\b(or|and)\\b", message: "Combine des conditions avec or ou and." }],
        indices: ["Traite d'abord les moins de 12 ans.", "elif age < 18 or age >= 65:"]
      },
      {
        id: "m6e3", titre: "Année bissextile",
        enonce: "Une année est bissextile si elle est divisible par 4 mais pas par 100, <strong>ou</strong> si elle est divisible par 400. Lis une année et affiche <code>bissextile</code> ou <code>non bissextile</code>.",
        depart: "",
        tests: [{ entree: "2024", attendu: "bissextile" }, { entree: "2026", attendu: "non bissextile" }, { entree: "1900", attendu: "non bissextile" }, { entree: "2000", attendu: "bissextile" }],
        exige: [{ motif: "\\b(or|and)\\b", message: "Combine des conditions avec and / or." }],
        indices: ["« divisible par 4 » s'écrit a % 4 == 0", "if (a % 4 == 0 and a % 100 != 0) or a % 400 == 0:"]
      },
      {
        id: "m6e4", titre: "Triangle",
        enonce: "Lis les trois côtés d'un triangle (un par ligne). Affiche <code>équilatéral</code> si les trois sont égaux, <code>isocèle</code> si exactement deux sont égaux, sinon <code>quelconque</code>.",
        depart: "",
        tests: [{ entree: "3\n3\n3", attendu: "équilatéral" }, { entree: "3\n3\n5", attendu: "isocèle" }, { entree: "5\n3\n3", attendu: "isocèle" }, { entree: "4\n7\n4", attendu: "isocèle" }, { entree: "3\n4\n5", attendu: "quelconque" }],
        exige: [{ motif: "\\belif\\b", message: "Utilise elif." }],
        indices: ["Teste d'abord le cas équilatéral : a == b and b == c", "Isocèle : a == b or b == c or a == c"]
      }
    ]
  },
  {
    id: "m7",
    titre: "Tant que",
    notion: "boucle while",
    cours: `
<p>La boucle <code>while</code> répète des instructions <strong>tant qu'une condition est vraie</strong>. On l'utilise quand on ne sait pas à l'avance combien de tours il faudra.</p>
<pre>n = 1
while n < 100:
    n = n * 2
print(n)</pre>
<pre class="sortie">128</pre>
<p>Attention : si la condition reste toujours vraie, la boucle ne s'arrête jamais. Vérifie que quelque chose change à chaque tour.</p>`,
    exercices: [
      {
        id: "m7e1", titre: "Compte à rebours",
        enonce: "Lis un nombre n. Avec une boucle <code>while</code>, affiche n, n-1, … jusqu'à 1, puis <code>Décollage !</code>",
        depart: "",
        tests: [{ entree: "3", attendu: "3\n2\n1\nDécollage !" }, { entree: "5", attendu: "5\n4\n3\n2\n1\nDécollage !" }, { entree: "1", attendu: "1\nDécollage !" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }],
        indices: ["while n >= 1:", "Dans la boucle : affiche n puis n = n - 1. Le message final se place après la boucle."]
      },
      {
        id: "m7e2", titre: "Vidéo virale",
        enonce: "Une vidéo a 100 vues et ce nombre double chaque jour. Lis un objectif N et affiche le nombre de jours nécessaires pour que les vues <strong>dépassent strictement</strong> N.",
        depart: "vues = 100\njours = 0\n",
        tests: [{ entree: "1000", attendu: "4" }, { entree: "50", attendu: "0" }, { entree: "100", attendu: "1" }, { entree: "1000000", attendu: "14" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }],
        indices: ["Tant que vues <= N, on passe au jour suivant.", "Dans la boucle : vues = vues * 2 et jours = jours + 1"]
      },
      {
        id: "m7e3", titre: "Devine le nombre",
        enonce: `<p>Le joueur doit deviner le nombre secret <strong>42</strong>. Voici une partie :</p>
<pre class="sortie">10          ← le joueur tape 10
Trop petit
50          ← il tape 50
Trop grand
42          ← il tape 42
Gagné ! Nombre d'essais : 3</pre>
<p>Le programme est <strong>presque écrit</strong>. Complète les 3 trous dans la boucle, dans l'ordre :</p>
<ol><li>Remplace les <code>"..."</code> par <code>"Trop petit"</code> et <code>"Trop grand"</code>.</li>
<li>Lis une nouvelle proposition : c'est la même ligne qu'avant la boucle.</li>
<li>Ajoute 1 au compteur <code>essais</code>.</li></ol>
<p>Astuce : vérifie après chaque étape avec <strong>Exécuter</strong>, en tapant par exemple <code>10</code>, <code>50</code> et <code>42</code> dans « Entrée clavier ». Tant que l'étape 2 manque, le programme ne s'arrête pas : c'est normal.</p>`,
        depart: `secret = 42
essais = 1
proposition = int(input())

while proposition != secret:
    if proposition < secret:
        print("...")
    else:
        print("...")
    # Étape 2 : lis une nouvelle proposition

    # Étape 3 : ajoute 1 à essais


print("Gagné ! Nombre d'essais :", essais)
`,
        tests: [{ entree: "10\n50\n42", attendu: "Trop petit\nTrop grand\nGagné ! Nombre d'essais : 3" }, { entree: "42", attendu: "Gagné ! Nombre d'essais : 1" }, { entree: "99\n1\n41\n43\n42", attendu: "Trop grand\nTrop petit\nTrop petit\nTrop grand\nGagné ! Nombre d'essais : 5" }],
        exige: [{ motif: "\\bwhile\\b", message: "Garde la boucle while." }],
        indices: ["Étape 2 : copie la ligne proposition = int(input()) dans la boucle, décalée de 4 espaces.", "Étape 3 : essais = essais + 1 (décalée de 4 espaces, dans la boucle)."]
      },
      {
        id: "m7e4", titre: "Somme jusqu'à zéro",
        enonce: "Lis des nombres entiers jusqu'à ce que l'utilisateur tape <code>0</code>, puis affiche la somme des nombres tapés.",
        depart: "",
        tests: [{ entree: "5\n3\n0", attendu: "8" }, { entree: "0", attendu: "0" }, { entree: "10\n-4\n7\n0", attendu: "13" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }],
        indices: ["somme = 0 puis n = int(input()) avant la boucle.", "while n != 0: ajoute n à la somme, puis lis le nombre suivant."]
      }
    ]
  },
  {
    id: "m8",
    titre: "Fonctions",
    notion: "def et return",
    cours: `
<p>Une <strong>fonction</strong> est un petit programme auquel on donne un nom. Elle reçoit des valeurs (les <strong>paramètres</strong>) et renvoie un résultat avec <code>return</code>.</p>
<pre>def triple(x):
    return 3 * x

print(triple(5))
print(triple(10) + 1)</pre>
<pre class="sortie">15
31</pre>
<p><code>return</code> renvoie le résultat sans l'afficher ; c'est le programme qui appelle la fonction qui décide quoi en faire.</p>
<p>Dans ces exercices, écris seulement la fonction : la vérification l'appelle avec plusieurs valeurs.</p>`,
    exercices: [
      {
        id: "m8e1", titre: "Carré",
        enonce: "Écris une fonction <code>carre(n)</code> qui renvoie n × n.",
        depart: "def carre(n):\n    ",
        tests: [{ ajout: "print(carre(3))", attendu: "9" }, { ajout: "print(carre(-4))", attendu: "16" }, { ajout: "print(carre(0))", attendu: "0" }],
        exige: [{ motif: "def\\s+carre\\s*\\(", message: "La fonction doit s'appeler carre." }, { motif: "\\breturn\\b", message: "La fonction doit renvoyer le résultat avec return." }],
        indices: ["Une seule ligne dans la fonction suffit.", "return n * n"]
      },
      {
        id: "m8e2", titre: "Prix TTC",
        enonce: "Écris une fonction <code>ttc(prix_ht)</code> qui renvoie le prix avec 20 % de TVA (prix × 1,2), arrondi à 2 décimales.",
        depart: "def ttc(prix_ht):\n    ",
        tests: [{ ajout: "print(ttc(10))", attendu: "12.0" }, { ajout: "print(ttc(19.99))", attendu: "23.99" }, { ajout: "print(ttc(0))", attendu: "0.0" }],
        exige: [{ motif: "def\\s+ttc\\s*\\(", message: "La fonction doit s'appeler ttc." }, { motif: "\\breturn\\b", message: "Utilise return." }],
        indices: ["En Python, la virgule décimale s'écrit avec un point : 1.2", "return round(prix_ht * 1.2, 2)"]
      },
      {
        id: "m8e3", titre: "Est pair ?",
        enonce: "Écris une fonction <code>est_pair(n)</code> qui renvoie <code>True</code> si n est pair et <code>False</code> sinon.",
        depart: "def est_pair(n):\n    ",
        tests: [{ ajout: "print(est_pair(4))", attendu: "True" }, { ajout: "print(est_pair(7))", attendu: "False" }, { ajout: "print(est_pair(0))", attendu: "True" }],
        exige: [{ motif: "def\\s+est_pair\\s*\\(", message: "La fonction doit s'appeler est_pair." }, { motif: "\\breturn\\b", message: "Utilise return." }],
        indices: ["Tu peux utiliser if / else avec return True et return False.", "Version courte : return n % 2 == 0"]
      },
      {
        id: "m8e4", titre: "Le plus grand des trois",
        enonce: "Écris une fonction <code>plus_grand(a, b, c)</code> qui renvoie le plus grand des trois nombres, sans utiliser <code>max</code>.",
        depart: "def plus_grand(a, b, c):\n    ",
        tests: [{ ajout: "print(plus_grand(1, 5, 3))", attendu: "5" }, { ajout: "print(plus_grand(9, 2, 4))", attendu: "9" }, { ajout: "print(plus_grand(1, 2, 7))", attendu: "7" }, { ajout: "print(plus_grand(4, 4, 1))", attendu: "4" }],
        exige: [{ motif: "def\\s+plus_grand\\s*\\(", message: "La fonction doit s'appeler plus_grand." }, { motif: "\\breturn\\b", message: "Utilise return." }],
        interdit: [{ motif: "max\\s*\\(", message: "Fais-le sans max()." }],
        indices: ["Garde le plus grand dans une variable : grand = a", "Puis : if b > grand: grand = b, pareil pour c, et return grand."]
      }
    ]
  }
];

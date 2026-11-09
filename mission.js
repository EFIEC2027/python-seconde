/*
 * Mission finale « Escape game » — se débloque quand les 20 algorigrammes
 * et les 32 exercices Python sont réussis.
 * 6 salles : chacune réutilise plusieurs notions et rapporte une lettre du mot PYTHON.
 * Le champ « schema » (facultatif) affiche un algorigramme au-dessus de l'énoncé.
 * Ne changez pas l'id d'une salle déjà utilisée par les élèves.
 */
(function () {
  const DEBUT = { t: "debut" }, FIN = { t: "fin" };
  const act = txt => ({ t: "action", txt });
  const es = txt => ({ t: "es", txt });
  const si = (txt, oui, non) => ({ t: "si", txt, oui, non });
  const tantque = (txt, corps) => ({ t: "tantque", txt, corps });

  window.PARCOURS_MISSION = [
    {
      id: "x1", titre: "Le digicode", notion: "algorigramme → Python · input, variables, calcul", lettre: "P",
      cours: `<p><strong>Ce que tu réutilises :</strong></p>
<ul><li>Lire un algorigramme de haut en bas : rectangle = action, <em>Lire</em> = <code>input()</code>, <em>Afficher</em> = <code>print()</code>.</li>
<li><code>n = int(input())</code> lit un nombre entier.</li>
<li>La flèche <code>←</code> de l'algorigramme devient <code>=</code> en Python : <code>total ← h × 60 + m</code> s'écrit <code>total = h * 60 + m</code>.</li></ul>`,
      exercices: [{
        id: "x1e1", titre: "Le digicode",
        enonce: `<p class="histoire">🔒 Tu es resté·e enfermé·e dans la salle informatique après la sonnerie ! Pour sortir, il faut ouvrir <strong>6 verrous</strong>. Chaque verrou ouvert te donne une lettre du mot de passe final.</p>
<p>Le premier verrou est un <strong>digicode</strong> : il demande le nombre de minutes écoulées depuis minuit. Le gardien a laissé son algorigramme sur un post-it. <strong>Traduis-le en Python.</strong></p>
<p>Exemple : avec <code>8</code> puis <code>30</code> (8 h 30), le programme affiche <code>510</code>.</p>`,
        schema: [DEBUT, es("Lire h"), es("Lire m"), act("total ← h × 60 + m"), es("Afficher total"), FIN],
        depart: "# Traduis l'algorigramme ligne par ligne\n",
        tests: [{ entree: "8\n30", attendu: "510" }, { entree: "0\n0", attendu: "0" }, { entree: "13\n5", attendu: "785" }, { entree: "23\n59", attendu: "1439" }],
        exige: [{ motif: "input\\s*\\(", message: "Les heures et les minutes doivent être lues avec input()." }, { motif: "int\\s*\\(", message: "Convertis ce qui est tapé en nombre avec int(...)." }],
        indices: ["Chaque « Lire » devient une ligne : h = int(input())", "total = h * 60 + m puis print(total)"]
      }]
    },
    {
      id: "x2", titre: "Le cadenas", notion: "conditions · if, elif, else", lettre: "Y",
      cours: `<p><strong>Ce que tu réutilises :</strong></p>
<ul><li>Un losange = un test. Branche <em>oui</em> → bloc du <code>if</code>, branche <em>non</em> → <code>else</code>.</li>
<li>Un losange dans la branche <em>non</em> d'un autre losange s'écrit avec <code>elif</code>.</li>
<li>Dans un algorigramme, « = » dans un losange est un test : en Python, on écrit <code>==</code>.</li></ul>`,
      exercices: [{
        id: "x2e1", titre: "Le cadenas",
        enonce: `<p>Deuxième verrou : un <strong>cadenas électronique</strong>. Quand on tape un code, il répond <code>Ouvert</code>, <code>Trop petit</code> ou <code>Trop grand</code>. Le bon code est <strong>2027</strong>.</p>
<p>Traduis l'algorigramme en Python, en utilisant <code>if</code>, <code>elif</code> et <code>else</code>.</p>`,
        schema: [DEBUT, es("Lire code"), si("code = 2027 ?", [es("Afficher \"Ouvert\"")], [si("code < 2027 ?", [es("Afficher \"Trop petit\"")], [es("Afficher \"Trop grand\"")])]), FIN],
        depart: "",
        tests: [{ entree: "2027", attendu: "Ouvert" }, { entree: "1999", attendu: "Trop petit" }, { entree: "3000", attendu: "Trop grand" }, { entree: "2026", attendu: "Trop petit" }, { entree: "2028", attendu: "Trop grand" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise if." }, { motif: "\\belif\\b", message: "Utilise elif pour le deuxième test." }, { motif: "\\belse\\b", message: "Utilise else pour le dernier cas." }, { motif: "==", message: "Pour tester l'égalité, écris == ." }],
        indices: ["code = int(input()) puis if code == 2027:", "if … : print(\"Ouvert\") / elif code < 2027: print(\"Trop petit\") / else: print(\"Trop grand\")"]
      }]
    },
    {
      id: "x3", titre: "Le laser", notion: "boucle for · reste % · compteur · or", lettre: "T",
      cours: `<p><strong>Ce que tu réutilises :</strong></p>
<ul><li><code>for s in range(1, n + 1):</code> fait prendre à s les valeurs 1, 2, …, n.</li>
<li><code>s % 3 == 0</code> est vrai quand s est un multiple de 3.</li>
<li><code>or</code> : il suffit qu'une des deux conditions soit vraie.</li>
<li>Un compteur : <code>total = 0</code> avant la boucle, <code>total = total + 1</code> dans la boucle.</li></ul>`,
      exercices: [{
        id: "x3e1", titre: "Le laser",
        enonce: `<p>Troisième verrou : un <strong>couloir protégé par un laser</strong>. Pendant les n premières secondes, le laser s'allume à chaque seconde qui est un <strong>multiple de 3 ou de 5</strong>. Pour passer, il faut connaître le planning exact.</p>
<p>Lis n. Affiche, une par ligne, chaque seconde de 1 à n où le laser est allumé, puis le nombre total de secondes allumées.</p>
<p>Avec <code>10</code> :</p><pre class="sortie">3
5
6
9
10
Total : 5</pre>
<p>Cette fois, pas d'algorigramme : à toi de construire le programme.</p>`,
        depart: "",
        tests: [{ entree: "10", attendu: "3\n5\n6\n9\n10\nTotal : 5" }, { entree: "2", attendu: "Total : 0" }, { entree: "15", attendu: "3\n5\n6\n9\n10\n12\n15\nTotal : 7" }, { entree: "5", attendu: "3\n5\nTotal : 2" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }, { motif: "range\\s*\\(", message: "Utilise range(...)." }, { motif: "%", message: "Utilise le reste % pour savoir si c'est un multiple." }],
        indices: ["n = int(input()) puis total = 0 avant la boucle.", "Dans la boucle : if s % 3 == 0 or s % 5 == 0: affiche s et ajoute 1 au total.", "Après la boucle (sans décalage) : print(\"Total :\", total)"]
      }]
    },
    {
      id: "x4", titre: "Le coffre", notion: "algorigramme → Python · while, and, compteur", lettre: "H",
      cours: `<p><strong>Ce que tu réutilises :</strong></p>
<ul><li>Une boucle « tant que » dans un algorigramme devient <code>while condition:</code>.</li>
<li><code>≠</code> s'écrit <code>!=</code> en Python ; « et » s'écrit <code>and</code>.</li>
<li>Avant la boucle, on lit une première valeur ; dans la boucle, on lit la suivante.</li></ul>`,
      exercices: [{
        id: "x4e1", titre: "Le coffre",
        enonce: `<p>Quatrième verrou : la clé de la porte est dans un <strong>coffre</strong>. Le code est <strong>42</strong>, mais attention : au bout de <strong>3 essais ratés</strong>, l'alarme se déclenche !</p>
<p>Traduis l'algorigramme en Python. Exemples :</p>
<pre class="sortie">10, puis 42      →  Ouvert en 2 essai(s)
1, puis 2, puis 3  →  Alarme !</pre>
<p>Pour afficher <code>Ouvert en 2 essai(s)</code>, écris <code>print("Ouvert en", essais, "essai(s)")</code>.</p>`,
        schema: [DEBUT, act("essais ← 1"), es("Lire code"),
          tantque("code ≠ 42 et essais < 3 ?", [es("Lire code"), act("essais ← essais + 1")]),
          si("code = 42 ?", [es("Afficher \"Ouvert en\", essais")], [es("Afficher \"Alarme !\"")]), FIN],
        depart: "",
        tests: [{ entree: "42", attendu: "Ouvert en 1 essai(s)" }, { entree: "10\n42", attendu: "Ouvert en 2 essai(s)" }, { entree: "1\n2\n42", attendu: "Ouvert en 3 essai(s)" }, { entree: "1\n2\n3", attendu: "Alarme !" }, { entree: "1\n2\n3\n42", attendu: "Alarme !" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }, { motif: "\\band\\b", message: "La condition de la boucle a deux parties : relie-les avec and." }],
        indices: ["while code != 42 and essais < 3:", "Dans la boucle : code = int(input()) puis essais = essais + 1. Après la boucle : if code == 42 … else …"]
      }]
    },
    {
      id: "x5", titre: "Le robot gardien", notion: "fonctions · return · booléens", lettre: "O",
      cours: `<p><strong>Ce que tu réutilises :</strong></p>
<ul><li><code>def nom(parametres):</code> puis <code>return</code> pour renvoyer le résultat.</li>
<li>Une fonction peut renvoyer <code>True</code> ou <code>False</code> : <code>return n % 2 == 0</code>.</li>
<li>Une fonction peut en appeler une autre.</li>
<li><code>1000 &lt;= n &lt;= 9999</code> teste si n est entre 1000 et 9999.</li></ul>`,
      exercices: [{
        id: "x5e1", titre: "Le robot gardien",
        enonce: `<p>Cinquième verrou : un <strong>robot gardien</strong> contrôle les badges dans le couloir. Écris ses deux fonctions.</p>
<ol><li><code>badge_valide(numero)</code> renvoie <code>True</code> si le numéro a <strong>4 chiffres</strong> (entre 1000 et 9999) <strong>et</strong> est un <strong>multiple de 7</strong>, sinon <code>False</code>.</li>
<li><code>peut_entrer(numero, heure)</code> renvoie <code>True</code> si le badge est valide <strong>et</strong> si l'heure est entre 8 et 17 (compris). Elle doit <strong>appeler</strong> <code>badge_valide</code>.</li></ol>
<p>Exemples : <code>badge_valide(1001)</code> renvoie <code>True</code> (1001 = 7 × 143) ; <code>peut_entrer(1001, 20)</code> renvoie <code>False</code> (trop tard).</p>
<p>Écris seulement les fonctions : la vérification les appelle avec plusieurs valeurs.</p>`,
        depart: "def badge_valide(numero):\n    \n\ndef peut_entrer(numero, heure):\n    \n",
        tests: [
          { ajout: "print(badge_valide(1001))", attendu: "True" }, { ajout: "print(badge_valide(1000))", attendu: "False" },
          { ajout: "print(badge_valide(70))", attendu: "False" }, { ajout: "print(badge_valide(9996))", attendu: "True" },
          { ajout: "print(badge_valide(14000))", attendu: "False" },
          { ajout: "print(peut_entrer(1001, 9))", attendu: "True" }, { ajout: "print(peut_entrer(1001, 20))", attendu: "False" },
          { ajout: "print(peut_entrer(1000, 10))", attendu: "False" }, { ajout: "print(peut_entrer(9996, 17))", attendu: "True" },
          { ajout: "print(peut_entrer(9996, 8))", attendu: "True" }, { ajout: "print(peut_entrer(9996, 7))", attendu: "False" }],
        exige: [{ motif: "def\\s+badge_valide\\s*\\(", message: "La première fonction doit s'appeler badge_valide." }, { motif: "def\\s+peut_entrer\\s*\\(", message: "La deuxième fonction doit s'appeler peut_entrer." }, { motif: "\\breturn\\b", message: "Les fonctions doivent renvoyer leur résultat avec return." }, { motif: "def\\s+peut_entrer[\\s\\S]*badge_valide\\s*\\(", message: "peut_entrer doit appeler badge_valide(...)." }],
        indices: ["badge_valide : return 1000 <= numero <= 9999 and numero % 7 == 0", "peut_entrer : return badge_valide(numero) and 8 <= heure <= 17"]
      }]
    },
    {
      id: "x6", titre: "La porte de sortie", notion: "tout réunir · fonction, while, // et %, if", lettre: "N",
      cours: `<p><strong>Ce que tu réutilises :</strong> tout !</p>
<ul><li><code>n % 10</code> donne le dernier chiffre de n ; <code>n // 10</code> enlève le dernier chiffre. Exemple : 2027 % 10 vaut 7 et 2027 // 10 vaut 202.</li>
<li>Une fonction avec une boucle <code>while</code> et une variable qui accumule.</li>
<li>Un programme principal qui lit, appelle la fonction et teste le résultat.</li></ul>`,
      exercices: [{
        id: "x6e1", titre: "La porte de sortie",
        enonce: `<p>Dernier verrou : le <strong>boîtier de la porte de sortie</strong>. Il accepte un code seulement si la <strong>somme de ses chiffres</strong> est un <strong>multiple de 7</strong>.</p>
<ol><li>Écris la fonction <code>somme_chiffres(n)</code> en traduisant l'algorigramme : elle renvoie la somme des chiffres de n.</li>
<li>Écris ensuite le programme principal : lis un code ; si la somme de ses chiffres est un multiple de 7, affiche <code>PORTE OUVERTE</code>, sinon affiche <code>Refusé : somme =</code> suivi de la somme.</li></ol>
<p>Exemples : avec <code>2390</code> (2 + 3 + 9 + 0 = 14) → <code>PORTE OUVERTE</code> ; avec <code>2027</code> (somme 11) → <code>Refusé : somme = 11</code>.</p>
<p>Interdit de transformer le nombre en texte : utilise <code>%</code> et <code>//</code>.</p>`,
        schema: [DEBUT, act("s ← 0"), tantque("n > 0 ?", [act("s ← s + n % 10"), act("n ← n // 10")]), es("Renvoyer s"), FIN],
        depart: "def somme_chiffres(n):\n    \n\n\n# Programme principal\n",
        tests: [{ entree: "2390", attendu: "PORTE OUVERTE" }, { entree: "2027", attendu: "Refusé : somme = 11" }, { entree: "7000", attendu: "PORTE OUVERTE" },
          { entree: "9996", attendu: "Refusé : somme = 33" }, { entree: "1600", attendu: "PORTE OUVERTE" },
          { entree: "1234", ajout: "print(somme_chiffres(9081))", attendu: "Refusé : somme = 10\n18" }],
        exige: [{ motif: "def\\s+somme_chiffres\\s*\\(", message: "La fonction doit s'appeler somme_chiffres." }, { motif: "\\bwhile\\b", message: "Dans la fonction, utilise une boucle while (comme l'algorigramme)." }, { motif: "\\breturn\\b", message: "La fonction doit renvoyer la somme avec return." }, { motif: "//", message: "Utilise // pour enlever le dernier chiffre." }],
        interdit: [{ motif: "\\bstr\\s*\\(", message: "Ne transforme pas le nombre en texte : utilise % et //." }, { motif: "\\bsum\\s*\\(", message: "Fais la somme toi-même avec la boucle while." }],
        indices: ["Dans la fonction : s = 0 / while n > 0: / s = s + n % 10 / n = n // 10 / puis return s (après la boucle).", "Programme principal : code = int(input()) puis s = somme_chiffres(code).", "if s % 7 == 0: print(\"PORTE OUVERTE\") else: print(\"Refusé : somme =\", s)"]
      }]
    }
  ];

  /* Bilan : compétences à maîtriser avant l'évaluation.
   * exos : exercices des parcours qui servent de preuves ; cours : lien vers la leçon. */
  window.COMPETENCES_MISSION = [
    { id: "c1", titre: "Lire un algorigramme et le faire fonctionner à la main", exos: ["g1", "g2"], salles: ["x1e1"], cours: "cours.html#algo-1" },
    { id: "c2", titre: "Traduire un algorigramme en Python", exos: ["g3", "g4", "g5"], salles: ["x1e1", "x2e1", "x4e1", "x6e1"], cours: "cours.html#algo-3" },
    { id: "c3", titre: "Afficher un résultat et faire calculer Python (+ − * / // %)", exos: ["m1"], salles: ["x6e1"], cours: "cours.html#python-1" },
    { id: "c4", titre: "Utiliser des variables et l'affectation (=)", exos: ["m3"], salles: ["x1e1"], cours: "cours.html#python-3" },
    { id: "c5", titre: "Lire une valeur au clavier et la convertir (input, int, float)", exos: ["m4"], salles: ["x1e1"], cours: "cours.html#python-4" },
    { id: "c6", titre: "Écrire une instruction conditionnelle (if, elif, else, and, or)", exos: ["m5", "m6"], salles: ["x2e1", "x3e1"], cours: "cours.html#python-5" },
    { id: "c7", titre: "Écrire une boucle bornée (for, range)", exos: ["m2"], salles: ["x3e1"], cours: "cours.html#python-2" },
    { id: "c8", titre: "Écrire une boucle non bornée (while) qui s'arrête", exos: ["m7"], salles: ["x4e1", "x6e1"], cours: "cours.html#python-7" },
    { id: "c9", titre: "Définir et appeler une fonction (def, paramètres, return)", exos: ["m8"], salles: ["x5e1", "x6e1"], cours: "cours.html#python-8" },
    { id: "c10", titre: "Comprendre un message d'erreur et corriger mon programme", exos: [], salles: [], cours: "cours.html#python-1" }
  ];
})();

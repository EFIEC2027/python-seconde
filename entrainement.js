/*
 * Entraînement Python — PAS NOTÉ, pour s'exercer à la maison ou en autonomie.
 * 8 notions × 3 exercices, dans le même ordre que le parcours de classe.
 * Les identifiants commencent par « t » : ne les changez plus une fois utilisés.
 */
window.PARCOURS_ENTRAINEMENT = [
  {
    id: "t1", titre: "Afficher", notion: "print et calculs", rappel: "m1",
    cours: `<p><code>print("texte")</code> affiche un texte ; <code>print(3 * 4)</code> affiche le résultat d'un calcul. On sépare texte et calcul par une virgule : <code>print("Total :", 3 + 4)</code>.</p>`,
    exercices: [
      { id: "t1e1", titre: "Mon emploi du temps",
        enonce: "Affiche ces trois lignes, dans cet ordre :<pre class=\"sortie\">Lundi : SNT\nMardi : Maths\nMercredi : Sport</pre>",
        depart: "", tests: [{ entree: "", attendu: "Lundi : SNT\nMardi : Maths\nMercredi : Sport" }],
        indices: ["Trois print, un par ligne.", "print(\"Lundi : SNT\")"] },
      { id: "t1e2", titre: "Minutes dans une semaine",
        enonce: "Fais calculer à Python le nombre de minutes dans une semaine (7 jours × 24 heures × 60 minutes) et affiche le résultat. N'écris pas le résultat toi-même.",
        depart: "", tests: [{ entree: "", attendu: "10080" }],
        exige: [{ motif: "\\*", message: "Utilise * pour multiplier." }], interdit: [{ motif: "10080", message: "Fais calculer Python : n'écris pas le résultat." }],
        indices: ["print(7 * 24 * 60)"] },
      { id: "t1e3", titre: "Le ticket de caisse",
        enonce: "Un croissant coûte 4 dirhams. Affiche exactement <code>Prix de 6 croissants : 24</code>, en faisant calculer 6 × 4 par Python.",
        depart: "", tests: [{ entree: "", attendu: "Prix de 6 croissants : 24" }],
        interdit: [{ motif: "\\b24\\b", message: "Fais calculer 6 * 4 par Python." }],
        indices: ["Texte entre guillemets, puis une virgule, puis le calcul.", "print(\"Prix de 6 croissants :\", 6 * 4)"] }
    ]
  },
  {
    id: "t2", titre: "Répéter", notion: "boucle for", rappel: "m2",
    cours: `<p><code>for i in range(5):</code> répète 5 fois les lignes décalées en dessous ; i vaut 0, 1, 2, 3, 4. <code>range(1, 11)</code> donne 1 à 10, <code>range(0, 20, 5)</code> donne 0, 5, 10, 15.</p>`,
    exercices: [
      { id: "t2e1", titre: "Encouragements",
        enonce: "Avec une boucle <code>for</code>, affiche 4 fois la ligne <code>Allez !</code>",
        depart: "", tests: [{ entree: "", attendu: "Allez !\nAllez !\nAllez !\nAllez !" }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }], indices: ["for i in range(4):", "La ligne print est décalée de 4 espaces."] },
      { id: "t2e2", titre: "De 5 en 5",
        enonce: "Affiche les nombres de 5 en 5, de 5 à 50 (5, 10, 15, … 50), un par ligne.",
        depart: "", tests: [{ entree: "", attendu: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50].join("\n") }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }], indices: ["range(5, 51, 5)", "for n in range(5, 51, 5): puis print(n)"] },
      { id: "t2e3", titre: "Les carrés",
        enonce: "Affiche le carré des nombres de 1 à 6, sous la forme <code>1 x 1 = 1</code>, <code>2 x 2 = 4</code>… jusqu'à <code>6 x 6 = 36</code>.",
        depart: "", tests: [{ entree: "", attendu: [1, 2, 3, 4, 5, 6].map(n => `${n} x ${n} = ${n * n}`).join("\n") }],
        exige: [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }], indices: ["for n in range(1, 7):", "print(n, \"x\", n, \"=\", n * n)"] }
    ]
  },
  {
    id: "t3", titre: "Variables", notion: "variables et calculs", rappel: "m3",
    cours: `<p>Une variable garde une valeur : <code>prix = 12</code>. On peut la modifier : <code>prix = prix + 3</code>. <code>//</code> donne le quotient entier, <code>%</code> le reste.</p>`,
    exercices: [
      { id: "t3e1", titre: "La tirelire",
        enonce: "Une tirelire contient 50 dirhams. On ajoute 20, puis on retire 15. Utilise une variable <code>tirelire</code>, fais les deux opérations, puis affiche son contenu.",
        depart: "tirelire = 50\n", tests: [{ entree: "", attendu: "55" }],
        exige: [{ motif: "tirelire\\s*=\\s*tirelire|tirelire\\s*[-+]=", message: "Modifie la variable tirelire (tirelire = tirelire + …)." }],
        interdit: [{ motif: "print\\s*\\(\\s*55", message: "Affiche la variable, pas le résultat écrit à la main." }],
        indices: ["tirelire = tirelire + 20", "Puis tirelire = tirelire - 15 et print(tirelire)"] },
      { id: "t3e2", titre: "Les équipes",
        enonce: "Il y a 29 élèves et on fait des équipes de 4. Affiche le nombre d'équipes complètes, puis le nombre d'élèves qui restent, sur deux lignes :<pre class=\"sortie\">Equipes : 7\nRestent : 1</pre>Utilise <code>//</code> et <code>%</code>.",
        depart: "eleves = 29\n", tests: [{ entree: "", attendu: "Equipes : 7\nRestent : 1" }],
        exige: [{ motif: "//", message: "Utilise //." }, { motif: "%", message: "Utilise %." }], indices: ["eleves // 4 donne le nombre d'équipes.", "print(\"Restent :\", eleves % 4)"] },
      { id: "t3e3", titre: "Échanger deux verres",
        enonce: "Le verre <code>a</code> contient du jus (valeur 1) et le verre <code>b</code> de l'eau (valeur 2). Échange leurs contenus en utilisant une troisième variable <code>c</code>, puis affiche <code>a</code> et <code>b</code> sur deux lignes : <code>2</code> puis <code>1</code>.",
        depart: "a = 1\nb = 2\n", tests: [{ entree: "", attendu: "2\n1" }],
        exige: [{ motif: "\\bc\\s*=", message: "Utilise une troisième variable c." }],
        interdit: [{ motif: "a\\s*=\\s*2|b\\s*=\\s*1", message: "Ne recopie pas les valeurs : échange-les avec c." }],
        indices: ["c = a garde le contenu de a.", "c = a / a = b / b = c, puis print(a) et print(b)"] }
    ]
  },
  {
    id: "t4", titre: "Demander", notion: "input et types", rappel: "m4",
    cours: `<p><code>input()</code> lit ce que tape l'utilisateur, sous forme de texte. Pour calculer : <code>int(input())</code> (entier) ou <code>float(input())</code> (nombre à virgule).</p>`,
    exercices: [
      { id: "t4e1", titre: "L'écho",
        enonce: "Lis un mot et affiche-le deux fois sur la même ligne, séparé par un espace. Avec <code>Salut</code> : <code>Salut Salut</code>.",
        depart: "", tests: [{ entree: "Salut", attendu: "Salut Salut" }, { entree: "Python", attendu: "Python Python" }],
        exige: [{ motif: "input\\s*\\(", message: "Lis le mot avec input()." }], indices: ["mot = input()", "print(mot, mot)"] },
      { id: "t4e2", titre: "Le périmètre",
        enonce: "Lis la longueur puis la largeur d'un rectangle (deux entiers) et affiche son périmètre : 2 × (longueur + largeur).",
        depart: "", tests: [{ entree: "5\n3", attendu: "16" }, { entree: "10\n10", attendu: "40" }, { entree: "1\n7", attendu: "16" }],
        exige: [{ motif: "input\\s*\\(", message: "Lis les deux nombres avec input()." }], indices: ["L = int(input()) puis l = int(input())", "print(2 * (L + l))"] },
      { id: "t4e3", titre: "Le prix au kilo",
        enonce: "Lis une masse en kg (nombre à virgule possible) et un prix au kilo, puis affiche le prix à payer arrondi à 2 décimales avec <code>round(..., 2)</code>.",
        depart: "", tests: [{ entree: "1.5\n12", attendu: "18.0" }, { entree: "0.75\n8.4", attendu: "6.3" }, { entree: "2\n3.99", attendu: "7.98" }],
        exige: [{ motif: "float\\s*\\(", message: "Une masse peut être à virgule : utilise float(input())." }], indices: ["m = float(input()) et p = float(input())", "print(round(m * p, 2))"] }
    ]
  },
  {
    id: "t5", titre: "Décider", notion: "conditions if / else", rappel: "m5",
    cours: `<p><code>if condition:</code> exécute le bloc décalé seulement si la condition est vraie ; <code>else:</code> sinon. Comparaisons : <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>.</p>`,
    exercices: [
      { id: "t5e1", titre: "Positif ou négatif",
        enonce: "Lis un entier. Affiche <code>positif</code> s'il est supérieur ou égal à 0, sinon <code>négatif</code>.",
        depart: "", tests: [{ entree: "5", attendu: "positif" }, { entree: "-2", attendu: "négatif" }, { entree: "0", attendu: "positif" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise if." }, { motif: "\\belse\\b", message: "Utilise else." }], indices: ["if n >= 0:", "else: print(\"négatif\")"] },
      { id: "t5e2", titre: "La batterie",
        enonce: "Lis le niveau de batterie d'un téléphone (en %). S'il est strictement inférieur à 20, affiche <code>Recharge !</code>, sinon affiche <code>OK</code>.",
        depart: "", tests: [{ entree: "15", attendu: "Recharge !" }, { entree: "20", attendu: "OK" }, { entree: "87", attendu: "OK" }, { entree: "0", attendu: "Recharge !" }],
        exige: [{ motif: "\\bif\\b", message: "Utilise if." }], indices: ["if niveau < 20:"] },
      { id: "t5e3", titre: "Multiple de 3",
        enonce: "Lis un entier. Affiche <code>multiple de 3</code> s'il est divisible par 3, sinon affiche le reste de la division par 3 sous la forme <code>reste 2</code>.",
        depart: "", tests: [{ entree: "9", attendu: "multiple de 3" }, { entree: "10", attendu: "reste 1" }, { entree: "14", attendu: "reste 2" }, { entree: "0", attendu: "multiple de 3" }],
        exige: [{ motif: "%", message: "Utilise le reste %." }], indices: ["if n % 3 == 0:", "else: print(\"reste\", n % 3)"] }
    ]
  },
  {
    id: "t6", titre: "Plusieurs cas", notion: "elif, and, or", rappel: "m6",
    cours: `<p><code>elif</code> teste un autre cas si le précédent est faux. <code>and</code> : les deux conditions doivent être vraies ; <code>or</code> : il suffit d'une.</p>`,
    exercices: [
      { id: "t6e1", titre: "La météo",
        enonce: "Lis une température. Affiche <code>froid</code> si elle est inférieure à 10, <code>doux</code> si elle est entre 10 et 24, et <code>chaud</code> à partir de 25.",
        depart: "", tests: [{ entree: "5", attendu: "froid" }, { entree: "10", attendu: "doux" }, { entree: "24", attendu: "doux" }, { entree: "25", attendu: "chaud" }, { entree: "-3", attendu: "froid" }],
        exige: [{ motif: "\\belif\\b", message: "Utilise elif." }], indices: ["if t < 10: … elif t < 25: … else: …"] },
      { id: "t6e2", titre: "Le parc d'attractions",
        enonce: "Lis l'âge puis la taille (en cm) d'un enfant. Il peut monter dans le manège s'il a au moins 8 ans <strong>et</strong> mesure au moins 130 cm : affiche <code>Accès autorisé</code>, sinon <code>Accès refusé</code>.",
        depart: "", tests: [{ entree: "9\n135", attendu: "Accès autorisé" }, { entree: "7\n140", attendu: "Accès refusé" }, { entree: "12\n125", attendu: "Accès refusé" }, { entree: "8\n130", attendu: "Accès autorisé" }],
        exige: [{ motif: "\\band\\b", message: "Utilise and." }], indices: ["if age >= 8 and taille >= 130:"] },
      { id: "t6e3", titre: "Le week-end",
        enonce: "Lis un jour en minuscules. Affiche <code>week-end</code> si c'est <code>samedi</code> ou <code>dimanche</code>, sinon <code>école</code>.",
        depart: "", tests: [{ entree: "samedi", attendu: "week-end" }, { entree: "dimanche", attendu: "week-end" }, { entree: "lundi", attendu: "école" }, { entree: "vendredi", attendu: "école" }],
        exige: [{ motif: "\\bor\\b", message: "Utilise or." }], indices: ["jour = input()", "if jour == \"samedi\" or jour == \"dimanche\":"] }
    ]
  },
  {
    id: "t7", titre: "Tant que", notion: "boucle while", rappel: "m7",
    cours: `<p><code>while condition:</code> répète le bloc tant que la condition est vraie. Il faut que quelque chose change dans la boucle, sinon elle ne s'arrête jamais.</p>`,
    exercices: [
      { id: "t7e1", titre: "Doubler jusqu'à 100",
        enonce: "Pars de <code>n = 1</code>. Tant que n est inférieur à 100, affiche n puis double-le. (Le programme affiche 1, 2, 4, … 64.)",
        depart: "n = 1\n", tests: [{ entree: "", attendu: "1\n2\n4\n8\n16\n32\n64" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }], indices: ["while n < 100:", "print(n) puis n = n * 2"] },
      { id: "t7e2", titre: "L'épargne",
        enonce: "Tu as 0 dirham et tu mets 30 dirhams de côté chaque semaine. Lis un objectif et affiche le nombre de semaines nécessaires pour l'atteindre ou le dépasser.",
        depart: "", tests: [{ entree: "100", attendu: "4" }, { entree: "30", attendu: "1" }, { entree: "0", attendu: "0" }, { entree: "301", attendu: "11" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }], indices: ["somme = 0 et semaines = 0 avant la boucle.", "while somme < objectif: somme = somme + 30 et semaines = semaines + 1"] },
      { id: "t7e3", titre: "Le mot de passe",
        enonce: "Lis des mots jusqu'à ce que l'utilisateur tape <code>python</code>. Ensuite, affiche <code>Bienvenue</code> et le nombre de mots tapés (python compris). Exemple : <code>chat</code>, <code>chien</code>, <code>python</code> → <code>Bienvenue 3</code>.",
        depart: "", tests: [{ entree: "chat\nchien\npython", attendu: "Bienvenue 3" }, { entree: "python", attendu: "Bienvenue 1" }, { entree: "a\nb\nc\nd\npython", attendu: "Bienvenue 5" }],
        exige: [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }], indices: ["mot = input() et n = 1 avant la boucle.", "while mot != \"python\": mot = input() et n = n + 1"] }
    ]
  },
  {
    id: "t8", titre: "Fonctions", notion: "def et return", rappel: "m8",
    cours: `<p><code>def nom(x):</code> définit une fonction ; <code>return</code> renvoie son résultat. Ici, écris seulement la fonction : la vérification l'appelle.</p>`,
    exercices: [
      { id: "t8e1", titre: "Le triple",
        enonce: "Écris une fonction <code>triple(n)</code> qui renvoie 3 × n.",
        depart: "def triple(n):\n    ", tests: [{ ajout: "print(triple(4))", attendu: "12" }, { ajout: "print(triple(-2))", attendu: "-6" }, { ajout: "print(triple(0))", attendu: "0" }],
        exige: [{ motif: "def\\s+triple\\s*\\(", message: "La fonction doit s'appeler triple." }, { motif: "\\breturn\\b", message: "Utilise return." }], indices: ["return 3 * n"] },
      { id: "t8e2", titre: "La moyenne de deux notes",
        enonce: "Écris une fonction <code>moyenne(a, b)</code> qui renvoie la moyenne de deux notes.",
        depart: "def moyenne(a, b):\n    ", tests: [{ ajout: "print(moyenne(10, 14))", attendu: "12.0" }, { ajout: "print(moyenne(15, 16))", attendu: "15.5" }, { ajout: "print(moyenne(0, 20))", attendu: "10.0" }],
        exige: [{ motif: "def\\s+moyenne\\s*\\(", message: "La fonction doit s'appeler moyenne." }, { motif: "\\breturn\\b", message: "Utilise return." }], indices: ["return (a + b) / 2"] },
      { id: "t8e3", titre: "Le plus petit",
        enonce: "Écris une fonction <code>plus_petit(a, b)</code> qui renvoie le plus petit des deux nombres, sans utiliser <code>min</code>.",
        depart: "def plus_petit(a, b):\n    ", tests: [{ ajout: "print(plus_petit(3, 8))", attendu: "3" }, { ajout: "print(plus_petit(9, 2))", attendu: "2" }, { ajout: "print(plus_petit(5, 5))", attendu: "5" }, { ajout: "print(plus_petit(-1, 0))", attendu: "-1" }],
        exige: [{ motif: "def\\s+plus_petit\\s*\\(", message: "La fonction doit s'appeler plus_petit." }, { motif: "\\breturn\\b", message: "Utilise return." }],
        interdit: [{ motif: "min\\s*\\(", message: "Fais-le sans min()." }], indices: ["if a < b: return a", "else: return b"] }
    ]
  }
];

/* Entraînement algorigrammes — PAS NOTÉ. 5 notions × 2 exercices (identifiants « u »). */
(function () {
  const DEBUT = { t: "debut" }, FIN = { t: "fin" };
  const act = (txt, trou) => ({ t: "action", txt, trou });
  const es = (txt, trou) => ({ t: "es", txt, trou });
  const si = (txt, oui, non, trou) => ({ t: "si", txt, oui, non, trou });
  const tantque = (txt, corps, trou) => ({ t: "tantque", txt, corps, trou });
  window.PARCOURS_ENTRAINEMENT_ALGO = [
    { id: "u1", titre: "Lire un algorigramme", notion: "les symboles", rappel: "g1",
      cours: "<p>Ovale = début / fin ; rectangle = action (calcul, Lire, Afficher) ; losange = test (oui / non). On lit de haut en bas en suivant les flèches.</p>",
      exercices: [
        { id: "u1e1", titre: "Quel symbole ?", type: "qcm", enonce: "<p>Dans un algorigramme, quel symbole contient un <strong>test</strong> dont la réponse est oui ou non ?</p>",
          choix: ["Le losange", "L'ovale", "Le rectangle", "La flèche"], bonne: 0, explication: "Le losange contient une question ; on suit la flèche oui ou la flèche non.", indices: ["Il a deux sorties."] },
        { id: "u1e2", titre: "Que fait-il ?", type: "qcm", schema: [DEBUT, es("Lire prix"), act("prix ← prix × 2"), es("Afficher prix"), FIN],
          enonce: "<p>Que fait cet algorigramme ?</p>", choix: ["Il affiche le double du prix tapé", "Il affiche le prix tapé", "Il affiche 2", "Il demande deux prix"], bonne: 0,
          explication: "prix prend la valeur prix × 2, puis on l'affiche.", indices: ["Suis les flèches ligne par ligne."] } ] },
    { id: "u2", titre: "Séquence", notion: "variables et calculs", rappel: "g2",
      cours: "<p>La flèche ← veut dire « prend la valeur ». Pour suivre un algorigramme, note la valeur de chaque variable après chaque ligne.</p>",
      exercices: [
        { id: "u2e1", titre: "À la main", type: "suivre", schema: [DEBUT, act("x ← 3"), act("y ← x + 5"), act("x ← y − 1"), es("Afficher x"), FIN],
          enonce: "<p>Fais tourner l'algorigramme à la main.</p>", question: "Qu'affiche-t-il ?", attendu: "7", explication: "x = 3, y = 8, puis x = 8 − 1 = 7.", indices: ["Fais un tableau x | y."] },
        { id: "u2e2", titre: "Compléter : le prix TTC", type: "completer", schema: [DEBUT, es("Lire ht"), act("", "A"), es("Afficher ttc"), FIN],
          enonce: "<p>L'algorigramme doit afficher le prix avec 20 % de TVA. Que faut-il écrire en <strong>A</strong> ?</p>",
          trous: { A: { choix: ["ttc ← ht × 1,2", "ttc ← ht + 20", "ht ← ttc × 1,2", "Afficher ht"], bonne: 0 } },
          explication: "Ajouter 20 % revient à multiplier par 1,2.", indices: ["La variable affichée doit être calculée avant."] } ] },
    { id: "u3", titre: "Conditions", notion: "si… alors… sinon", rappel: "g3",
      cours: "<p>Au losange, on répond à la question : si c'est oui, on suit la flèche oui ; sinon la flèche non. Une seule des deux branches est exécutée.</p>",
      exercices: [
        { id: "u3e1", titre: "Quelle branche ?", type: "suivre", schema: [DEBUT, es("Lire n"), si("n > 10 ?", [es("Afficher \"grand\"")], [es("Afficher \"petit\"")]), FIN],
          enonce: "<p>L'utilisateur tape <strong>10</strong>.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "petit", accepte: ["\"petit\""],
          explication: "10 > 10 est faux (10 n'est pas plus grand que 10) : on suit la branche non.", indices: ["Est-ce que 10 est strictement plus grand que 10 ?"] },
        { id: "u3e2", titre: "Compléter : pair ou impair", type: "completer", schema: [DEBUT, es("Lire n"), si("", [es("Afficher \"pair\"")], [es("Afficher \"impair\"")], "A"), FIN],
          enonce: "<p>Que faut-il écrire dans le losange <strong>A</strong> ?</p>",
          trous: { A: { choix: ["reste de n ÷ 2 = 0 ?", "n > 2 ?", "n = 2 ?", "n ÷ 2 > 1 ?"], bonne: 0 } },
          explication: "Un nombre est pair quand le reste de sa division par 2 vaut 0.", indices: ["4, 6, 8 sont pairs : que vaut leur reste quand on divise par 2 ?"] } ] },
    { id: "u4", titre: "Boucles", notion: "tant que", rappel: "g4",
      cours: "<p>Une flèche qui remonte vers un losange forme une boucle : on répète tant que le test est vrai. Note les valeurs à chaque tour.</p>",
      exercices: [
        { id: "u4e1", titre: "Combien de tours ?", type: "suivre", schema: [DEBUT, act("n ← 10"), tantque("n > 0 ?", [act("n ← n − 3")]), es("Afficher n"), FIN],
          enonce: "<p>Fais tourner la boucle à la main.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "-2", accepte: ["−2", "- 2"],
          explication: "n vaut 10, 7, 4, 1, puis −2 : le test n > 0 devient faux.", indices: ["n diminue de 3 à chaque tour.", "On sort de la boucle dès que n n'est plus positif."] },
        { id: "u4e2", titre: "Compléter : compter jusqu'à 5", type: "completer", schema: [DEBUT, act("i ← 1"), tantque("", [es("Afficher i"), act("i ← i + 1")], "A"), FIN],
          enonce: "<p>L'algorigramme doit afficher 1, 2, 3, 4, 5. Que faut-il écrire dans le losange <strong>A</strong> ?</p>",
          trous: { A: { choix: ["i ≤ 5 ?", "i < 5 ?", "i = 5 ?", "i > 5 ?"], bonne: 0 } },
          explication: "Pour afficher aussi 5, il faut continuer tant que i est inférieur ou égal à 5.", indices: ["Avec i < 5, le 5 serait-il affiché ?"] } ] },
    { id: "u5", titre: "Objets connectés", notion: "situations concrètes", rappel: "g5",
      cours: "<p>Un objet connecté lit ses capteurs, teste les valeurs, puis commande ses actionneurs.</p>",
      exercices: [
        { id: "u5e1", titre: "L'arrosage", type: "suivre", schema: [DEBUT, es("Lire humidité"), si("humidité < 30 ?", [es("Afficher \"Arroser\"")], [es("Afficher \"Attendre\"")]), FIN],
          enonce: "<p>Le capteur mesure une humidité de <strong>45</strong>.</p>", question: "Qu'affiche le système ?", attendu: "Attendre", accepte: ["\"Attendre\""],
          explication: "45 < 30 est faux : branche non.", indices: ["45 est-il plus petit que 30 ?"] },
        { id: "u5e2", titre: "L'alarme", type: "qcm", schema: [DEBUT, es("Lire porte"), es("Lire alarme"), si("porte ouverte et alarme activée ?", [es("Afficher \"Sirène\"")], [es("Afficher \"Calme\"")]), FIN],
          enonce: "<p>La porte est <strong>ouverte</strong> mais l'alarme est <strong>désactivée</strong>. Qu'affiche le système ?</p>",
          choix: ["Calme", "Sirène", "Les deux", "Rien"], bonne: 0, explication: "Avec « et », les deux conditions doivent être vraies. L'alarme est désactivée : branche non.", indices: ["« et » : il faut que les deux soient vraies."] } ] }
  ];
})();

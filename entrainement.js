/*
 * Entraînement Python — PAS NOTÉ, pour s'exercer à la maison ou en autonomie.
 * 8 notions, 44 exercices (24 + 20 supplémentaires en fin de fichier), dans le même ordre que le parcours de classe.
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

/* Entraînement algorigrammes — PAS NOTÉ. 5 notions, 80 exercices (10 + 20 + 50 révisions maison en fin de fichier, identifiants « u »). */
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

/* Entraînement Python — exercices supplémentaires (20), ajoutés à la suite de chaque notion. PAS NOTÉ. */
(function () {
  const pourFor = [{ motif: "\\bfor\\b", message: "Utilise une boucle for." }];
  const pourWhile = [{ motif: "\\bwhile\\b", message: "Utilise une boucle while." }];
  const PLUS = {
    t1: [
      { id: "t1e4", titre: "Carte d'anniversaire",
        enonce: "Affiche exactement ces deux lignes :<pre class=\"sortie\">Joyeux anniversaire !\nTu as 16 ans</pre>Le 16 doit être calculé par Python : 2026 − 2010.",
        depart: "", tests: [{ entree: "", attendu: "Joyeux anniversaire !\nTu as 16 ans" }],
        interdit: [{ motif: "\\b16\\b", message: "Fais calculer 2026 - 2010 par Python : n'écris pas 16." }],
        indices: ["Deux print.", "print(\"Tu as\", 2026 - 2010, \"ans\")"] },
      { id: "t1e5", titre: "Secondes dans une journée",
        enonce: "Affiche exactement <code>Une journée dure 86400 secondes</code>, en faisant calculer 24 × 60 × 60 par Python.",
        depart: "", tests: [{ entree: "", attendu: "Une journée dure 86400 secondes" }],
        interdit: [{ motif: "86400", message: "Fais calculer 24 * 60 * 60 par Python." }],
        indices: ["Texte, virgule, calcul, virgule, texte.", "print(\"Une journée dure\", 24 * 60 * 60, \"secondes\")"] }
    ],
    t2: [
      { id: "t2e4", titre: "Compte à rebours",
        enonce: "Avec une boucle <code>for</code>, affiche les nombres de 10 à 1 (un par ligne), puis <code>Décollage !</code>",
        depart: "", tests: [{ entree: "", attendu: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nDécollage !" }], exige: pourFor,
        indices: ["range(10, 0, -1) compte à l'envers : 10, 9, … 1.", "Le print(\"Décollage !\") n'est PAS décalé : il est après la boucle."] },
      { id: "t2e5", titre: "La table de 7",
        enonce: "Affiche la table de 7, de <code>7 x 1 = 7</code> jusqu'à <code>7 x 10 = 70</code>.",
        depart: "", tests: [{ entree: "", attendu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `7 x ${n} = ${7 * n}`).join("\n") }], exige: pourFor,
        indices: ["for n in range(1, 11):", "print(\"7 x\", n, \"=\", 7 * n)"] },
      { id: "t2e6", titre: "La somme de 1 à 100",
        enonce: "Calcule 1 + 2 + 3 + … + 100 avec une boucle et une variable <code>total</code>, puis affiche le total.",
        depart: "total = 0\n", tests: [{ entree: "", attendu: "5050" }], exige: pourFor,
        interdit: [{ motif: "5050", message: "Fais calculer la somme par la boucle." }],
        indices: ["for i in range(1, 101):", "Dans la boucle : total = total + i. Après la boucle (pas décalé) : print(total)."] }
    ],
    t3: [
      { id: "t3e4", titre: "Les bus de la sortie",
        enonce: "47 élèves partent en sortie dans des minibus de 12 places. Avec les variables <code>eleves = 47</code> et <code>places = 12</code>, affiche :<pre class=\"sortie\">Minibus pleins : 3\nÉlèves restants : 11</pre>",
        depart: "eleves = 47\nplaces = 12\n", tests: [{ entree: "", attendu: "Minibus pleins : 3\nÉlèves restants : 11" }],
        exige: [{ motif: "//", message: "Utilise // pour le quotient entier." }, { motif: "%", message: "Utilise % pour le reste." }],
        interdit: [{ motif: "\\b11\\b|:\\s*3", message: "Fais calculer les résultats par Python." }],
        indices: ["eleves // places donne le nombre de minibus pleins.", "eleves % places donne les élèves qui restent."] },
      { id: "t3e5", titre: "La durée du film",
        enonce: "Un film dure <code>duree = 135</code> minutes. Affiche sa durée en heures et minutes : <code>2 h 15 min</code>.",
        depart: "duree = 135\n", tests: [{ entree: "", attendu: "2 h 15 min" }],
        exige: [{ motif: "//", message: "Utilise // pour les heures." }, { motif: "%", message: "Utilise % pour les minutes qui restent." }],
        indices: ["Une heure = 60 minutes : duree // 60 donne les heures.", "print(duree // 60, \"h\", duree % 60, \"min\")"] },
      { id: "t3e6", titre: "Le prix avec la TVA",
        enonce: "Un casque coûte <code>prix = 250</code> dirhams hors taxes. On ajoute 20 % de TVA. Calcule le prix final dans une variable <code>prix_final</code> et affiche-le.",
        depart: "prix = 250\n", tests: [{ entree: "", attendu: "300.0" }],
        interdit: [{ motif: "\\b300\\b", message: "Fais calculer le prix par Python." }],
        indices: ["20 % de prix, c'est prix * 20 / 100.", "prix_final = prix + prix * 20 / 100"] }
    ],
    t4: [
      { id: "t4e4", titre: "Bonjour !",
        enonce: "Demande un prénom avec <code>input()</code>, puis affiche <code>Bonjour</code> suivi du prénom et d'un point d'exclamation. Exemple : si on tape Sara, le programme affiche <code>Bonjour Sara !</code>",
        depart: "", tests: [{ entree: "Sara", attendu: "Bonjour Sara !" }, { entree: "Youssef", attendu: "Bonjour Youssef !" }],
        indices: ["prenom = input()", "print(\"Bonjour\", prenom, \"!\")"] },
      { id: "t4e5", titre: "L'an prochain",
        enonce: "Demande un âge, puis affiche l'âge qu'on aura l'an prochain. Exemple : 15 → <code>16</code>.",
        depart: "", tests: [{ entree: "15", attendu: "16" }, { entree: "0", attendu: "1" }, { entree: "41", attendu: "42" }],
        indices: ["input() donne du texte : il faut le convertir en nombre entier.", "age = int(input()) puis print(age + 1)"] },
      { id: "t4e6", titre: "Le convertisseur",
        enonce: "1 euro vaut 11 dirhams. Demande une somme en euros (elle peut avoir une virgule, tapée avec un point : 2.5), puis affiche la somme en dirhams.",
        depart: "", tests: [{ entree: "10", attendu: "110.0" }, { entree: "2.5", attendu: "27.5" }, { entree: "0", attendu: "0.0" }],
        indices: ["Un nombre à virgule se convertit avec float().", "euros = float(input()) puis print(euros * 11)"] }
    ],
    t5: [
      { id: "t5e4", titre: "Pair ou impair",
        enonce: "Demande un nombre entier. Affiche <code>pair</code> s'il est pair, <code>impair</code> sinon.",
        depart: "", tests: [{ entree: "4", attendu: "pair" }, { entree: "7", attendu: "impair" }, { entree: "0", attendu: "pair" }, { entree: "13", attendu: "impair" }],
        indices: ["Un nombre est pair si le reste de sa division par 2 vaut 0.", "if n % 2 == 0:"] },
      { id: "t5e5", titre: "Le permis de conduire",
        enonce: "Demande un âge. À partir de 18 ans, affiche <code>Tu peux passer le permis</code>. Sinon, affiche le nombre d'années à attendre, par exemple <code>Encore 3 ans</code> pour 15 ans.",
        depart: "", tests: [{ entree: "20", attendu: "Tu peux passer le permis" }, { entree: "18", attendu: "Tu peux passer le permis" }, { entree: "15", attendu: "Encore 3 ans" }, { entree: "16", attendu: "Encore 2 ans" }],
        indices: ["if age >= 18: (attention à 18 pile !)", "Dans le else : print(\"Encore\", 18 - age, \"ans\")"] },
      { id: "t5e6", titre: "Le code du casier",
        enonce: "Demande un code. Si c'est <code>4821</code>, affiche <code>Casier ouvert</code>, sinon <code>Code faux</code>.",
        depart: "", tests: [{ entree: "4821", attendu: "Casier ouvert" }, { entree: "1234", attendu: "Code faux" }, { entree: "48210", attendu: "Code faux" }],
        indices: ["On peut comparer le texte directement : if code == \"4821\":", "Deux signes = pour comparer."] }
    ],
    t6: [
      { id: "t6e4", titre: "La mention au bac",
        enonce: "Demande une note (elle peut avoir une virgule). Affiche la mention : 16 ou plus <code>Très bien</code>, 14 ou plus <code>Bien</code>, 12 ou plus <code>Assez bien</code>, 10 ou plus <code>Admis</code>, sinon <code>Refusé</code>.",
        depart: "", tests: [{ entree: "17", attendu: "Très bien" }, { entree: "16", attendu: "Très bien" }, { entree: "14", attendu: "Bien" }, { entree: "12.5", attendu: "Assez bien" }, { entree: "10", attendu: "Admis" }, { entree: "8", attendu: "Refusé" }],
        exige: [{ motif: "\\belif\\b", message: "Utilise elif." }],
        indices: ["note = float(input())", "Commence par le cas le plus haut : if note >= 16: … elif note >= 14: …"] },
      { id: "t6e5", titre: "Le tarif du cinéma",
        enonce: "Demande un âge. Moins de 12 ans ou 65 ans et plus : <code>Tarif réduit : 30 DH</code>. Sinon : <code>Plein tarif : 60 DH</code>.",
        depart: "", tests: [{ entree: "8", attendu: "Tarif réduit : 30 DH" }, { entree: "70", attendu: "Tarif réduit : 30 DH" }, { entree: "65", attendu: "Tarif réduit : 30 DH" }, { entree: "12", attendu: "Plein tarif : 60 DH" }, { entree: "30", attendu: "Plein tarif : 60 DH" }],
        exige: [{ motif: "\\bor\\b", message: "Utilise or pour réunir les deux cas." }],
        indices: ["if age < 12 or age >= 65:", "Attention : 12 ans paie plein tarif, 65 ans paie le tarif réduit."] }
    ],
    t7: [
      { id: "t7e4", titre: "Diviser par 2",
        enonce: "Demande un nombre entier. Tant qu'il est plus grand que 1, on le divise par 2 (division entière <code>//</code>). Affiche combien de divisions on a faites. Exemple : 8 → 4 → 2 → 1, donc <code>3</code>.",
        depart: "", tests: [{ entree: "8", attendu: "3" }, { entree: "1", attendu: "0" }, { entree: "100", attendu: "6" }, { entree: "2", attendu: "1" }],
        exige: pourWhile, indices: ["Il faut un compteur : c = 0 avant la boucle.", "while n > 1: puis n = n // 2 et c = c + 1"] },
      { id: "t7e5", titre: "Le total des courses",
        enonce: "On tape des prix, un par un. Quand on tape <code>0</code>, c'est fini : affiche le total. Exemple : 12, 8.5 puis 0 → <code>20.5</code>.",
        depart: "total = 0\n", tests: [{ entree: "12\n8.5\n0", attendu: "20.5" }, { entree: "0", attendu: "0" }, { entree: "5\n5\n5\n0", attendu: "15.0" }],
        exige: pourWhile, indices: ["Lis un premier prix AVANT la boucle : prix = float(input())", "while prix != 0: ajoute le prix au total, puis lis le prix suivant."] }
    ],
    t8: [
      { id: "t8e4", titre: "Le carré",
        enonce: "Écris une fonction <code>carre(n)</code> qui renvoie n × n.",
        depart: "def carre(n):\n    ", tests: [{ ajout: "print(carre(3))", attendu: "9" }, { ajout: "print(carre(-4))", attendu: "16" }, { ajout: "print(carre(0))", attendu: "0" }],
        exige: [{ motif: "def\\s+carre\\s*\\(", message: "La fonction doit s'appeler carre." }, { motif: "\\breturn\\b", message: "Utilise return." }], indices: ["return n * n"] },
      { id: "t8e5", titre: "Le prix en solde",
        enonce: "Écris une fonction <code>solde(prix, remise)</code> qui renvoie le prix après une remise en pourcentage. Exemple : <code>solde(200, 25)</code> renvoie <code>150.0</code>.",
        depart: "def solde(prix, remise):\n    ", tests: [{ ajout: "print(solde(200, 25))", attendu: "150.0" }, { ajout: "print(solde(80, 50))", attendu: "40.0" }, { ajout: "print(solde(99, 0))", attendu: "99.0" }],
        exige: [{ motif: "def\\s+solde\\s*\\(", message: "La fonction doit s'appeler solde." }, { motif: "\\breturn\\b", message: "Utilise return." }],
        indices: ["La remise vaut prix * remise / 100.", "return prix - prix * remise / 100"] }
    ]
  };
  (window.PARCOURS_ENTRAINEMENT || []).forEach(m => (PLUS[m.id] || []).forEach(e => { if (!m.exercices.some(x => x.id === e.id)) m.exercices.push(e); }));
})();

/* Entraînement algorigrammes — exercices supplémentaires (20), ajoutés à la suite de chaque notion. PAS NOTÉ. */
(function () {
  const DEBUT = { t: "debut" }, FIN = { t: "fin" };
  const act = (txt, trou) => ({ t: "action", txt, trou });
  const es = (txt, trou) => ({ t: "es", txt, trou });
  const si = (txt, oui, non, trou) => ({ t: "si", txt, oui, non, trou });
  const tantque = (txt, corps, trou) => ({ t: "tantque", txt, corps, trou });
  const PLUS = {
    u1: [
      { id: "u1e3", titre: "Début et fin", type: "qcm", enonce: "<p>Quel symbole utilise-t-on pour <strong>Début</strong> et <strong>Fin</strong> ?</p>",
        choix: ["L'ovale", "Le losange", "Le rectangle", "Le parallélogramme"], bonne: 0, explication: "Début et Fin se dessinent dans un ovale (symbole terminal).", indices: ["C'est une forme arrondie."] },
      { id: "u1e4", titre: "Que calcule-t-il ?", type: "qcm", schema: [DEBUT, es("Lire a"), es("Lire b"), act("s ← a + b"), act("m ← s ÷ 2"), es("Afficher m"), FIN],
        enonce: "<p>Que fait cet algorigramme ?</p>", choix: ["Il affiche la moyenne de deux nombres", "Il affiche la somme de deux nombres", "Il affiche le plus grand des deux nombres", "Il affiche a puis b"], bonne: 0,
        explication: "On additionne a et b, puis on divise par 2 : c'est la moyenne.", indices: ["Que vaut s ? Que fait-on ensuite de s ?"] },
      { id: "u1e5", titre: "Combien de tests ?", type: "suivre", schema: [DEBUT, es("Lire t"), si("t > 25 ?", [es("Afficher \"chaud\"")], [si("t < 10 ?", [es("Afficher \"froid\"")], [es("Afficher \"doux\"")])]), FIN],
        enonce: "<p>Compte les losanges de cet algorigramme.</p>", question: "Combien y a-t-il de tests ? Réponds par un nombre.", attendu: "2",
        explication: "Il y a deux losanges : t > 25 ? et t < 10 ?. Le deuxième n'est lu que si le premier répond non.", indices: ["Un test = un losange."] },
      { id: "u1e6", titre: "Algorigramme → Python", type: "qcm", schema: [DEBUT, es("Lire n"), act("n ← n × 3"), es("Afficher n"), FIN],
        enonce: "<p>Quel programme Python correspond à cet algorigramme ?</p>",
        choix: ["n = int(input())\nn = n * 3\nprint(n)", "n = int(input())\nprint(n)\nn = n * 3", "n = 3\nprint(n * 3)", "print(int(input()))"], bonne: 0,
        explication: "Lire n → n = int(input()) ; n ← n × 3 → n = n * 3 ; Afficher n → print(n), dans le même ordre.", indices: ["Chaque case donne une ligne Python, dans l'ordre des flèches."] }
    ],
    u2: [
      { id: "u2e3", titre: "L'échange", type: "suivre", schema: [DEBUT, act("a ← 4"), act("b ← 9"), act("c ← a"), act("a ← b"), act("b ← c"), es("Afficher a"), FIN],
        enonce: "<p>Fais tourner l'algorigramme à la main en notant a, b et c.</p>", question: "Qu'affiche-t-il ?", attendu: "9",
        explication: "c garde 4, a prend 9, b prend 4 : on a échangé a et b. On affiche a = 9.", indices: ["Fais un tableau a | b | c.", "Après c ← a, c vaut 4."] },
      { id: "u2e4", titre: "Le temps de trajet", type: "suivre", schema: [DEBUT, es("Lire minutes"), act("h ← quotient de minutes ÷ 60"), act("m ← reste de minutes ÷ 60"), es("Afficher h, m"), FIN],
        enonce: "<p>L'utilisateur tape <strong>150</strong>.</p>", question: "Qu'affiche l'algorigramme ? (deux nombres séparés par une virgule)", attendu: "2, 30", accepte: ["2,30", "2 30", "2 , 30"],
        explication: "150 = 2 × 60 + 30 : quotient 2, reste 30.", indices: ["Combien de fois 60 dans 150 ?", "Que reste-t-il ?"] },
      { id: "u2e5", titre: "Compléter : la moyenne", type: "completer", schema: [DEBUT, es("Lire n1"), es("Lire n2"), es("Lire n3"), act("", "A"), es("Afficher moy"), FIN],
        enonce: "<p>L'algorigramme doit afficher la moyenne de trois notes. Que faut-il écrire en <strong>A</strong> ?</p>",
        trous: { A: { choix: ["moy ← (n1 + n2 + n3) ÷ 3", "moy ← n1 + n2 + n3 ÷ 3", "moy ← (n1 + n2 + n3) ÷ 2", "Afficher n1 + n2 + n3"], bonne: 0 } },
        explication: "Il faut des parenthèses : on additionne d'abord les trois notes, puis on divise par 3.", indices: ["Sans parenthèses, la division se fait avant l'addition."] },
      { id: "u2e6", titre: "Dans le bon ordre", type: "completer", schema: [DEBUT, es("", "A"), act("", "B"), es("Afficher aire"), FIN],
        enonce: "<p>L'algorigramme doit afficher l'aire d'un carré dont on tape le côté. Complète les cases <strong>A</strong> et <strong>B</strong>.</p>",
        trous: { A: { choix: ["Lire cote", "Afficher cote", "aire ← cote × cote"], bonne: 0 }, B: { choix: ["aire ← cote × cote", "Lire cote", "aire ← cote × 4"], bonne: 0 } },
        explication: "On lit d'abord le côté, puis on calcule l'aire (côté × côté), enfin on l'affiche.", indices: ["On ne peut pas calculer avant d'avoir lu.", "Aire d'un carré = côté × côté (4 × côté, c'est le périmètre)."] }
    ],
    u3: [
      { id: "u3e3", titre: "La note", type: "suivre", schema: [DEBUT, es("Lire note"), si("note ≥ 10 ?", [es("Afficher \"Admis\"")], [es("Afficher \"Refusé\"")]), FIN],
        enonce: "<p>L'utilisateur tape <strong>10</strong>.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "Admis", accepte: ["\"Admis\""],
        explication: "≥ veut dire « plus grand ou égal » : 10 ≥ 10 est vrai, branche oui.", indices: ["10 est-il plus grand OU ÉGAL à 10 ?"] },
      { id: "u3e4", titre: "Trois cas", type: "suivre", schema: [DEBUT, es("Lire t"), si("t > 25 ?", [es("Afficher \"chaud\"")], [si("t < 10 ?", [es("Afficher \"froid\"")], [es("Afficher \"doux\"")])]), FIN],
        enonce: "<p>Le capteur mesure <strong>10</strong> °C.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "doux", accepte: ["\"doux\""],
        explication: "10 > 25 est faux, puis 10 < 10 est faux : on arrive à « doux ».", indices: ["Réponds aux deux tests l'un après l'autre."] },
      { id: "u3e5", titre: "Compléter : le parc d'attractions", type: "completer", schema: [DEBUT, es("Lire taille"), si("", [es("Afficher \"Accès autorisé\"")], [es("Afficher \"Accès refusé\"")], "A"), FIN],
        enonce: "<p>Il faut mesurer <strong>au moins 1,40 m</strong> pour monter. Que faut-il écrire dans le losange <strong>A</strong> ?</p>",
        trous: { A: { choix: ["taille ≥ 1,40 ?", "taille > 1,40 ?", "taille < 1,40 ?", "taille = 1,40 ?"], bonne: 0 } },
        explication: "« Au moins 1,40 m » : 1,40 m pile est accepté, donc ≥.", indices: ["Quelqu'un qui mesure exactement 1,40 m peut-il monter ?"] },
      { id: "u3e6", titre: "Algorigramme → Python", type: "qcm", schema: [DEBUT, es("Lire age"), si("age ≥ 18 ?", [es("Afficher \"majeur\"")], [es("Afficher \"mineur\"")]), FIN],
        enonce: "<p>Quel programme Python correspond à cet algorigramme ?</p>",
        choix: ["age = int(input())\nif age >= 18:\n    print(\"majeur\")\nelse:\n    print(\"mineur\")", "age = int(input())\nif age > 18:\n    print(\"majeur\")\nelse:\n    print(\"mineur\")", "age = int(input())\nif age >= 18:\n    print(\"majeur\")\nprint(\"mineur\")", "age = input()\nif age = 18:\n    print(\"majeur\")"], bonne: 0,
        explication: "≥ s'écrit >= ; la branche non devient else. Sans else, « mineur » s'afficherait toujours.", indices: ["Comment écrit-on ≥ en Python ?", "Que devient la branche non ?"] }
    ],
    u4: [
      { id: "u4e3", titre: "La somme", type: "suivre", schema: [DEBUT, act("s ← 0"), act("i ← 1"), tantque("i ≤ 4 ?", [act("s ← s + i"), act("i ← i + 1")]), es("Afficher s"), FIN],
        enonce: "<p>Fais tourner la boucle à la main en notant i et s à chaque tour.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "10",
        explication: "s = 0 + 1 + 2 + 3 + 4 = 10. Quand i vaut 5, le test est faux.", indices: ["Tableau i | s.", "Tour 1 : s = 1, tour 2 : s = 3…"] },
      { id: "u4e4", titre: "Combien de tours ?", type: "suivre", schema: [DEBUT, act("x ← 1"), act("tours ← 0"), tantque("x < 100 ?", [act("x ← x × 3"), act("tours ← tours + 1")]), es("Afficher tours"), FIN],
        enonce: "<p>x est multiplié par 3 à chaque tour.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "5",
        explication: "x vaut 1, 3, 9, 27, 81, puis 243 : 5 tours.", indices: ["Écris les valeurs de x : 1, 3, 9…", "81 < 100 est encore vrai."] },
      { id: "u4e5", titre: "Réparer la boucle sans fin", type: "completer", schema: [DEBUT, act("n ← 5"), tantque("n > 0 ?", [es("Afficher n"), act("", "A")]), es("Afficher \"Partez !\""), FIN],
        enonce: "<p>Ce compte à rebours ne s'arrête jamais. Que faut-il écrire en <strong>A</strong> pour afficher 5, 4, 3, 2, 1 puis « Partez ! » ?</p>",
        trous: { A: { choix: ["n ← n − 1", "n ← n + 1", "n ← 0", "Afficher n − 1"], bonne: 0 } },
        explication: "n doit diminuer à chaque tour pour que n > 0 devienne faux.", indices: ["Qu'est-ce qui doit changer pour que la boucle s'arrête ?"] },
      { id: "u4e6", titre: "Algorigramme → Python", type: "qcm", schema: [DEBUT, act("i ← 0"), tantque("i < 3 ?", [es("Afficher i"), act("i ← i + 1")]), FIN],
        enonce: "<p>Quel programme Python correspond à cet algorigramme ?</p>",
        choix: ["i = 0\nwhile i < 3:\n    print(i)\n    i = i + 1", "i = 0\nwhile i < 3:\n    print(i)\ni = i + 1", "i = 0\nif i < 3:\n    print(i)\n    i = i + 1", "while i < 3:\n    print(i)"], bonne: 0,
        explication: "« Tant que » devient while ; les deux cases de la boucle sont décalées sous le while.", indices: ["Une boucle tant que = while.", "Que se passe-t-il si i = i + 1 n'est pas décalé ?"] }
    ],
    u5: [
      { id: "u5e3", titre: "Le thermostat", type: "suivre", schema: [DEBUT, es("Lire temp"), si("temp < 19 ?", [es("Afficher \"Chauffage ON\"")], [es("Afficher \"Chauffage OFF\"")]), FIN],
        enonce: "<p>Le capteur mesure <strong>19</strong> °C.</p>", question: "Qu'affiche le système ?", attendu: "Chauffage OFF", accepte: ["\"Chauffage OFF\"", "chauffage off", "OFF"],
        explication: "19 < 19 est faux : branche non.", indices: ["19 est-il STRICTEMENT plus petit que 19 ?"] },
      { id: "u5e4", titre: "La lampe automatique", type: "qcm", schema: [DEBUT, es("Lire présence"), es("Lire luminosité"), si("présence ou luminosité < 20 ?", [es("Allumer lampe")], [es("Éteindre lampe")]), FIN],
        enonce: "<p>Il n'y a <strong>personne</strong>, mais il fait <strong>nuit</strong> (luminosité 5). Que fait la lampe ?</p>",
        choix: ["Elle s'allume", "Elle s'éteint", "Elle clignote", "Rien"], bonne: 0, explication: "Avec « ou », une seule condition vraie suffit : 5 < 20 est vrai.", indices: ["« ou » : il suffit qu'une des deux soit vraie."] },
      { id: "u5e5", titre: "Le parking", type: "suivre", schema: [DEBUT, act("places ← 3"), tantque("places > 0 ?", [es("Lire voiture"), act("places ← places − 1")]), es("Afficher \"COMPLET\""), FIN],
        enonce: "<p>Le parking a 3 places. Une voiture entre à chaque tour de boucle.</p>", question: "Combien de voitures entrent avant que « COMPLET » s'affiche ? Réponds par un nombre.", attendu: "3",
        explication: "places vaut 3, 2, 1 : trois voitures entrent. À 0, on sort et on affiche COMPLET.", indices: ["Note la valeur de places à chaque tour."] },
      { id: "u5e6", titre: "Compléter : la serre", type: "completer", schema: [DEBUT, es("Lire temp"), si("temp > 30 ?", [es("", "A")], [es("Fermer la fenêtre")]), FIN],
        enonce: "<p>Dans une serre connectée, s'il fait plus de 30 °C, il faut aérer. Que faut-il écrire en <strong>A</strong> ?</p>",
        trous: { A: { choix: ["Ouvrir la fenêtre", "Fermer la fenêtre", "Lire temp", "Allumer le chauffage"], bonne: 0 } },
        explication: "Branche oui = il fait trop chaud : on ouvre la fenêtre pour aérer.", indices: ["La branche oui correspond à « il fait plus de 30 °C »."] }
    ]
  };
  (window.PARCOURS_ENTRAINEMENT_ALGO || []).forEach(m => (PLUS[m.id] || []).forEach(e => { if (!m.exercices.some(x => x.id === e.id)) m.exercices.push(e); }));
})();

/* Révisions à la maison — 50 exercices d'algorigrammes supplémentaires (10 par notion), générés avec leurs réponses calculées. PAS NOTÉ. */
(function () {
  const PLUS = {"u1": [{"titre": "Quel symbole ?", "type": "qcm", "enonce": "<p>Dans notre convention, dans quel symbole écrit-on <code>Lire temperature</code> ?</p>", "choix": ["Un rectangle", "Un losange", "Un ovale", "Une flèche"], "bonne": 0, "explication": "Lire est une entrée : rectangle (notre convention).", "indices": ["Ovale = début / fin, losange = test, rectangle = tout le reste."], "id": "u1e7"}, {"titre": "Quel symbole ?", "type": "qcm", "enonce": "<p>Dans notre convention, dans quel symbole écrit-on <code>note ≥ 10 ?</code> ?</p>", "choix": ["Un losange", "Un rectangle", "Un ovale", "Une flèche"], "bonne": 0, "explication": "Une question oui / non : losange.", "indices": ["Ovale = début / fin, losange = test, rectangle = tout le reste."], "id": "u1e8"}, {"titre": "Quel symbole ?", "type": "qcm", "enonce": "<p>Dans notre convention, dans quel symbole écrit-on <code>Début</code> ?</p>", "choix": ["Un ovale", "Un rectangle", "Un losange", "Une flèche"], "bonne": 0, "explication": "Début et Fin : ovale.", "indices": ["Ovale = début / fin, losange = test, rectangle = tout le reste."], "id": "u1e9"}, {"titre": "Quel symbole ?", "type": "qcm", "enonce": "<p>Dans notre convention, dans quel symbole écrit-on <code>Afficher \"Bravo\"</code> ?</p>", "choix": ["Un rectangle", "Un losange", "Un ovale", "Une flèche"], "bonne": 0, "explication": "Afficher est une sortie : rectangle.", "indices": ["Ovale = début / fin, losange = test, rectangle = tout le reste."], "id": "u1e10"}, {"titre": "Quel symbole ?", "type": "qcm", "enonce": "<p>Dans notre convention, dans quel symbole écrit-on <code>compteur ← compteur + 1</code> ?</p>", "choix": ["Un rectangle", "Un losange", "Un ovale", "Une flèche"], "bonne": 0, "explication": "Un calcul : rectangle.", "indices": ["Ovale = début / fin, losange = test, rectangle = tout le reste."], "id": "u1e11"}, {"titre": "Que fait-il ? (1)", "type": "qcm", "enonce": "<p>Que fait cet algorigramme ?</p>", "choix": ["Il affiche le plus petit des deux nombres", "Il affiche le plus grand des deux nombres", "Il affiche toujours a", "Il affiche la différence a − b"], "bonne": 0, "explication": "Si a est plus petit, on affiche a ; sinon b : c'est le minimum.", "indices": ["Essaie avec une ou deux valeurs simples."], "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire a"}, {"t": "es", "txt": "Lire b"}, {"t": "si", "txt": "a < b ?", "oui": [{"t": "es", "txt": "Afficher a"}], "non": [{"t": "es", "txt": "Afficher b"}]}, {"t": "fin"}], "id": "u1e12"}, {"titre": "Que fait-il ? (2)", "type": "qcm", "enonce": "<p>Que fait cet algorigramme ?</p>", "choix": ["Il affiche le carré du nombre tapé", "Il affiche le double du nombre tapé", "Il affiche le nombre tapé", "Il affiche n puis n × n"], "bonne": 0, "explication": "n × n est le carré de n.", "indices": ["Essaie avec une ou deux valeurs simples."], "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire n"}, {"t": "action", "txt": "n ← n × n"}, {"t": "es", "txt": "Afficher n"}, {"t": "fin"}], "id": "u1e13"}, {"titre": "Que fait-il ? (3)", "type": "qcm", "enonce": "<p>Que fait cet algorigramme ?</p>", "choix": ["Il affiche le nombre sans son signe moins", "Il affiche toujours un nombre négatif", "Il affiche 0 si le nombre est négatif", "Il n'affiche rien si le nombre est positif"], "bonne": 0, "explication": "Si n est négatif, on prend son opposé : on affiche toujours un nombre positif (la valeur absolue).", "indices": ["Essaie avec une ou deux valeurs simples."], "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire n"}, {"t": "si", "txt": "n < 0 ?", "oui": [{"t": "action", "txt": "n ← −n"}], "non": []}, {"t": "es", "txt": "Afficher n"}, {"t": "fin"}], "id": "u1e14"}, {"titre": "Que fait-il ? (4)", "type": "qcm", "enonce": "<p>Que fait cet algorigramme ?</p>", "choix": ["Il affiche la table de 7", "Il affiche les nombres de 1 à 7", "Il affiche 7 dix fois", "Il affiche 70 une seule fois"], "bonne": 0, "explication": "i va de 1 à 10, et on affiche i × 7 à chaque tour : 7, 14, 21… 70.", "indices": ["Essaie avec une ou deux valeurs simples."], "schema": [{"t": "debut"}, {"t": "action", "txt": "i ← 1"}, {"t": "tantque", "txt": "i ≤ 10 ?", "corps": [{"t": "es", "txt": "Afficher i × 7"}, {"t": "action", "txt": "i ← i + 1"}]}, {"t": "fin"}], "id": "u1e15"}, {"titre": "Que fait-il ? (5)", "type": "qcm", "enonce": "<p>Que fait cet algorigramme ?</p>", "choix": ["Il enlève 10 au prix seulement s'il dépasse 100", "Il enlève toujours 10 au prix", "Il affiche 100 si le prix est trop grand", "Il ajoute 10 au prix s'il dépasse 100"], "bonne": 0, "explication": "La branche oui enlève 10 ; la branche non ne fait rien.", "indices": ["Essaie avec une ou deux valeurs simples."], "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire prix"}, {"t": "si", "txt": "prix > 100 ?", "oui": [{"t": "action", "txt": "prix ← prix − 10"}], "non": []}, {"t": "es", "txt": "Afficher prix"}, {"t": "fin"}], "id": "u1e16"}], "u2": [{"titre": "Séquence 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "a ← 7"}, {"t": "action", "txt": "a ← a + 5"}, {"t": "action", "txt": "a ← a × 2"}, {"t": "es", "txt": "Afficher a"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "24", "accepte": ["24.0"], "explication": "a vaut successivement 7, 12, 24.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e7"}, {"titre": "Séquence 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "b ← 30"}, {"t": "action", "txt": "b ← b − 12"}, {"t": "action", "txt": "b ← b ÷ 3"}, {"t": "es", "txt": "Afficher b"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "6", "accepte": ["6.0"], "explication": "b vaut successivement 30, 18, 6.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e8"}, {"titre": "Séquence 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "c ← 4"}, {"t": "action", "txt": "c ← c × 4"}, {"t": "action", "txt": "c ← c − 6"}, {"t": "es", "txt": "Afficher c"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "10", "accepte": ["10.0"], "explication": "c vaut successivement 4, 16, 10.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e9"}, {"titre": "Séquence 4", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "d ← 9"}, {"t": "action", "txt": "d ← d + 1"}, {"t": "action", "txt": "d ← d × 10"}, {"t": "es", "txt": "Afficher d"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "100", "accepte": ["100.0"], "explication": "d vaut successivement 9, 10, 100.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e10"}, {"titre": "Séquence 5", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "e ← 50"}, {"t": "action", "txt": "e ← e ÷ 2"}, {"t": "action", "txt": "e ← e + 15"}, {"t": "es", "txt": "Afficher e"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "40", "accepte": ["40.0"], "explication": "e vaut successivement 50, 25, 40.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e11"}, {"titre": "Séquence 6", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "f ← 3"}, {"t": "action", "txt": "f ← f × 3"}, {"t": "action", "txt": "f ← f × 3"}, {"t": "es", "txt": "Afficher f"}, {"t": "fin"}], "enonce": "<p>Fais tourner l'algorigramme à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "27", "accepte": ["27.0"], "explication": "f vaut successivement 3, 9, 27.", "indices": ["Note la valeur après chaque rectangle."], "id": "u2e12"}, {"titre": "Avec une entrée 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire n"}, {"t": "action", "txt": "n ← 3 × n + 1"}, {"t": "es", "txt": "Afficher n"}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>5</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "16", "accepte": ["16.0"], "explication": "3 × 5 + 1 = 16.", "indices": ["Remplace la variable par la valeur tapée."], "id": "u2e13"}, {"titre": "Avec une entrée 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire km"}, {"t": "action", "txt": "m ← km × 1000"}, {"t": "es", "txt": "Afficher m"}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>2,5</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "2500", "accepte": ["2500.0"], "explication": "2,5 × 1000 = 2500.", "indices": ["Remplace la variable par la valeur tapée."], "id": "u2e14"}, {"titre": "Avec une entrée 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire age"}, {"t": "action", "txt": "mois ← age × 12"}, {"t": "es", "txt": "Afficher mois"}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>16</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "192", "accepte": ["192.0"], "explication": "16 × 12 = 192.", "indices": ["Remplace la variable par la valeur tapée."], "id": "u2e15"}, {"titre": "Avec une entrée 4", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire prix"}, {"t": "action", "txt": "prix ← prix × 2 − 5"}, {"t": "es", "txt": "Afficher prix"}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>20</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "35", "accepte": ["35.0"], "explication": "20 × 2 − 5 = 35.", "indices": ["Remplace la variable par la valeur tapée."], "id": "u2e16"}], "u3": [{"titre": "Le cas limite 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire note"}, {"t": "si", "txt": "note ≥ 12 ?", "oui": [{"t": "es", "txt": "Afficher \"mention\""}], "non": [{"t": "es", "txt": "Afficher \"pas de mention\""}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>12</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "mention", "accepte": ["\"mention\""], "explication": "12 ≥ 12 est vrai : branche oui.", "indices": ["< et > : strictement. ≤ et ≥ : « ou égal »."], "id": "u3e7"}, {"titre": "Le cas limite 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire t"}, {"t": "si", "txt": "t < 0 ?", "oui": [{"t": "es", "txt": "Afficher \"gel\""}], "non": [{"t": "es", "txt": "Afficher \"pas de gel\""}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>0</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "pas de gel", "accepte": ["\"pas de gel\""], "explication": "0 < 0 est faux : branche non.", "indices": ["< et > : strictement. ≤ et ≥ : « ou égal »."], "id": "u3e8"}, {"titre": "Le cas limite 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire age"}, {"t": "si", "txt": "age > 65 ?", "oui": [{"t": "es", "txt": "Afficher \"senior\""}], "non": [{"t": "es", "txt": "Afficher \"adulte\""}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>65</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "adulte", "accepte": ["\"adulte\""], "explication": "65 > 65 est faux : branche non.", "indices": ["< et > : strictement. ≤ et ≥ : « ou égal »."], "id": "u3e9"}, {"titre": "Le cas limite 4", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire score"}, {"t": "si", "txt": "score ≤ 50 ?", "oui": [{"t": "es", "txt": "Afficher \"perdu\""}], "non": [{"t": "es", "txt": "Afficher \"gagné\""}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>50</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "perdu", "accepte": ["\"perdu\""], "explication": "50 ≤ 50 est vrai : branche oui.", "indices": ["< et > : strictement. ≤ et ≥ : « ou égal »."], "id": "u3e10"}, {"titre": "Le cas limite 5", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire taille"}, {"t": "si", "txt": "taille ≥ 140 ?", "oui": [{"t": "es", "txt": "Afficher \"accès\""}], "non": [{"t": "es", "txt": "Afficher \"refusé\""}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>139</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "refusé", "accepte": ["\"refusé\""], "explication": "139 ≥ 140 est faux : branche non.", "indices": ["< et > : strictement. ≤ et ≥ : « ou égal »."], "id": "u3e11"}, {"titre": "Tests emboîtés 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire age"}, {"t": "si", "txt": "age < 12 ?", "oui": [{"t": "es", "txt": "Afficher \"enfant\""}], "non": [{"t": "si", "txt": "age < 18 ?", "oui": [{"t": "es", "txt": "Afficher \"ado\""}], "non": [{"t": "es", "txt": "Afficher \"adulte\""}]}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>5</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "enfant", "accepte": ["\"enfant\""], "explication": "On répond aux losanges dans l'ordre : on arrive à « enfant ».", "indices": ["Réponds au premier losange, puis éventuellement au second."], "id": "u3e12"}, {"titre": "Tests emboîtés 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire age"}, {"t": "si", "txt": "age < 12 ?", "oui": [{"t": "es", "txt": "Afficher \"enfant\""}], "non": [{"t": "si", "txt": "age < 18 ?", "oui": [{"t": "es", "txt": "Afficher \"ado\""}], "non": [{"t": "es", "txt": "Afficher \"adulte\""}]}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>18</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "adulte", "accepte": ["\"adulte\""], "explication": "On répond aux losanges dans l'ordre : on arrive à « adulte ».", "indices": ["Réponds au premier losange, puis éventuellement au second."], "id": "u3e13"}, {"titre": "Tests emboîtés 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire age"}, {"t": "si", "txt": "age < 12 ?", "oui": [{"t": "es", "txt": "Afficher \"enfant\""}], "non": [{"t": "si", "txt": "age < 18 ?", "oui": [{"t": "es", "txt": "Afficher \"ado\""}], "non": [{"t": "es", "txt": "Afficher \"adulte\""}]}]}, {"t": "fin"}], "enonce": "<p>L'utilisateur tape <strong>30</strong>.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "adulte", "accepte": ["\"adulte\""], "explication": "On répond aux losanges dans l'ordre : on arrive à « adulte ».", "indices": ["Réponds au premier losange, puis éventuellement au second."], "id": "u3e14"}, {"titre": "Compléter : le test", "type": "completer", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire vitesse"}, {"t": "si", "txt": "", "oui": [{"t": "es", "txt": "Afficher \"trop vite\""}], "non": [{"t": "es", "txt": "Afficher \"ok\""}], "trou": "A"}, {"t": "fin"}], "enonce": "<p>On affiche « trop vite » <strong>au-dessus de 90</strong> (90 est autorisé). Que faut-il écrire en <strong>A</strong> ?</p>", "trous": {"A": {"choix": ["vitesse > 90 ?", "vitesse ≥ 90 ?", "vitesse < 90 ?", "vitesse ← 90"], "bonne": 0}}, "explication": "90 est autorisé : il faut strictement plus que 90.", "indices": ["90 km/h, est-ce trop vite ?"], "id": "u3e15"}, {"titre": "Compléter : les branches", "type": "completer", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire n"}, {"t": "si", "txt": "n ≥ 0 ?", "oui": [{"t": "es", "txt": "", "trou": "A"}], "non": [{"t": "es", "txt": "", "trou": "B"}]}, {"t": "fin"}], "enonce": "<p>L'algorigramme doit afficher « positif » ou « négatif ». Complète <strong>A</strong> et <strong>B</strong>.</p>", "trous": {"A": {"choix": ["Afficher \"positif\"", "Afficher \"négatif\"", "Lire n"], "bonne": 0}, "B": {"choix": ["Afficher \"négatif\"", "Afficher \"positif\"", "n ← 0"], "bonne": 0}}, "explication": "Branche oui (n ≥ 0) : positif ; branche non : négatif.", "indices": ["Que veut dire « oui » à la question n ≥ 0 ?"], "id": "u3e16"}], "u4": [{"titre": "Combien de tours ? 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "i ← 0"}, {"t": "tantque", "txt": "i < 6 ?", "corps": [{"t": "es", "txt": "Afficher \"Bip\""}, {"t": "action", "txt": "i ← i + 1"}]}, {"t": "fin"}], "enonce": "<p>Fais un tableau de suivi de i.</p>", "question": "Combien de fois « Bip » est-il affiché ? (un nombre)", "attendu": "6", "accepte": [], "explication": "Le test est vrai 6 fois avant de devenir faux.", "indices": ["Note i et la réponse au test à chaque passage."], "id": "u4e7"}, {"titre": "Combien de tours ? 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "i ← 1"}, {"t": "tantque", "txt": "i ≤ 7 ?", "corps": [{"t": "es", "txt": "Afficher \"Bip\""}, {"t": "action", "txt": "i ← i + 2"}]}, {"t": "fin"}], "enonce": "<p>Fais un tableau de suivi de i.</p>", "question": "Combien de fois « Bip » est-il affiché ? (un nombre)", "attendu": "4", "accepte": [], "explication": "Le test est vrai 4 fois avant de devenir faux.", "indices": ["Note i et la réponse au test à chaque passage."], "id": "u4e8"}, {"titre": "Combien de tours ? 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "i ← 10"}, {"t": "tantque", "txt": "i > 0 ?", "corps": [{"t": "es", "txt": "Afficher \"Bip\""}, {"t": "action", "txt": "i ← i − 3"}]}, {"t": "fin"}], "enonce": "<p>Fais un tableau de suivi de i.</p>", "question": "Combien de fois « Bip » est-il affiché ? (un nombre)", "attendu": "4", "accepte": [], "explication": "Le test est vrai 4 fois avant de devenir faux.", "indices": ["Note i et la réponse au test à chaque passage."], "id": "u4e9"}, {"titre": "Valeur finale 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "x ← 1"}, {"t": "tantque", "txt": "x < 100 ?", "corps": [{"t": "action", "txt": "x ← x × 3"}]}, {"t": "es", "txt": "Afficher x"}, {"t": "fin"}], "enonce": "<p>Fais tourner la boucle à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "243", "accepte": ["243.0"], "explication": "Après 5 tours, x vaut 243 et le test devient faux.", "indices": ["Écris les valeurs de x une par une."], "id": "u4e10"}, {"titre": "Valeur finale 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "x ← 64"}, {"t": "tantque", "txt": "x > 5 ?", "corps": [{"t": "action", "txt": "x ← x ÷ 2"}]}, {"t": "es", "txt": "Afficher x"}, {"t": "fin"}], "enonce": "<p>Fais tourner la boucle à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "4", "accepte": ["4.0"], "explication": "Après 4 tours, x vaut 4 et le test devient faux.", "indices": ["Écris les valeurs de x une par une."], "id": "u4e11"}, {"titre": "Valeur finale 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "x ← 0"}, {"t": "tantque", "txt": "x < 20 ?", "corps": [{"t": "action", "txt": "x ← x + 7"}]}, {"t": "es", "txt": "Afficher x"}, {"t": "fin"}], "enonce": "<p>Fais tourner la boucle à la main.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "21", "accepte": ["21.0"], "explication": "Après 3 tours, x vaut 21 et le test devient faux.", "indices": ["Écris les valeurs de x une par une."], "id": "u4e12"}, {"titre": "La somme", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "s ← 0"}, {"t": "action", "txt": "i ← 2"}, {"t": "tantque", "txt": "i ≤ 8 ?", "corps": [{"t": "action", "txt": "s ← s + i"}, {"t": "action", "txt": "i ← i + 2"}]}, {"t": "es", "txt": "Afficher s"}, {"t": "fin"}], "enonce": "<p>Fais un tableau avec s et i.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "20", "accepte": [], "explication": "s = 2 + 4 + 6 + 8 = 20.", "indices": ["i augmente de 2 à chaque tour."], "id": "u4e13"}, {"titre": "Le compteur", "type": "suivre", "schema": [{"t": "debut"}, {"t": "action", "txt": "n ← 1"}, {"t": "action", "txt": "c ← 0"}, {"t": "tantque", "txt": "n < 50 ?", "corps": [{"t": "action", "txt": "n ← n × 2"}, {"t": "action", "txt": "c ← c + 1"}]}, {"t": "es", "txt": "Afficher c"}, {"t": "fin"}], "enonce": "<p>Suis n et c.</p>", "question": "Qu'affiche l'algorigramme ?", "attendu": "6", "accepte": [], "explication": "n vaut 1, 2, 4, 8, 16, 32, 64 : 6 tours.", "indices": ["32 < 50 est encore vrai."], "id": "u4e14"}, {"titre": "Compléter : de 0 à 20 de 5 en 5", "type": "completer", "schema": [{"t": "debut"}, {"t": "action", "txt": "i ← 0"}, {"t": "tantque", "txt": "", "corps": [{"t": "es", "txt": "Afficher i"}, {"t": "action", "txt": "", "trou": "B"}], "trou": "A"}, {"t": "fin"}], "enonce": "<p>L'algorigramme doit afficher 0, 5, 10, 15, 20. Complète <strong>A</strong> et <strong>B</strong>.</p>", "trous": {"A": {"choix": ["i ≤ 20 ?", "i < 20 ?", "i > 20 ?", "i = 20 ?"], "bonne": 0}, "B": {"choix": ["i ← i + 5", "i ← i + 1", "i ← 5", "i ← i × 5"], "bonne": 0}}, "explication": "Il faut afficher 20 : i ≤ 20 ; et i augmente de 5.", "indices": ["Le nombre 20 doit-il être affiché ?"], "id": "u4e15"}, {"titre": "Compléter : l'objectif", "type": "completer", "schema": [{"t": "debut"}, {"t": "action", "txt": "total ← 0"}, {"t": "action", "txt": "jours ← 0"}, {"t": "tantque", "txt": "", "corps": [{"t": "action", "txt": "total ← total + 4"}, {"t": "action", "txt": "jours ← jours + 1"}], "trou": "A"}, {"t": "es", "txt": "Afficher jours"}, {"t": "fin"}], "enonce": "<p>On lit 4 pages par jour. L'algorigramme doit afficher le nombre de jours pour lire <strong>au moins 30 pages</strong>. Que faut-il écrire en <strong>A</strong> ?</p>", "trous": {"A": {"choix": ["total < 30 ?", "total > 30 ?", "total = 30 ?", "jours < 30 ?"], "bonne": 0}}, "explication": "On continue tant que l'objectif n'est pas atteint : total < 30.", "indices": ["La boucle continue tant que l'objectif n'est PAS atteint."], "id": "u4e16"}], "u5": [{"titre": "La lampe de couloir 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire presence"}, {"t": "es", "txt": "Lire lumiere"}, {"t": "si", "txt": "presence = 1 ?", "oui": [{"t": "si", "txt": "lumiere < 30 ?", "oui": [{"t": "es", "txt": "Allumer la lampe"}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}, {"t": "fin"}], "enonce": "<p>Le détecteur renvoie <strong>presence = 1</strong> et le capteur mesure <strong>lumiere = 10</strong>.</p>", "question": "Que fait le système ?", "attendu": "Allumer la lampe", "accepte": ["allumer la lampe", "allumer", "allumée"], "explication": "Réponds au premier losange, puis au second.", "indices": ["presence = 1 : quelqu'un est là."], "id": "u5e7"}, {"titre": "La lampe de couloir 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire presence"}, {"t": "es", "txt": "Lire lumiere"}, {"t": "si", "txt": "presence = 1 ?", "oui": [{"t": "si", "txt": "lumiere < 30 ?", "oui": [{"t": "es", "txt": "Allumer la lampe"}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}, {"t": "fin"}], "enonce": "<p>Le détecteur renvoie <strong>presence = 1</strong> et le capteur mesure <strong>lumiere = 80</strong>.</p>", "question": "Que fait le système ?", "attendu": "Éteindre la lampe", "accepte": ["éteindre la lampe", "éteindre", "éteinte"], "explication": "Réponds au premier losange, puis au second.", "indices": ["presence = 1 : quelqu'un est là."], "id": "u5e8"}, {"titre": "La lampe de couloir 3", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire presence"}, {"t": "es", "txt": "Lire lumiere"}, {"t": "si", "txt": "presence = 1 ?", "oui": [{"t": "si", "txt": "lumiere < 30 ?", "oui": [{"t": "es", "txt": "Allumer la lampe"}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}], "non": [{"t": "es", "txt": "Éteindre la lampe"}]}, {"t": "fin"}], "enonce": "<p>Le détecteur renvoie <strong>presence = 0</strong> et le capteur mesure <strong>lumiere = 10</strong>.</p>", "question": "Que fait le système ?", "attendu": "Éteindre la lampe", "accepte": ["éteindre la lampe", "éteindre", "éteinte"], "explication": "Réponds au premier losange, puis au second.", "indices": ["presence = 1 : quelqu'un est là."], "id": "u5e9"}, {"titre": "L'arrosage 1", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire humidite"}, {"t": "tantque", "txt": "humidite < 60 ?", "corps": [{"t": "es", "txt": "Arroser 1 minute"}, {"t": "action", "txt": "humidite ← humidite + 15"}]}, {"t": "fin"}], "enonce": "<p>Le capteur mesure une humidité de <strong>20</strong> au départ.</p>", "question": "Combien de minutes le système arrose-t-il ? (un nombre)", "attendu": "3", "accepte": ["3 minutes"], "explication": "Il faut 3 tours pour atteindre 65, qui n'est plus < 60.", "indices": ["Note l'humidité à chaque tour."], "id": "u5e10"}, {"titre": "L'arrosage 2", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire humidite"}, {"t": "tantque", "txt": "humidite < 35 ?", "corps": [{"t": "es", "txt": "Arroser 1 minute"}, {"t": "action", "txt": "humidite ← humidite + 10"}]}, {"t": "fin"}], "enonce": "<p>Le capteur mesure une humidité de <strong>5</strong> au départ.</p>", "question": "Combien de minutes le système arrose-t-il ? (un nombre)", "attendu": "3", "accepte": ["3 minutes"], "explication": "Il faut 3 tours pour atteindre 35, qui n'est plus < 35.", "indices": ["Note l'humidité à chaque tour."], "id": "u5e11"}, {"titre": "Le thermostat", "type": "suivre", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire t"}, {"t": "si", "txt": "t < 19 ?", "oui": [{"t": "es", "txt": "Allumer le chauffage"}], "non": [{"t": "si", "txt": "t > 24 ?", "oui": [{"t": "es", "txt": "Allumer la climatisation"}], "non": [{"t": "es", "txt": "Ne rien faire"}]}]}, {"t": "fin"}], "enonce": "<p>Le capteur mesure <strong>24</strong> °C.</p>", "question": "Que fait le système ?", "attendu": "Ne rien faire", "accepte": ["ne rien faire", "rien"], "explication": "24 < 19 : non ; 24 > 24 : non.", "indices": ["24 > 24 est-il vrai ?"], "id": "u5e12"}, {"titre": "Compléter : la porte de garage", "type": "completer", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire distance"}, {"t": "si", "txt": "", "oui": [{"t": "es", "txt": "Arrêter la porte"}], "non": [{"t": "es", "txt": "Continuer à fermer"}], "trou": "A"}, {"t": "fin"}], "enonce": "<p>La porte doit s'arrêter si un obstacle est à <strong>moins de 30 cm</strong>. Que faut-il écrire en <strong>A</strong> ?</p>", "trous": {"A": {"choix": ["distance < 30 ?", "distance > 30 ?", "distance ← 30", "Lire distance"], "bonne": 0}}, "explication": "Obstacle proche = distance petite : distance < 30.", "indices": ["Un obstacle proche, c'est une petite ou une grande distance ?"], "id": "u5e13"}, {"titre": "Compléter : le ventilateur", "type": "completer", "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire t"}, {"t": "tantque", "txt": "t > 26 ?", "corps": [{"t": "es", "txt": "Faire tourner le ventilateur"}, {"t": "es", "txt": "", "trou": "A"}]}, {"t": "es", "txt": "Arrêter le ventilateur"}, {"t": "fin"}], "enonce": "<p>Le ventilateur doit tourner tant qu'il fait plus de 26 °C. Que faut-il écrire en <strong>A</strong> ?</p>", "trous": {"A": {"choix": ["Lire t", "t ← 26", "Afficher t", "Arrêter le ventilateur"], "bonne": 0}}, "explication": "Il faut relire la température à chaque tour, sinon la boucle ne s'arrête jamais.", "indices": ["Comment le système sait-il que la température a baissé ?"], "id": "u5e14"}, {"titre": "L'alarme incendie", "type": "qcm", "enonce": "<p>Que fait ce système quand la fumée dépasse 50 ?</p>", "choix": ["Il fait sonner la sirène et appelle les pompiers", "Il fait seulement sonner la sirène", "Il appelle seulement les pompiers", "Il ne fait rien"], "bonne": 0, "explication": "Dans la branche oui, il y a deux actions : sirène, puis appel.", "indices": ["Lis toutes les cases de la branche oui."], "schema": [{"t": "debut"}, {"t": "es", "txt": "Lire fumee"}, {"t": "si", "txt": "fumee > 50 ?", "oui": [{"t": "es", "txt": "Faire sonner la sirène"}, {"t": "es", "txt": "Appeler les pompiers"}], "non": [{"t": "es", "txt": "Attendre"}]}, {"t": "fin"}], "id": "u5e15"}, {"titre": "Le parking", "type": "qcm", "enonce": "<p>Combien de voitures peuvent entrer avant que « COMPLET » s'affiche ?</p>", "choix": ["4", "3", "5", "0"], "bonne": 0, "explication": "places vaut 4, 3, 2, 1 : 4 voitures, puis on affiche COMPLET.", "indices": ["Note la valeur de places à chaque tour."], "schema": [{"t": "debut"}, {"t": "action", "txt": "places ← 4"}, {"t": "tantque", "txt": "places > 0 ?", "corps": [{"t": "es", "txt": "Laisser entrer une voiture"}, {"t": "action", "txt": "places ← places − 1"}]}, {"t": "es", "txt": "Afficher \"COMPLET\""}, {"t": "fin"}], "id": "u5e16"}]};
  (window.PARCOURS_ENTRAINEMENT_ALGO || []).forEach(m => (PLUS[m.id] || []).forEach(e => { if (!m.exercices.some(x => x.id === e.id)) m.exercices.push(e); }));
})();

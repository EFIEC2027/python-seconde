/*
 * Parcours « Algorigrammes » — 5 notions × 4 exercices, puis 25 exercices de révision (g6).
 *
 * Les schémas sont décrits avec ces briques (dessinées automatiquement) :
 *   DEBUT, FIN              ovale de début / fin
 *   act("texte")            rectangle : action ou calcul (affectation avec ←)
 *   Convention de la classe : ovale = début/fin, losange = test, rectangle = tout le reste.
 *   es("texte")             rectangle : entrée (Lire) ou sortie (Afficher)
 *   si("test ?", [oui], [non])        losange avec deux branches
 *   tantque("test ?", [corps])        boucle : on répète le corps tant que le test est vrai
 *   Une brique avec trou: "A" est affichée comme une case à compléter.
 *
 * Types d'exercices :
 *   qcm       : choisir une réponse (choix, bonne = indice de la bonne réponse)
 *   suivre    : faire fonctionner l'algorigramme et donner le résultat (attendu, accepte)
 *   completer : choisir le contenu de chaque case vide (trous: { A: { choix, bonne } })
 *   python    : traduire en Python (possible, mais non utilisé : ce parcours vient avant Python)
 * Ne changez pas l'id d'un exercice déjà utilisé par les élèves.
 */
(function () {
  const DEBUT = { t: "debut" }, FIN = { t: "fin" };
  const act = (txt, trou) => ({ t: "action", txt, trou });
  const es = (txt, trou) => ({ t: "es", txt, trou });
  const si = (txt, oui, non, trou) => ({ t: "si", txt, oui, non, trou });
  const tantque = (txt, corps, trou) => ({ t: "tantque", txt, corps, trou });

  const SYMBOLES = [DEBUT, es("Lire n"), act("n ← n × 2"), si("n > 10 ?", [es("Afficher \"grand\"")], [es("Afficher \"petit\"")]), FIN];

  window.PARCOURS_ALGO = [
    {
      id: "g1", titre: "Lire un algorigramme", notion: "les symboles",
      cours: `
<p>Un <strong>algorigramme</strong> (ou organigramme) représente un algorithme par un dessin. On le lit <strong>de haut en bas, en suivant les flèches</strong>.</p>
<table class="ops">
<tr><td><span class="forme ovale">Début</span></td><td><strong>Ovale</strong> : le début et la fin.</td></tr>
<tr><td><span class="forme rect">n ← n × 2</span></td><td><strong>Rectangle</strong> : une action. Ce peut être un calcul, une entrée (<em>Lire</em> : l'utilisateur tape une valeur, un capteur mesure) ou une sortie (<em>Afficher</em>). La flèche <code>←</code> signifie « prend la valeur » : <code>n ← n × 2</code> veut dire « n prend la valeur n × 2 ».</td></tr>
<tr><td><span class="forme losange">n > 10 ?</span></td><td><strong>Losange</strong> : un test. La réponse est <em>oui</em> ou <em>non</em>, et on suit la flèche correspondante.</td></tr>
</table>`,
      schemaCours: SYMBOLES,
      exercices: [
        { id: "g1e1", titre: "Début et fin", type: "qcm",
          enonce: "<p>Quel symbole marque le <strong>début</strong> et la <strong>fin</strong> d'un algorigramme ?</p>",
          choix: ["L'ovale", "Le rectangle", "Le losange", "Le cercle"], bonne: 0,
          explication: "Un algorigramme commence et se termine toujours par un ovale.",
          indices: ["Regarde le haut et le bas du schéma du cours."] },
        { id: "g1e2", titre: "Le test", type: "qcm",
          enonce: "<p>Dans quel symbole écrit-on un <strong>test</strong>, c'est-à-dire une question à laquelle on répond oui ou non ?</p>",
          choix: ["Le losange", "Le rectangle", "L'ovale", "Le cercle"], bonne: 0,
          explication: "Le losange a deux sorties : une pour oui, une pour non.",
          indices: ["C'est le seul symbole d'où partent deux flèches."] },
        { id: "g1e3", titre: "Afficher, c'est quoi ?", type: "qcm",
          enonce: "<p>Dans quel symbole écrit-on <code>Afficher \"Bonjour\"</code> ?</p>",
          choix: ["Le rectangle (action)", "Le losange (test)", "L'ovale (début / fin)", "Le cercle"], bonne: 0,
          explication: "Afficher est une action : on l'écrit dans un rectangle, comme Lire et les calculs.",
          indices: ["Ce n'est ni un début, ni une fin, ni une question."] },
        { id: "g1e4", titre: "Que fait cet algorigramme ?", type: "qcm",
          schema: [DEBUT, es("Lire prix"), act("total ← prix × 3"), es("Afficher total"), FIN],
          enonce: "<p>Que fait cet algorigramme ?</p>",
          choix: ["Il affiche le prix de 3 articles identiques", "Il affiche le nombre 3", "Il demande 3 prix différents", "Il affiche le prix d'un seul article"], bonne: 0,
          explication: "Il lit un prix, le multiplie par 3 et affiche le total.",
          indices: ["Suis les flèches bloc par bloc : que devient prix ?"] }
      ]
    },
    {
      id: "g2", titre: "Séquence", notion: "variables et calculs",
      cours: `
<p>Une <strong>séquence</strong> est une suite de blocs exécutés <strong>dans l'ordre</strong>, un seul chemin du début à la fin.</p>
<p>Pour savoir ce que fait un algorigramme, on le <strong>fait tourner à la main</strong> : on note la valeur de chaque variable après chaque bloc.</p>
<table class="trace"><tr><th>Bloc</th><th>a</th><th>b</th></tr>
<tr><td>a ← 4</td><td>4</td><td></td></tr>
<tr><td>b ← a + 3</td><td>4</td><td>7</td></tr>
<tr><td>a ← b × 2</td><td>14</td><td>7</td></tr></table>
`,
      exercices: [
        { id: "g2e1", titre: "Faire tourner à la main", type: "suivre",
          schema: [DEBUT, act("a ← 4"), act("b ← a + 3"), act("a ← b × 2"), es("Afficher a"), FIN],
          enonce: "<p>Fais tourner l'algorigramme à la main.</p>", question: "Qu'affiche-t-il ?",
          attendu: "14", explication: "a vaut 4, puis b vaut 7, puis a vaut 7 × 2 = 14.",
          indices: ["Fais un tableau avec une colonne a et une colonne b.", "Attention : à la 3e ligne, a change de valeur."] },
        { id: "g2e2", titre: "Avec une entrée", type: "suivre",
          schema: [DEBUT, es("Lire n"), act("n ← n × 2"), act("n ← n + 1"), es("Afficher n"), FIN],
          enonce: "<p>L'utilisateur tape <strong>5</strong>.</p>", question: "Qu'affiche l'algorigramme ?",
          attendu: "11", explication: "n vaut 5, puis 10, puis 11.",
          indices: ["Au départ, n vaut 5.", "5 × 2 = 10, puis 10 + 1."] },
        { id: "g2e3", titre: "Compléter : minutes en secondes", type: "completer",
          schema: [DEBUT, es("Lire minutes"), act("", "A"), es("Afficher secondes"), FIN],
          enonce: "<p>Cet algorigramme doit convertir une durée en minutes en secondes. Que faut-il écrire dans la case <strong>A</strong> ?</p>",
          trous: { A: { choix: ["secondes ← minutes × 60", "secondes ← minutes + 60", "minutes ← secondes × 60", "Afficher minutes"], bonne: 0 } },
          explication: "Une minute = 60 secondes : secondes prend la valeur minutes × 60.",
          indices: ["La variable affichée à la fin doit avoir été calculée avant.", "Combien de secondes dans une minute ?"] },
        { id: "g2e4", titre: "Compléter : la moyenne", type: "completer",
          schema: [DEBUT, es("Lire note1"), es("Lire note2"), act("", "A"), es("", "B"), FIN],
          enonce: "<p>Cet algorigramme doit calculer puis afficher la moyenne de deux notes. Complète les cases <strong>A</strong> et <strong>B</strong>.</p>",
          trous: {
            A: { choix: ["moyenne ← (note1 + note2) ÷ 2", "moyenne ← note1 + note2", "Afficher moyenne", "Lire moyenne"], bonne: 0 },
            B: { choix: ["Afficher moyenne", "Lire moyenne", "moyenne ← 0", "Afficher note1"], bonne: 0 }
          },
          explication: "On calcule d'abord la moyenne (A), puis on l'affiche (B). Pour la moyenne de deux notes, on les additionne et on divise par 2.",
          indices: ["On ne peut afficher la moyenne qu'après l'avoir calculée.", "La moyenne de deux nombres : on les additionne, puis on divise par 2."] }
      ]
    },
    {
      id: "g3", titre: "Conditions", notion: "si… alors… sinon",
      cours: `
<p>Un <strong>losange</strong> pose une question. Selon la réponse, on suit la branche <strong>oui</strong> ou la branche <strong>non</strong>, puis les deux chemins se rejoignent.</p>
<p>Les signes de comparaison : <code>&lt;</code> plus petit que, <code>&gt;</code> plus grand que, <code>≤</code> plus petit ou égal, <code>≥</code> plus grand ou égal, <code>=</code> égal, <code>≠</code> différent.</p>
<p>Attention : 18 ≥ 18 est <strong>vrai</strong>, mais 18 &gt; 18 est <strong>faux</strong>.</p>`,
      schemaCours: [DEBUT, es("Lire age"), si("age ≥ 18 ?", [es("Afficher \"majeur\"")], [es("Afficher \"mineur\"")]), FIN],
      exercices: [
        { id: "g3e1", titre: "Majeur ou mineur", type: "suivre",
          schema: [DEBUT, es("Lire age"), si("age ≥ 18 ?", [es("Afficher \"majeur\"")], [es("Afficher \"mineur\"")]), FIN],
          enonce: "<p>L'utilisateur tape <strong>16</strong>.</p>", question: "Qu'affiche l'algorigramme ?",
          attendu: "mineur", explication: "16 ≥ 18 est faux : on suit la branche non.",
          indices: ["La réponse au test 16 ≥ 18 est-elle oui ou non ?"] },
        { id: "g3e2", titre: "Le thermostat", type: "suivre",
          schema: [DEBUT, es("Lire temperature"), si("temperature < 19 ?", [es("Afficher \"chauffage allumé\"")], [es("Afficher \"chauffage éteint\"")]), FIN],
          enonce: "<p>Un thermostat connecté suit cet algorigramme. Le capteur mesure <strong>21 °C</strong>.</p>", question: "Qu'affiche le thermostat ?",
          attendu: "chauffage éteint", accepte: ["chauffage eteint", "éteint", "eteint"],
          explication: "21 < 19 est faux : on suit la branche non.",
          indices: ["21 est-il plus petit que 19 ?"] },
        { id: "g3e3", titre: "Compléter : admis ou ajourné", type: "completer",
          schema: [DEBUT, es("Lire note"), si("", [es("", "B")], [es("Afficher \"ajourné\"")], "A"), FIN],
          enonce: "<p>Cet algorigramme doit afficher <code>admis</code> si la note est d'au moins 10, et <code>ajourné</code> sinon. Complète les cases <strong>A</strong> et <strong>B</strong>.</p>",
          trous: {
            A: { choix: ["note ≥ 10 ?", "note < 10 ?", "note = 20 ?", "Lire note"], bonne: 0 },
            B: { choix: ["Afficher \"admis\"", "Afficher \"ajourné\"", "note ← 10", "Afficher note"], bonne: 0 }
          },
          explication: "Le test est « note ≥ 10 ? » ; si oui, on affiche admis.",
          indices: ["La case A est un losange : c'est un test.", "La branche oui correspond au cas où le test est vrai."] },
        { id: "g3e4", titre: "Quelle valeur pour gagner ?", type: "qcm",
          schema: [DEBUT, es("Lire n"), si("n = 7 ?", [es("Afficher \"gagné\"")], [es("Afficher \"perdu\"")]), FIN],
          enonce: "<p>Quel nombre l'utilisateur doit-il taper pour que l'algorigramme affiche <code>gagné</code> ?</p>",
          choix: ["7", "0", "6", "Il ne peut jamais gagner"], bonne: 0,
          explication: "On affiche gagné seulement si la réponse au test n = 7 est oui.",
          indices: ["Pars de « gagné » et remonte la flèche jusqu'au losange."] }
      ]
    },
    {
      id: "g4", titre: "Boucles", notion: "tant que",
      cours: `
<p>Quand une flèche <strong>remonte</strong> vers un losange, c'est une <strong>boucle</strong> : on répète les blocs <strong>tant que</strong> la réponse au test est oui. Dès que c'est non, on sort de la boucle.</p>
<p>Pour suivre une boucle, on note les valeurs à chaque tour :</p>
<table class="trace"><tr><th>Tour</th><th>i avant le test</th><th>i &lt; 3 ?</th></tr>
<tr><td>1</td><td>0</td><td>oui</td></tr><tr><td>2</td><td>1</td><td>oui</td></tr><tr><td>3</td><td>2</td><td>oui</td></tr><tr><td>–</td><td>3</td><td>non : on sort</td></tr></table>
<p>Attention : si rien ne change dans la boucle, le test reste toujours vrai et la boucle ne s'arrête jamais.</p>`,
      schemaCours: [DEBUT, act("i ← 0"), tantque("i < 3 ?", [es("Afficher \"Bip\""), act("i ← i + 1")]), FIN],
      exercices: [
        { id: "g4e1", titre: "Combien de Bip ?", type: "suivre",
          schema: [DEBUT, act("i ← 0"), tantque("i < 3 ?", [es("Afficher \"Bip\""), act("i ← i + 1")]), FIN],
          enonce: "<p>Fais tourner la boucle à la main.</p>", question: "Combien de fois « Bip » est-il affiché ? (réponds par un nombre)",
          attendu: "3", accepte: ["3 fois", "trois"], explication: "i vaut 0, 1, 2 : trois tours. Quand i vaut 3, le test est faux.",
          indices: ["Note la valeur de i à chaque tour.", "On s'arrête quand i < 3 devient faux."] },
        { id: "g4e2", titre: "Valeur finale", type: "suivre",
          schema: [DEBUT, act("n ← 1"), tantque("n < 50 ?", [act("n ← n × 2")]), es("Afficher n"), FIN],
          enonce: "<p>Fais tourner la boucle à la main.</p>", question: "Qu'affiche l'algorigramme ?",
          attendu: "64", explication: "n vaut 1, 2, 4, 8, 16, 32, 64. À 64, le test n < 50 est faux.",
          indices: ["n double à chaque tour.", "Continue tant que n est plus petit que 50."] },
        { id: "g4e3", titre: "Compléter : compte à rebours", type: "completer",
          schema: [DEBUT, act("n ← 5"), tantque("n > 0 ?", [es("Afficher n"), act("", "A")]), es("Afficher \"Décollage !\""), FIN],
          enonce: "<p>Cet algorigramme doit afficher 5, 4, 3, 2, 1 puis <code>Décollage !</code>. Que faut-il écrire dans la case <strong>A</strong> ?</p>",
          trous: { A: { choix: ["n ← n − 1", "n ← n + 1", "n ← 0", "Afficher n"], bonne: 0 } },
          explication: "n doit diminuer de 1 à chaque tour, sinon la boucle ne s'arrête jamais.",
          indices: ["Que doit devenir n après avoir affiché 5 ?", "Si n ne diminue pas, le test n > 0 reste toujours vrai."] },
        { id: "g4e4", titre: "La somme", type: "suivre",
          schema: [DEBUT, act("total ← 0"), act("i ← 1"), tantque("i ≤ 4 ?", [act("total ← total + i"), act("i ← i + 1")]), es("Afficher total"), FIN],
          enonce: "<p>Fais tourner la boucle à la main, en notant total et i à chaque tour.</p>", question: "Qu'affiche l'algorigramme ?",
          attendu: "10", explication: "total vaut 1, puis 3, puis 6, puis 10 (1 + 2 + 3 + 4). Quand i vaut 5, le test i ≤ 4 est faux.",
          indices: ["Fais un tableau avec deux colonnes : total et i.", "Au 1er tour, total ← 0 + 1 = 1 et i devient 2."] }
      ]
    },
    {
      id: "g5", titre: "Objets connectés", notion: "situations concrètes",
      cours: `
<p>Les objets connectés (thermostat, lampe automatique, arrosage, alarme) suivent des algorithmes : ils <strong>lisent des capteurs</strong> (entrées), <strong>testent</strong> les valeurs et <strong>commandent des actionneurs</strong> (sorties).</p>
<p>Un test peut en contenir un autre : on suit d'abord le premier losange, puis le second.</p>`,
      exercices: [
        { id: "g5e1", titre: "La lampe automatique", type: "suivre",
          schema: [DEBUT, es("Lire mouvement"), es("Lire lumiere"),
            si("mouvement = 1 ?", [si("lumiere < 30 ?", [es("Allumer la lampe")], [es("Éteindre la lampe")])], [es("Éteindre la lampe")]), FIN],
          enonce: "<p>Une lampe de jardin suit cet algorigramme. Le capteur de mouvement renvoie <strong>1</strong> (quelqu'un passe) et le capteur de lumière mesure <strong>20</strong>.</p>",
          question: "Que fait la lampe ?",
          attendu: "Allumer la lampe", accepte: ["allumer", "allumée", "allumee", "elle s'allume", "la lampe s'allume", "allume la lampe"],
          explication: "mouvement = 1 : oui. lumiere < 30 : 20 < 30, oui. On allume la lampe.",
          indices: ["Réponds d'abord au premier losange, puis au second."] },
        { id: "g5e2", titre: "L'arrosage automatique", type: "suivre",
          schema: [DEBUT, es("Lire humidite"), tantque("humidite < 40 ?", [es("Arroser 1 minute"), act("humidite ← humidite + 10")]), es("Afficher \"terminé\""), FIN],
          enonce: "<p>Le capteur mesure une humidité de <strong>15</strong> au départ.</p>", question: "Combien de minutes le système arrose-t-il ? (réponds par un nombre)",
          attendu: "3", accepte: ["3 minutes", "trois"], explication: "humidite vaut 15, 25, 35 : trois tours. À 45, le test est faux.",
          indices: ["Note la valeur de humidite à chaque tour."] },
        { id: "g5e3", titre: "Compléter : l'alarme", type: "completer",
          schema: [DEBUT, es("Lire distance"), si("", [es("", "B")], [], "A"), FIN],
          enonce: "<p>Un capteur mesure la distance (en cm) entre la porte et une personne. L'alarme doit se déclencher si quelqu'un est à <strong>moins de 10 cm</strong>. Complète les cases <strong>A</strong> et <strong>B</strong>.</p>",
          trous: {
            A: { choix: ["distance < 10 ?", "distance > 10 ?", "distance ← 10", "Lire distance"], bonne: 0 },
            B: { choix: ["Déclencher l'alarme", "Lire distance", "Éteindre l'alarme", "distance ← 0"], bonne: 0 }
          },
          explication: "On teste si la distance est plus petite que 10 ; si oui, on déclenche l'alarme.",
          indices: ["« À moins de 10 cm » veut dire « distance plus petite que 10 »."] },
        { id: "g5e4", titre: "Compléter : l'arrosage", type: "completer",
          schema: [DEBUT, es("Lire humidite"), tantque("", [es("Arroser 1 minute"), act("", "B")], "A"), es("Afficher \"terminé\""), FIN],
          enonce: "<p>Chaque minute d'arrosage augmente l'humidité de 10. L'arrosage doit continuer <strong>tant que l'humidité est inférieure à 40</strong>. Complète les cases <strong>A</strong> et <strong>B</strong>.</p>",
          trous: {
            A: { choix: ["humidite < 40 ?", "humidite > 40 ?", "humidite ← 40", "Arroser 1 minute"], bonne: 0 },
            B: { choix: ["humidite ← humidite + 10", "humidite ← humidite − 10", "humidite ← 40", "Afficher \"terminé\""], bonne: 0 }
          },
          explication: "On arrose tant que humidite < 40, et chaque minute ajoute 10 à l'humidité.",
          indices: ["La case A est le test de la boucle.", "Après chaque minute d'arrosage, que devient l'humidité ?"] }
      ]
    },
    {
      id: "g6", titre: "Je sais faire : révisions", notion: "tout le parcours",
      cours: `
<p><strong>Les 6 réflexes</strong> pour réussir un algorigramme :</p>
<ol>
<li><strong>Lire de haut en bas</strong> en suivant les flèches. Ovale = début / fin, losange = test, rectangle = tout le reste.</li>
<li><code>x ← x + 2</code> se lit « x prend la valeur x + 2 » : on calcule à droite <em>avec l'ancienne valeur</em>, puis on range le résultat dans x.</li>
<li>Faire un <strong>tableau de suivi</strong> : une colonne par variable, une ligne par étape.</li>
<li>Au losange, répondre <strong>oui ou non</strong>. Attention : <code>10 &lt; 10</code> est <em>faux</em>, <code>10 ≤ 10</code> est <em>vrai</em>.</li>
<li>Une flèche qui <strong>remonte</strong> = une boucle : on recommence tant que le test est vrai, on sort dès qu'il est faux.</li>
<li>Dans une boucle, quelque chose doit <strong>changer</strong>, sinon elle ne s'arrête jamais.</li>
</ol>`,
      exercices: [
        { id: "g6e1", titre: "Le bon symbole", type: "qcm",
          enonce: "<p>Dans notre convention, quel symbole contient <code>moyenne ≥ 10 ?</code></p>",
          choix: ["Un losange", "Un rectangle", "Un ovale", "Une flèche"], bonne: 0,
          explication: "C'est une question dont la réponse est oui ou non : un test, donc un losange.", indices: ["Y a-t-il un point d'interrogation ?"] },
        { id: "g6e2", titre: "Combien de tests ?", type: "qcm",
          schema: [DEBUT, es("Lire age"), si("age ≥ 18 ?", [es("Afficher \"majeur\"")], [si("age ≥ 16 ?", [es("Afficher \"conduite accompagnée\"")], [es("Afficher \"trop jeune\"")])]), FIN],
          enonce: "<p>Combien de tests contient cet algorigramme ?</p>", choix: ["2", "1", "3", "4"], bonne: 0,
          explication: "Il y a deux losanges : age ≥ 18 ? et age ≥ 16 ?", indices: ["Compte les losanges."] },
        { id: "g6e3", titre: "Lire une affectation", type: "qcm",
          enonce: "<p>Que veut dire <code>score ← score + 5</code> ?</p>",
          choix: ["score prend sa valeur actuelle augmentée de 5", "score est égal à 5", "on compare score et score + 5", "on affiche score + 5"], bonne: 0,
          explication: "La flèche ← est une affectation : on calcule score + 5 avec l'ancienne valeur, puis on range le résultat dans score.", indices: ["La flèche ← se lit « prend la valeur »."] },
        { id: "g6e4", titre: "Séquence", type: "suivre",
          schema: [DEBUT, act("a ← 4"), act("a ← a × 3"), act("a ← a − 2"), es("Afficher a"), FIN],
          enonce: "<p>Fais tourner l'algorigramme à la main.</p>", question: "Qu'affiche-t-il ?", attendu: "10",
          explication: "a vaut 4, puis 4 × 3 = 12, puis 12 − 2 = 10.", indices: ["Note la valeur de a après chaque rectangle."] },
        { id: "g6e5", titre: "Deux variables", type: "suivre",
          schema: [DEBUT, act("x ← 7"), act("y ← x + 1"), act("x ← y × 2"), es("Afficher x"), FIN],
          enonce: "<p>Fais un tableau avec les colonnes x et y.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "16",
          explication: "x = 7, y = 8, puis x = 8 × 2 = 16.", indices: ["y se calcule avec x = 7.", "Ensuite, x se calcule avec y."] },
        { id: "g6e6", titre: "L'échange", type: "suivre",
          schema: [DEBUT, act("a ← 3"), act("b ← 8"), act("c ← a"), act("a ← b"), act("b ← c"), es("Afficher b"), FIN],
          enonce: "<p>Suis les valeurs de a, b et c.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "3",
          explication: "c garde 3, a prend 8, b prend la valeur de c, donc 3 : a et b ont été échangés.", indices: ["Après c ← a, c vaut 3.", "On affiche b, pas a."] },
        { id: "g6e7", titre: "Avec une entrée", type: "suivre",
          schema: [DEBUT, es("Lire prix"), act("prix ← prix − prix ÷ 4"), es("Afficher prix"), FIN],
          enonce: "<p>L'utilisateur tape <strong>80</strong>.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "60", accepte: ["60.0"],
          explication: "80 ÷ 4 = 20 ; 80 − 20 = 60 : une remise de 25 %.", indices: ["Calcule d'abord prix ÷ 4."] },
        { id: "g6e8", titre: "Compléter : le périmètre", type: "completer",
          schema: [DEBUT, es("Lire longueur"), es("Lire largeur"), act("", "A"), es("Afficher perimetre"), FIN],
          enonce: "<p>L'algorigramme doit afficher le périmètre d'un rectangle. Que faut-il écrire en <strong>A</strong> ?</p>",
          trous: { A: { choix: ["perimetre ← 2 × (longueur + largeur)", "perimetre ← longueur × largeur", "perimetre ← longueur + largeur", "Afficher longueur + largeur"], bonne: 0 } },
          explication: "Périmètre d'un rectangle = 2 × (longueur + largeur). longueur × largeur, c'est l'aire.", indices: ["Fais le tour du rectangle : combien de côtés ?"] },
        { id: "g6e9", titre: "Dans le bon ordre", type: "completer",
          schema: [DEBUT, es("", "A"), act("", "B"), es("Afficher f"), FIN],
          enonce: "<p>L'algorigramme convertit une température de degrés Celsius en degrés Fahrenheit (f = c × 1,8 + 32). Complète <strong>A</strong> et <strong>B</strong>.</p>",
          trous: { A: { choix: ["Lire c", "Afficher c", "f ← c × 1,8 + 32"], bonne: 0 }, B: { choix: ["f ← c × 1,8 + 32", "c ← f × 1,8 + 32", "Lire f"], bonne: 0 } },
          explication: "On lit d'abord c, on calcule f, puis on affiche f.", indices: ["On ne peut pas calculer avant d'avoir lu la valeur."] },
        { id: "g6e10", titre: "Quelle branche ?", type: "suivre",
          schema: [DEBUT, es("Lire note"), si("note ≥ 10 ?", [es("Afficher \"admis\"")], [es("Afficher \"ajourné\"")]), FIN],
          enonce: "<p>L'utilisateur tape <strong>9.5</strong>.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "ajourné", accepte: ["ajourne", "\"ajourné\""],
          explication: "9,5 ≥ 10 est faux : on suit la branche non.", indices: ["9,5 est-il plus grand ou égal à 10 ?"] },
        { id: "g6e11", titre: "Le cas limite", type: "suivre",
          schema: [DEBUT, es("Lire vitesse"), si("vitesse > 50 ?", [es("Afficher \"amende\"")], [es("Afficher \"ok\"")]), FIN],
          enonce: "<p>Le radar mesure exactement <strong>50</strong> km/h.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "ok", accepte: ["\"ok\""],
          explication: "50 > 50 est faux : 50 n'est pas strictement plus grand que 50. Branche non.", indices: ["> veut dire strictement plus grand."] },
        { id: "g6e12", titre: "Choisir le test", type: "completer",
          schema: [DEBUT, es("Lire age"), si("", [es("Afficher \"tarif réduit\"")], [es("Afficher \"plein tarif\"")], "A"), FIN],
          enonce: "<p>Le tarif réduit est pour les personnes de <strong>moins de 12 ans</strong>. Que faut-il écrire dans le losange <strong>A</strong> ?</p>",
          trous: { A: { choix: ["age < 12 ?", "age ≤ 12 ?", "age > 12 ?", "age ← 12"], bonne: 0 } },
          explication: "« Moins de 12 ans » : 12 ans exclu, donc age < 12. Avec ≤, un enfant de 12 ans aurait le tarif réduit.", indices: ["Un enfant de 12 ans a-t-il droit au tarif réduit ?"] },
        { id: "g6e13", titre: "Quelle valeur ?", type: "qcm",
          schema: [DEBUT, es("Lire n"), si("n ÷ 2 a un reste de 0 ?", [es("Afficher \"pair\"")], [es("Afficher \"impair\"")]), FIN],
          enonce: "<p>Pour laquelle de ces valeurs l'algorigramme affiche-t-il <code>pair</code> ?</p>", choix: ["0", "7", "15", "1"], bonne: 0,
          explication: "0 ÷ 2 = 0, reste 0 : 0 est pair.", indices: ["Calcule le reste de la division par 2."] },
        { id: "g6e14", titre: "Tests emboîtés", type: "suivre",
          schema: [DEBUT, es("Lire age"), si("age ≥ 18 ?", [es("Afficher \"majeur\"")], [si("age ≥ 16 ?", [es("Afficher \"conduite accompagnée\"")], [es("Afficher \"trop jeune\"")])]), FIN],
          enonce: "<p>L'utilisateur tape <strong>16</strong>.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "conduite accompagnée", accepte: ["conduite accompagnee", "\"conduite accompagnée\""],
          explication: "16 ≥ 18 : non. Puis 16 ≥ 16 : oui.", indices: ["Réponds au premier losange, puis au second."] },
        { id: "g6e15", titre: "La météo", type: "suivre",
          schema: [DEBUT, es("Lire t"), si("t < 10 ?", [es("Afficher \"froid\"")], [si("t < 25 ?", [es("Afficher \"doux\"")], [es("Afficher \"chaud\"")])]), FIN],
          enonce: "<p>Le capteur mesure <strong>25</strong> °C.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "chaud", accepte: ["\"chaud\""],
          explication: "25 < 10 : non. 25 < 25 : non. On arrive à « chaud ».", indices: ["25 < 25 est-il vrai ?"] },
        { id: "g6e16", titre: "Combien de tours ?", type: "suivre",
          schema: [DEBUT, act("i ← 1"), tantque("i ≤ 5 ?", [es("Afficher i"), act("i ← i + 1")]), FIN],
          enonce: "<p>Fais un tableau de suivi de i.</p>", question: "Combien de nombres sont affichés ?", attendu: "5", accepte: ["cinq"],
          explication: "i vaut 1, 2, 3, 4, 5 : cinq nombres. À 6, le test i ≤ 5 est faux.", indices: ["≤ veut dire « plus petit ou égal »."] },
        { id: "g6e17", titre: "De 3 en 3", type: "suivre",
          schema: [DEBUT, act("n ← 0"), act("tours ← 0"), tantque("n < 10 ?", [act("n ← n + 3"), act("tours ← tours + 1")]), es("Afficher tours"), FIN],
          enonce: "<p>Suis n et tours à chaque passage.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "4",
          explication: "n vaut 0, 3, 6, 9 (4 tours), puis 12 : 12 < 10 est faux.", indices: ["9 < 10 est encore vrai."] },
        { id: "g6e18", titre: "La valeur finale", type: "suivre",
          schema: [DEBUT, act("n ← 100"), tantque("n > 10 ?", [act("n ← n ÷ 2")]), es("Afficher n"), FIN],
          enonce: "<p>Fais tourner la boucle à la main.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "6.25", accepte: ["6,25"],
          explication: "n vaut 100, 50, 25, 12,5, puis 6,25 : 6,25 > 10 est faux.", indices: ["12,5 > 10 est encore vrai."] },
        { id: "g6e19", titre: "Le produit", type: "suivre",
          schema: [DEBUT, act("p ← 1"), act("i ← 1"), tantque("i ≤ 4 ?", [act("p ← p × i"), act("i ← i + 1")]), es("Afficher p"), FIN],
          enonce: "<p>Fais un tableau avec p et i.</p>", question: "Qu'affiche l'algorigramme ?", attendu: "24",
          explication: "p = 1 × 1 × 2 × 3 × 4 = 24.", indices: ["Au 1er tour, p ← 1 × 1 = 1 ; au 2e, p ← 1 × 2 = 2…"] },
        { id: "g6e20", titre: "Compléter : de 1 à 10", type: "completer",
          schema: [DEBUT, act("i ← 1"), tantque("", [es("Afficher i"), act("", "B")], "A"), FIN],
          enonce: "<p>L'algorigramme doit afficher les nombres de 1 à 10. Complète <strong>A</strong> et <strong>B</strong>.</p>",
          trous: { A: { choix: ["i ≤ 10 ?", "i < 10 ?", "i > 10 ?", "i = 10 ?"], bonne: 0 }, B: { choix: ["i ← i + 1", "i ← i − 1", "i ← 10", "Afficher i + 1"], bonne: 0 } },
          explication: "Avec i < 10, le 10 ne serait pas affiché ; il faut i ≤ 10, et i doit augmenter de 1 à chaque tour.", indices: ["Le nombre 10 doit être affiché."] },
        { id: "g6e21", titre: "Compléter : l'épargne", type: "completer",
          schema: [DEBUT, act("argent ← 0"), act("semaines ← 0"), tantque("", [act("argent ← argent + 15"), act("semaines ← semaines + 1")], "A"), es("Afficher semaines"), FIN],
          enonce: "<p>Sara met 15 € de côté chaque semaine. L'algorigramme doit afficher le nombre de semaines nécessaires pour avoir <strong>au moins 100 €</strong>. Que faut-il écrire en <strong>A</strong> ?</p>",
          trous: { A: { choix: ["argent < 100 ?", "argent > 100 ?", "argent = 100 ?", "semaines < 100 ?"], bonne: 0 } },
          explication: "On continue tant qu'on n'a pas encore 100 €, c'est-à-dire tant que argent < 100.", indices: ["La boucle continue tant que l'objectif n'est PAS atteint."] },
        { id: "g6e22", titre: "La boucle sans fin", type: "qcm",
          schema: [DEBUT, act("n ← 1"), tantque("n < 5 ?", [es("Afficher n")]), FIN],
          enonce: "<p>Cet algorigramme ne s'arrête jamais. Pourquoi ?</p>",
          choix: ["n ne change jamais dans la boucle", "Le test devrait être n > 5", "Il manque un Lire n", "Afficher n arrête la boucle"], bonne: 0,
          explication: "n reste à 1, donc n < 5 est toujours vrai. Il manque n ← n + 1 dans la boucle.", indices: ["Que vaut n au 2e tour ? au 3e ?"] },
        { id: "g6e23", titre: "Algorithme en mots", type: "qcm",
          schema: [DEBUT, es("Lire a"), es("Lire b"), si("a > b ?", [es("Afficher a")], [es("Afficher b")]), FIN],
          enonce: "<p>Que fait cet algorigramme ?</p>",
          choix: ["Il affiche le plus grand des deux nombres", "Il affiche le plus petit des deux nombres", "Il affiche toujours a", "Il affiche la somme de a et b"], bonne: 0,
          explication: "Si a est plus grand, on affiche a ; sinon on affiche b : c'est le maximum.", indices: ["Essaie avec a = 3 et b = 8, puis avec a = 9 et b = 2."] },
        { id: "g6e24", titre: "Le parking connecté", type: "suivre",
          schema: [DEBUT, act("places ← 3"), es("Lire voiture"), tantque("places > 0 ?", [act("places ← places − 1"), es("Lire voiture")]), es("Afficher \"COMPLET\""), FIN],
          enonce: "<p>Le parking a 3 places. Chaque tour de boucle, une voiture entre et occupe une place.</p>", question: "Combien de voitures entrent avant l'affichage de COMPLET ?", attendu: "3", accepte: ["trois"],
          explication: "places vaut 3, 2, 1 : trois tours ; à 0, on sort et on affiche COMPLET.", indices: ["Note places à chaque tour."] },
        { id: "g6e25", titre: "Compléter : le chauffage", type: "completer",
          schema: [DEBUT, es("Lire temperature"), tantque("", [es("Allumer le chauffage"), es("", "B")], "A"), es("Éteindre le chauffage"), FIN],
          enonce: "<p>Le chauffage doit rester allumé tant que la température est <strong>inférieure à 19 °C</strong>. Complète <strong>A</strong> et <strong>B</strong>.</p>",
          trous: { A: { choix: ["temperature < 19 ?", "temperature > 19 ?", "temperature ← 19", "Éteindre le chauffage"], bonne: 0 }, B: { choix: ["Lire temperature", "temperature ← 19", "Afficher temperature", "Éteindre le chauffage"], bonne: 0 } },
          explication: "On teste la température à chaque tour : il faut donc la relire dans la boucle, sinon le test ne change jamais.", indices: ["Sans nouvelle mesure, la température reste la même dans l'algorigramme."] }
      ]
    }
  ];
})();

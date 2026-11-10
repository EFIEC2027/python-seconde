/* Fonctions partagées par les pages d'exercices : aide quand on bloque,
 * exercices fermés par le professeur, lien direct vers un exercice (#id). */
(function (global) {
  const echecs = {};
  const style = document.createElement("style");
  style.textContent = `
.aide-blocage { border: 1.5px solid var(--surligne, #f2c230); background: var(--surligne-doux, #fbf0c8); border-radius: 10px; padding: .7rem .9rem; display: grid; gap: .45rem; }
.aide-blocage h3 { margin: 0; font-size: 1rem; }
.aide-blocage .liens { display: flex; flex-wrap: wrap; gap: .4rem; }
.aide-blocage button, .aide-blocage a { font: inherit; font-weight: 700; font-size: .9rem; border: 1.5px solid var(--trait, #ccc); background: var(--papier, #fff); color: inherit; border-radius: 8px; padding: .35rem .7rem; cursor: pointer; text-decoration: none; }
.voile-ferme { position: fixed; inset: 0; background: rgba(15, 25, 30, .72); display: grid; place-items: center; z-index: 60; padding: 16px; }
.voile-ferme .boite { background: var(--papier, #fff); color: var(--encre, #111); border-radius: 16px; padding: 1.6rem 1.5rem; width: min(480px, 100%); display: grid; gap: .8rem; }
.voile-ferme h2 { margin: 0; }
.voile-ferme .liens { display: flex; gap: .5rem; flex-wrap: wrap; }
.voile-ferme a { font-weight: 700; border-radius: 8px; padding: .55rem 1rem; text-decoration: none; border: 1.5px solid var(--trait, #ccc); color: inherit; }
.voile-ferme a.plein { background: var(--accent, #0d6a6a); border-color: var(--accent, #0d6a6a); color: #fff; }
.bandeau-entr { background: #efe6fb; color: #3d2466; border-bottom: 1px solid #d9c8f2; padding: .55rem 16px; font-size: .95rem; }
.bandeau-entr strong { color: #5b2fa0; }
@media (prefers-color-scheme: dark) { .bandeau-entr { background: #2a2138; color: #e4d8f6; border-color: #3d3052; } .bandeau-entr strong { color: #c7a6f5; } }
.conseils { display: grid; gap: .3rem; margin-top: .4rem; }
.conseils div { font-size: .9rem; }`;
  document.head.appendChild(style);

  /** Après une vérification : à partir de 3 échecs sur le même exercice, propose de l'aide. */
  function aide(exo, reussi, o) {
    if (reussi) { echecs[exo.id] = 0; return; }
    echecs[exo.id] = (echecs[exo.id] || 0) + 1;
    if (echecs[exo.id] < 3) return;
    const v = document.querySelector("#verdict .verdict") || document.getElementById("verdict");
    if (!v) return;
    const d = document.createElement("div");
    d.className = "aide-blocage";
    d.innerHTML = `<h3>Tu bloques ? C'est normal, voici 3 pistes :</h3><div class="liens"></div>`;
    const liens = d.querySelector(".liens");
    const bouton = (texte, f) => { const b = document.createElement("button"); b.type = "button"; b.textContent = texte; b.addEventListener("click", f); liens.appendChild(b); };
    if (o.cours) bouton("📖 Relire le cours", o.cours);
    const bi = document.getElementById("b-indice");
    if (bi && !bi.hidden) bouton("💡 Prendre un indice", () => bi.click());
    if (o.entrainement) { const a = document.createElement("a"); a.href = o.entrainement; a.textContent = "🏋️ M'entraîner sur cette notion (pas noté)"; liens.appendChild(a); }
    v.appendChild(d);
  }

  /** Exercices de classe fermés par le professeur : l'entraînement reste ouvert. */
  function ferme(lienEntrainement) {
    if (document.querySelector(".voile-ferme")) return;
    const d = document.createElement("div");
    d.className = "voile-ferme";
    d.innerHTML = `<div class="boite" role="alertdialog"><h2>🔒 Exercices fermés pour le moment</h2><p style="margin:0">Ton professeur a fermé les exercices de classe. Tu peux continuer à t'exercer dans l'<strong>entraînement</strong> : ce n'est pas noté, c'est juste pour progresser.</p><div class="liens"><a class="plein" href="${lienEntrainement}">🏋️ Aller à l'entraînement</a><a href="index.html">← Accueil</a></div></div>`;
    document.body.appendChild(d);
  }

  /** Ouvre l'exercice ou la notion demandé dans l'adresse (#m3e2 ou #m3). */
  function depuisAdresse(EXOS, choisir) {
    const h = decodeURIComponent(location.hash.slice(1));
    if (!h) return false;
    const exo = EXOS.find(e => e.id === h) || EXOS.find(e => e.module && e.module.id === h);
    if (!exo) return false;
    choisir(exo.id);
    return true;
  }

  /** Bandeau « conseillé par ton professeur » à partir des conseils reçus du serveur. */
  function conseils(zone, liste, EXOS, choisir, reussis) {
    if (!zone) return;
    const utiles = (liste || []).filter(c => (c.exos || []).some(id => EXOS.some(e => e.id === id)));
    if (!utiles.length) { zone.hidden = true; return; }
    zone.hidden = false;
    zone.innerHTML = "<strong>📌 Conseillé par ton professeur</strong><div class=\"conseils\"></div>";
    const z = zone.querySelector(".conseils");
    utiles.forEach(c => {
      const d = document.createElement("div");
      const ids = c.exos.filter(id => EXOS.some(e => e.id === id));
      const faits = ids.filter(id => reussis.has(id)).length;
      d.textContent = `${c.titre || "Exercices"}${c.pour ? " · pour le " + c.pour.split("-").reverse().join("/") : ""} · ${faits}/${ids.length} faits `;
      ids.forEach(id => {
        const e = EXOS.find(x => x.id === id), b = document.createElement("button");
        b.type = "button"; b.textContent = (reussis.has(id) ? "✓ " : "") + e.num;
        b.style.cssText = "margin:0 .2rem;border:1.5px solid var(--trait);border-radius:6px;background:var(--papier);cursor:pointer;font:inherit;font-size:.85rem;padding:.1rem .45rem";
        b.addEventListener("click", () => choisir(id));
        d.appendChild(b);
      });
      z.appendChild(d);
    });
  }


  /* ---------- Animation d'une boucle for, pas à pas ----------
   * <div class="anim-boucle" data-var="i" data-debut="1" data-fin="4" data-pas="1" data-corps="print(i)" data-sortie="i"></div>
   * data-fin est exclu, comme dans range(). data-sortie : ce qu'affiche le corps (expression avec la variable). */
  const styleAnim = document.createElement("style");
  styleAnim.textContent = `
.anim-boucle { border: 1.5px solid var(--accent, #0d6a6a); border-radius: 12px; padding: .8rem .9rem; margin: .7rem 0; display: grid; gap: .6rem; background: var(--papier, #fff); }
.anim-boucle .ab-titre { font-weight: 700; color: var(--accent, #0d6a6a); }
.anim-boucle .ab-grille { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, .7fr) minmax(0, 1fr); gap: .6rem; }
@media (max-width: 640px) { .anim-boucle .ab-grille { grid-template-columns: 1fr; } }
.anim-boucle .ab-boite { border: 1px solid var(--trait, #ccc); border-radius: 8px; padding: .5rem .6rem; background: var(--code-fond, #f7faf9); min-height: 5.5rem; }
.anim-boucle .ab-boite > span { display: block; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em; color: var(--doux, #667); font-weight: 700; margin-bottom: .25rem; }
.anim-boucle .ab-ligne { font-family: var(--f-code, monospace); padding: .1rem .35rem; border-radius: 5px; white-space: pre; transition: background .2s; }
.anim-boucle .ab-ligne.on { background: var(--surligne, #f2c230); color: #111; font-weight: 700; }
.anim-boucle .ab-var { font-family: var(--f-code, monospace); font-size: 1.6rem; font-weight: 700; text-align: center; }
.anim-boucle .ab-var small { display: block; font-size: .8rem; font-weight: 400; color: var(--doux, #667); font-family: var(--f-texte, sans-serif); }
.anim-boucle .ab-valeurs { display: flex; flex-wrap: wrap; gap: .25rem; justify-content: center; margin-top: .3rem; }
.anim-boucle .ab-valeurs b { font-family: var(--f-code, monospace); font-size: .8rem; border: 1.5px solid var(--trait, #ccc); border-radius: 5px; padding: 0 .3rem; opacity: .55; }
.anim-boucle .ab-valeurs b.fait { opacity: .3; text-decoration: line-through; }
.anim-boucle .ab-valeurs b.cour { opacity: 1; border-color: var(--surligne, #f2c230); background: var(--surligne-doux, #fbf0c8); }
.anim-boucle .ab-valeurs b.exclu { border-style: dashed; color: var(--ko, #b93d2a); }
.anim-boucle pre.ab-sortie { margin: 0; font-family: var(--f-code, monospace); white-space: pre-wrap; min-height: 3rem; background: transparent; border: 0; padding: 0; }
.anim-boucle .ab-explication { background: var(--surligne-doux, #fbf0c8); border-radius: 8px; padding: .5rem .7rem; min-height: 2.6rem; }
.anim-boucle .ab-boutons { display: flex; gap: .4rem; flex-wrap: wrap; }
.anim-boucle .ab-boutons button { font: inherit; font-weight: 700; border: 1.5px solid var(--trait, #ccc); background: var(--papier, #fff); color: inherit; border-radius: 8px; padding: .35rem .8rem; cursor: pointer; }
.anim-boucle .ab-boutons button.plein { background: var(--accent, #0d6a6a); border-color: var(--accent, #0d6a6a); color: #fff; }`;
  document.head.appendChild(styleAnim);
  function animer(zone) {
    (zone || document).querySelectorAll(".anim-boucle:not([data-pret])").forEach(el => {
      el.dataset.pret = "1";
      const v = el.dataset.var || "i", debut = Number(el.dataset.debut || 0), fin = Number(el.dataset.fin), pas = Number(el.dataset.pas || 1);
      const corps = el.dataset.corps || `print(${v})`, sortie = new Function(v, "return " + (el.dataset.sortie || v));
      const args = debut === 0 && pas === 1 ? `${fin}` : pas === 1 ? `${debut}, ${fin}` : `${debut}, ${fin}, ${pas}`;
      const valeurs = []; for (let x = debut; pas > 0 ? x < fin : x > fin; x += pas) valeurs.push(x);
      el.innerHTML = `<div class="ab-titre">▶ Regarde la boucle tourner, pas à pas</div>
        <div class="ab-grille">
          <div class="ab-boite"><span>Le programme</span><div class="ab-ligne" data-l="1">for ${v} in range(${args}):</div><div class="ab-ligne" data-l="2">    ${corps.replace(/</g, "&lt;")}</div><div class="ab-ligne" data-l="3"> </div></div>
          <div class="ab-boite"><span>La variable</span><div class="ab-var">${v} = <b class="ab-val">?</b><small class="ab-tour">pas encore commencé</small></div><div class="ab-valeurs">${valeurs.map(x => `<b>${x}</b>`).join("")}<b class="exclu" title="le dernier nombre est exclu">${fin}</b></div></div>
          <div class="ab-boite"><span>Ce qui s'affiche</span><pre class="ab-sortie"></pre></div>
        </div>
        <div class="ab-explication">Clique sur <b>Pas suivant</b> pour avancer d'une étape, ou sur <b>Lecture</b> pour tout voir.</div>
        <div class="ab-boutons"><button type="button" class="plein ab-lire">▶ Lecture</button><button type="button" class="ab-pas">Pas suivant ⏭</button><button type="button" class="ab-zero">↺ Recommencer</button></div>`;
      // Étapes : test du for (ligne 1) puis corps (ligne 2), pour chaque valeur ; enfin la sortie de boucle.
      const etapes = [];
      valeurs.forEach((x, k) => {
        etapes.push({ l: 1, val: x, k, sortie: null, txt: k === 0 ? `Python lit <code>range(${args})</code> : il prépare les nombres ${valeurs.slice(0, 4).join(", ")}${valeurs.length > 4 ? "…" : ""} (sans le ${fin}). Premier tour : <b>${v}</b> prend la valeur <b>${x}</b>.` : `On remonte au <code>for</code> : il reste des nombres, donc nouveau tour. <b>${v}</b> prend la valeur <b>${x}</b>.` });
        etapes.push({ l: 2, val: x, k, sortie: String(sortie(x)), txt: `Python exécute la ligne décalée avec ${v} = ${x} : elle affiche <b>${String(sortie(x)).replace(/</g, "&lt;")}</b>.` });
      });
      etapes.push({ l: 3, val: valeurs[valeurs.length - 1], k: valeurs.length, sortie: null, fin: true, txt: `Il n'y a plus de nombre dans <code>range(${args})</code> : la boucle s'arrête. Elle a tourné <b>${valeurs.length} fois</b>. Le ${fin} n'est jamais utilisé : <b>le dernier nombre de range est exclu</b>.` });
      let n = 0, minuteur = null;
      const $e = s => el.querySelector(s);
      function montrer() {
        el.querySelectorAll(".ab-ligne").forEach(l => l.classList.toggle("on", n > 0 && Number(l.dataset.l) === etapes[n - 1].l && etapes[n - 1].l !== 3));
        const e = etapes[n - 1];
        $e(".ab-val").textContent = e ? e.val : "?";
        $e(".ab-tour").textContent = !e ? "pas encore commencé" : e.fin ? "boucle terminée" : `tour ${e.k + 1} sur ${valeurs.length}`;
        el.querySelectorAll(".ab-valeurs b:not(.exclu)").forEach((b, k) => { b.className = !e ? "" : e.fin || k < e.k ? "fait" : k === e.k ? "cour" : ""; });
        $e(".ab-sortie").textContent = etapes.slice(0, n).filter(x => x.sortie !== null).map(x => x.sortie).join("\n");
        $e(".ab-explication").innerHTML = e ? e.txt : "Clique sur <b>Pas suivant</b> pour avancer d'une étape, ou sur <b>Lecture</b> pour tout voir.";
        $e(".ab-pas").disabled = n >= etapes.length;
      }
      const stop = () => { clearInterval(minuteur); minuteur = null; $e(".ab-lire").textContent = "▶ Lecture"; };
      $e(".ab-pas").addEventListener("click", () => { stop(); if (n < etapes.length) { n++; montrer(); } });
      $e(".ab-zero").addEventListener("click", () => { stop(); n = 0; montrer(); });
      $e(".ab-lire").addEventListener("click", () => {
        if (minuteur) { stop(); return; }
        if (n >= etapes.length) n = 0;
        $e(".ab-lire").textContent = "⏸ Pause";
        minuteur = setInterval(() => { n++; montrer(); if (n >= etapes.length) stop(); }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 1600 : 1100);
      });
      montrer();
    });
  }

  /* ---------- Animation de // et % (paquets et reste) ----------
   * <div class="anim-division" data-etapes='[{"n":4000,"d":3600,"q":"heures","r":"reste","nn":"duree","paquet":"heure"}]'></div> */
  const styleDiv = document.createElement("style");
  styleDiv.textContent = `
.anim-division { border: 1.5px solid var(--accent, #0d6a6a); border-radius: 12px; padding: .8rem .9rem; margin: .7rem 0; display: grid; gap: .6rem; background: var(--papier, #fff); }
.anim-division .ad-titre { font-weight: 700; color: var(--accent, #0d6a6a); }
.anim-division .ad-etape { display: grid; gap: .35rem; border-top: 1px dashed var(--trait, #ccc); padding-top: .55rem; }
.anim-division .ad-barre { display: flex; height: 34px; border-radius: 6px; overflow: hidden; border: 1.5px solid var(--encre, #222); }
.anim-division .ad-paquet { background: var(--accent, #0d6a6a); color: #fff; display: grid; place-items: center; font-size: .78rem; font-weight: 700; border-right: 2px solid var(--papier, #fff); min-width: 0; overflow: hidden; white-space: nowrap; }
.anim-division .ad-reste { background: var(--surligne, #f2c230); color: #111; display: grid; place-items: center; font-size: .78rem; font-weight: 700; min-width: 2.2rem; }
.anim-division .ad-calc { display: grid; grid-template-columns: auto 1fr; gap: .15rem .7rem; align-items: baseline; }
.anim-division .ad-calc code { font-size: .95rem; white-space: nowrap; }
.anim-division .ad-memoire { display: flex; flex-wrap: wrap; gap: .35rem; }
.anim-division .ad-memoire span { font-family: var(--f-code, monospace); border: 1.5px solid var(--trait, #ccc); border-radius: 7px; padding: .15rem .5rem; background: var(--code-fond, #f7faf9); }
.anim-division .ad-memoire span.nouveau { border-color: var(--surligne, #f2c230); background: var(--surligne-doux, #fbf0c8); }
.anim-division .ad-boutons { display: flex; gap: .4rem; flex-wrap: wrap; }
.anim-division .ad-boutons button { font: inherit; font-weight: 700; border: 1.5px solid var(--trait, #ccc); background: var(--papier, #fff); color: inherit; border-radius: 8px; padding: .35rem .8rem; cursor: pointer; }
.anim-division .ad-boutons button.plein { background: var(--accent, #0d6a6a); border-color: var(--accent, #0d6a6a); color: #fff; }`;
  document.head.appendChild(styleDiv);
  function animerDivisions(zone) {
    (zone || document).querySelectorAll(".anim-division:not([data-pret])").forEach(el => {
      el.dataset.pret = "1";
      const etapes = JSON.parse(el.dataset.etapes);
      el.innerHTML = `<div class="ad-titre">▶ Comprendre // et % avec des paquets</div><div class="ad-memoire"></div><div class="ad-liste"></div>
        <div class="ad-boutons"><button type="button" class="plein ad-suiv">Étape suivante ⏭</button><button type="button" class="ad-zero">↺ Recommencer</button></div>`;
      let n = 0;
      // data-masquer="2" : à partir de l'étape 2, le nom de la variable de départ est remplacé par « ? » (à trouver par l'élève).
      const cache = k => el.dataset.masquer && k + 1 >= Number(el.dataset.masquer);
      function montrer() {
        const liste = el.querySelector(".ad-liste");
        liste.innerHTML = "";
        const mem = [[etapes[0].nn, etapes[0].n]];
        etapes.slice(0, n).forEach((e, k) => {
          const q = Math.floor(e.n / e.d), r = e.n % e.d;
          mem.push([e.q, q], [e.r, r]);
          const paquets = Array.from({ length: Math.min(q, 12) }, () => `<div class="ad-paquet" style="flex:${e.d}">${e.d}</div>`).join("") + (q > 12 ? `<div class="ad-paquet" style="flex:${e.d}">…</div>` : "");
          liste.insertAdjacentHTML("beforeend", `<div class="ad-etape">
            <div><b>Étape ${k + 1} :</b> dans <b>${e.n}</b>, combien de paquets de <b>${e.d}</b> (${e.paquet}) ? Et combien reste-t-il ?</div>
            <div class="ad-barre">${paquets}<div class="ad-reste" style="flex:${Math.max(r, e.d * .08)}">${r}</div></div>
            <div class="ad-calc"><code>${e.q} = ${cache(k) ? "?" : e.nn} // ${e.d}</code><span>→ <b>${q}</b> paquet${q > 1 ? "s" : ""} complet${q > 1 ? "s" : ""} (en bleu) : ${e.q} vaut <b>${q}</b></span>
            <code>${e.r} = ${cache(k) ? "?" : e.nn} % ${e.d}</code><span>→ il reste <b>${r}</b> (en jaune) : ${e.r} vaut <b>${r}</b></span></div></div>`);
        });
        el.querySelector(".ad-memoire").innerHTML = "<b>Mémoire :</b> " + mem.map(([nom, v], i) => `<span class="${i >= mem.length - 2 && n ? "nouveau" : ""}">${nom} = ${v}</span>`).join("");
        el.querySelector(".ad-suiv").disabled = n >= etapes.length;
        if (n >= etapes.length) liste.insertAdjacentHTML("beforeend", `<div class="ad-etape"><div>${el.dataset.fin || ""}</div></div>`);
      }
      el.querySelector(".ad-suiv").addEventListener("click", () => { n++; montrer(); });
      el.querySelector(".ad-zero").addEventListener("click", () => { n = 0; montrer(); });
      montrer();
    });
  }

  const animerTout = z => { animer(z); animerDivisions(z); };
  global.Commun = { aide, ferme, depuisAdresse, conseils, animer: animerTout };
})(window);

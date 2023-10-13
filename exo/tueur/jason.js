// Caractéristiques des personnages
const caracteristiques = [
    {
      nom: "Nerd",
      probabiliteDeMort: 0.3,
      probabiliteDeDegat: 0.5,
      probabiliteDeDegatMortel: 0.2,
    },
    {
      nom: "Sportif",
      probabiliteDeMort: 0.2,
      probabiliteDeDegat: 0.7,
      probabiliteDeDegatMortel: 0.1,
    },
    {
      nom: "Blonde",
      probabiliteDeMort: 0.5,
      probabiliteDeDegat: 0.4,
      probabiliteDeDegatMortel: 0.1,
    },
  ];
  
  // Survivants
  const survivants = [];
  for (let i = 0; i < 5; i++) {
    const nom = [
      "Jean",
      "Marie",
      "Pierre",
      "Paul",
      "Sophie",
      "Thomas",
      "Elise",
      "Lucas",
      "Noemie",
    ].sample();
    const caracteristique = caracteristiques.sample();
    survivants.push({
      nom,
      caracteristique,
    });
  }
  
  // Tueur
  const jason = {
    nom: "Jason",
    pointsDeVie: 100,
  };
  
  // Boucle de jeu
  while (jason.pointsDeVie > 0 && survivants.length > 0) {
    // Jason attaque un survivant
    const survivant = survivants.sample();
    const resultat = attaque(jason, survivant);
  
    // Mise à jour de l'état du jeu
    if (resultat.type === "mort") {
      survivants.splice(survivants.indexOf(survivant), 1);
    } else if (resultat.type === "degat") {
      jason.pointsDeVie -= resultat.degats;
    }
  
    // Affichage du message
    console.log(resultat.message);
  }
  
  // Affichage du résultat
  if (jason.pointsDeVie === 0) {
    console.log("Jason est mort !");
  } else {
    console.log("Les survivants ont gagné, mais RIP à", survivants.map((s) => s.nom).join(", "));
  }
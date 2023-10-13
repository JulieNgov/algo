
let amorcer = false
let BombChance = 0
AttaquantKillChance = 0
DefenseursKillChance = 0
manche = 0
DefenseursGagnés = 0
AttaquantsGagnés = 0
let attacker
let defender
let smoke = false
let round = 0

while(manche < 13) {
    round = 0
    let attaquants = ['omen', 'phoenix', 'jett', 'fade', 'chamber']
    let defenseurs = ['omen', 'phoenix', 'jett', 'fade', 'chamber']
    manche++
    console.log("Manche " + manche)

            //Random meurt
            let randomIndex = Math.floor(Math.random() * (attaquants.length));
            let randomIndexTeam = Math.floor(Math.random() * (attaquants.length + defenseurs.length));
            let tab = (randomIndexTeam < attaquants.length) ? "attaquants" : "defenseurs";
            let randomCharacter = tab.includes(randomIndex) ? attaquants[randomIndex] : defenseurs[randomIndex];
            console.log(randomCharacter + " des " + tab + " a été tué")
    
            if(tab == "attaquants") {
                attaquants.splice(Math.floor(Math.random() * attaquants.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
                BombChance = 0.6
                //Amorcé
                if(BombChance >= Math.random()) {
                    amorcer = true;
                    console.log('La bombe a été amorcée')
                } else {
                    console.log("La bombe n'a pas été amorcée")
                }
            } else {
                defenseurs.splice(Math.floor(Math.random() * defenseurs.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
                BombChance = 0.4
                if(BombChance >= Math.random()) {
                    amorcer = true;
                    console.log('La bombe a été amorcée')
                } else {
                    //Pas amorcé
                    console.log("La bombe n'a pas été amorcée")
                }
            }

    while(attaquants.length > 0 || defenseurs.length > 0) {

        if (Math.random() <= 0.5 && amorcer == false) {
            console.log("Omen a posé un smoke")
            smoke = true
        }

        if(amorcer == true) {
            //Amorcé
                //Duel 70:30
                if (Math.random() <= 0.7) {
                    round++
                    console.log(round + "è round")
                            //Random perso
                    attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                    defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                    console.log(attacker + " des attaquants a tué " + defender)
                    defenseurs.splice(Math.floor(Math.random() * defenseurs.length), 1)
                    console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
                } else {
                    round++
                    console.log(round + "è round")
                            //Random perso
                    attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                    defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                    console.log(defender + " des défenseurs a tué " + attacker)
                    attaquants.splice(Math.floor(Math.random() * attaquants.length), 1)
                    console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
                }

        } else {
            //Pas amorcé
            if (Math.random() <= 0.6 && smoke == true) {
                round++
                console.log(round + "è round")
                //Random perso
                attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                console.log(attacker + " des attaquants a tué " + defender)
                defenseurs.splice(Math.floor(Math.random() * defenseurs.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
            } else {
                        //Random perso
                round++
                console.log(round + "è round")
                attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                console.log(defender + " des défenseurs a tué " + attacker)
                attaquants.splice(Math.floor(Math.random() * attaquants.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
            }

            if (Math.random() <= 0.5 && smoke == false) {
                round++
                console.log(round + "è round")
                //Random perso
                attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                console.log(attacker + " des attaquants a tué " + defender)
                defenseurs.splice(Math.floor(Math.random() * defenseurs.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
            } else {
                        //Random perso
                round++
                console.log(round + "è round")
                attacker = attaquants[Math.floor(Math.random() * attaquants.length)];
                defender = defenseurs[Math.floor(Math.random() * defenseurs.length)];

                console.log(defender + " des défenseurs a tué " + attacker)
                attaquants.splice(Math.floor(Math.random() * attaquants.length), 1)
                console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
            }
        }

        if(round%3 == 0) {
            attaquants.forEach(element => {
                if(element == "jett") {
                    if (Math.random() <= 0.7) {
                        console.log("jett des attaquants a tué " + defender)
                        defenseurs.splice(Math.floor(Math.random() * defenseurs.length), 1)
                        console.log("Il reste " + defenseurs.length + " défenseurs et " + attaquants.length + " attaquants")
                    }
                }
            });
        }

        if(defenseurs.length === 0) {
            console.log("Les attaquants ont gagné la " + manche + "ème manche avec ")
            attaquants.forEach(element => {
                console.log(element)
            })
            AttaquantsGagnés++
            break
        } else if (attaquants.length === 0) {
            console.log("Les défenseurs ont gagné la " + manche + "ème manche avec ")
            defenseurs.forEach(element => {
                console.log(element)
            })
            DefenseursGagnés++
            break
        }
    }

    if(manche == 13) {
        if(DefenseursGagnés > AttaquantsGagnés) {
            console.log("Les défenseurs ont gagné !!!!!!")
        } else {
            console.log("Les attaqueurs ont gagné !!!!!!")
        }
    } else{
        continue
    }
}
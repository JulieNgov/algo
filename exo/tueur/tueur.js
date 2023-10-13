class Tueur {
    constructor(name, health) {
        this.name = name
        this.health = health
    }

    GetAttacked(perso) {
            this.health = this.health - 10
            console.log(perso + " a esquivé, " + this.name + " a " + this.health + " de vie")
    }

    Kill(perso) {
        this.health = this.health - 15
        console.log(this.name + " a tué" + perso + " et a " + this.health + " de vie")
    }
}

class Personnage {
    constructor(name, type, deathluck, degatluck) {
        this.name = name
        this.type = type
        this.deathluck = deathluck
        this.degatluck = degatluck
    }

    DeathAttackLuck() {
        if(this.deathluck >= Math.random()) {
            return true
        } else {
            return false
        }
    }
}

const tueur = new Tueur("Tueur", 100)

carac = [
    "cool",
    "timide",
    "flemmard",
    "bavard",
    "fou",
    "sérieux",
    "stupide",
    "fiable",
    "prudent"
]

noms = [
    "nerd",
    "sportif",
    "blond",
    "populaire",
    "intello",
    "calme",
    "sexy"
]

const survivants = []


for(let i=0; i<5; i++) {
    let nom = noms[Math.floor(Math.random()*noms.length)]
    let type = carac[Math.floor(Math.random()*carac.length)]
    new Personnage(nom, type, Math.random(), Math.random())
    survivants.push({
        nom,
        type
    })
}

while(tueur.health > 0 && survivants.length > 0) {
    console.log(survivants[1])
}
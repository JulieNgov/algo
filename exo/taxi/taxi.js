class Voyageur {
    constructor(name, sante) {
        this.name = name
        this.sante = sante
    }
}

let musiques = [
    "Anissa - Wejdene",
    "Cool - un",
    "Musdeux - deux",
    "Mustrois - trois",
    "Musquatre - quatre"
]

let john = new Voyageur("John", 30)
let changement = 0
let feux = 30


        for(let i=0; i<30; i++) {
        let radio = musiques[Math.floor(Math.random()*musiques.length)]
            feux = feux - 1
            console.log(feux + " feux left");
            if(radio == "Anissa - Wejdene") {
                john.sante--
                console.log(john.name + " has " + john.sante + " health")
                changement++
            } else {
            }
            if(feux === 0 && john.sante > 0) {
                console.log("Success with " + changement + " changements")
            } else if (john.sante == 0) {
                console.log("Explosion")
            }
        }
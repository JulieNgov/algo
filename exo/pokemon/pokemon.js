class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        if(this.luck >= Math.random()) {
            return true;
        } else {
            return false;
        }
    }

    attackPokemon(opponent) {
        let degats = this.attack - opponent.defense
        opponent.hp = opponent.hp - degats
        console.log(opponent.name + " took " + degats + " dmg, he has " + opponent.hp + " hp")
    }
}

let pikachu = new Pokemon("Pikachu", 9, 3, 40, 0.49853)
let bulbasaur = new Pokemon("Bulbasaur", 10, 4, 35, 0.6998)


while(pikachu.hp >= 0 || bulbasaur.hp >= 0) {
    if (pikachu.isLucky()) {
        pikachu.attackPokemon(bulbasaur)
        if(pikachu.hp <=0) {
            console.log("Pikachu lost")
            break
        }
    } else {
        console.log("Pikachu missed")
        continue
    }

    if (bulbasaur.isLucky()) {
        bulbasaur.attackPokemon(pikachu)
        if (bulbasaur.hp <=0) {
            console.log("Bulbasaur lost")
            break
        }
    } else {
        console.log("Bulbasaur missed")
        continue
    }
}

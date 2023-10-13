// object : {}
//array : []

let a = 2;
let b = 2;
let c = 1;

//      if - else

if (a == b) {
    console.log("C'est égal")
} if (c < b && a+c != 3) {
    console.log("C'est ok")
}
else {
    console.log("C'est raté")
}


// Manière ternaire de if

a == b ? console.log('vrai') : console.log('faux')


//      Switch - Case

switch(a) {
    case 2:
        console.log("C'est 2")
        break
    case 3:
        console.log("C'est 3")
        break
    case "Le texte":
        console.log("C'est un texte")
        break
    default:
        console.log("Le reste")
}

a = 4
b = 4
c = 3

switch(a){
    case b:
        console.log("égal à b")
        break
    case c:
        console.log("égal à c")
        break
    default:
        console.log("égal à rien")
}


//      for - while


for(let i=0; i<a; i++) {
    console.log("oklm")
}

let i = 0
a = 3

while(a < 9) {
    a++
    if (a == 8) break
    if (a == 7) continue
    console.log(a)
}


//      Fonctions

a = "Jean"
b = "Paul"
let result = checkName(a, b)

function checkName(nom1, nom2) {
    return nom1 == nom2;
}

console.log(result)


//      Tableaux


let sports = [
    "foot",
    "basket",
    "tennis"
]

//Ajout
sports.push('pétanque')
//Supp le 3eme élément du tableau, et on supprime 1 élément, ici tennis
sports.splice('2, 1')

//      ForEach pour les tableaux

sports.forEach((sport) => {
    console.log(sport)
})


let names = [
]

names.push('Vincent', 'Paul', 'Arthur')

names.forEach((nom) => {
    console.log(nom + " va à la pêche")
});

//      Objects : liste

let student = {
    name : "julie",
    age : 20,
    city : "nsm"
}

let count = null

for(let value in student) {
    let caracters = student[value].toString().length
    count += caracters
}


count % 2 == 0 ? console.log(count + ' is pair') : console.log(count + ' is impair')

//      Les Class

class Student {
    //Mettre les différentes caractéristiques de la classe
    constructor(name, html, css, javascript, php) {
        this.name = name
        this.html = html
        this.css = css
        this.javascript = javascript
        this.php = php
    }

    getPHPLevel() {
        console.log(this.name + ' a ' + this.php + ' en PHP')
    }
}

new Student("Michel", 5, 4, 1, 3)
new Student("Nicolas", 5, 5, 5, 5)

michel.getPHPLevel()
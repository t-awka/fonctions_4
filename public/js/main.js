// exo1
function lenom(a) {
    return console.log(a);
}
lenom("bonjour")

// exo2
function calcul(nbr1, nbr2) {
    return console.log(nbr1 + nbr2);
}
calcul(5, 5);

// exo3
function prenom(pre) {
    return console.log("Bonjour " + pre);
}
prenom("Tania");

// exo4
function lafonction(n1, n2, n3) {
    return console.log(typeof n1,typeof n2,typeof n3);
}
lafonction("tania", 42, true);


// // exo logique // //

// exo1
function jeux() {
    let nombre = Math.ceil(Math.random()*20);
    let x;
    let y;
    let essaie = 0;
    while (essaie != 5 && x != nombre) {
        x = +prompt('Choisir un nombre au hasard entre 1 et 20');
        y = Math.abs(nombre-x);
        if (y == 0) {
            essaie = 5;
        } else if (y == 1) {
            alert('BRULANT');
        } else if (y == 2) {
            alert('CHAUD');
        } else if (y <= 5) {
            alert('TIEDE');
        } else if (y > 5) {
            alert('FROID');
        }
        essaie++;
    }
    if (x == nombre) {
        alert('Bien joué');
    } else {
        alert('perdu');
    }
}
jeux();

//exo2
let tab = ["aBc","dEf",10,20,true,false];

function tableau() {
    tab.forEach((element, index) => {
        //const element = tab[index]
        if (typeof element === "string") {
            tab[index] = element.charAt(0).toUpperCase()+element.substr(1).toLowerCase();
        } else if (typeof element === "number") {
            tab[index] = Math.pow(element, 2);
        } else if (typeof element === "boolean") {
            //condtion ternaire
            element == true ? tab[index] = false : tab[index] = true;
            //ci dessus condition ternaire contraction du if et du else;
            // if (element == true) {
            //     tab[index] = false;
            // } else {
            //     tab[index] = true;
            // }

            //logical NOT(!)
            //tab[index] = !element;
        }
    });
}

tableau();
console.log(tab);

// //exo3
let prenom;
let salaire;
let ajout;
let moinMoyenne = [];
let moyenne = [];
let plusMoyenne = [];
function argent(prenom, salaire) {
    ajout = confirm("Souhaite tu ajouté ?");
    while (ajout != false) {
        prenom = prompt('qui est le salarié');
        salaire = prompt("Combien est ce qu'il gagne ?");
        if (salaire < 1600) {
            moinMoyenne.push(prenom);
        } else if (salaire >= 1600 && salaire < 1800) {
            moyenne.push(prenom);
        } else if (salaire > 1800) {
            plusMoyenne.push(prenom);
        }
        ajout = confirm('Souhaite tu ajouter un salarié ?');
    }
    return moinMoyenne,moyenne,plusMoyenne;
}

argent();
console.log(moinMoyenne, moyenne, plusMoyenne);

//exo4
let prenom;
let age;
let concert = [];
let ajout;
function liste(prenom, age) {
    ajout = confirm("ajouter un participant");
    while (ajout != false && concert.length != 7) {
        prenom = prompt("comment t'appel tu ?");
        age = prompt('quel age as tu ?');
        if (age >= 18) {
            concert.push(prenom.charAt(0).toUpperCase()+prenom.substring(1).toLowerCase());
        } else {
            alert("tu ne rentre pas")
        }
        ajout = confirm("ajouter un participant");
        if (concert.length == 7) {
            alert("Le concert est complet et limité à 7 participants et ce à fin de respecter les mesures de distanciations et ce même si on est à Forest National");
        }
    }
    console.log(concert);
}

liste()

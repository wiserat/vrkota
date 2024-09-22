let hey = process.stdout.write("Name: ");
for await (const line of console) {
    console.log(`Hello, ${line}`);
    break;
}

let numberOne = 0;
let numberTwo = 0;
process.stdout.write("Number one: ");
for await (const line of console) {
    numberOne = parseInt(line);
    break;
}
process.stdout.write("Number two: ");
for await (const line of console) {
    numberTwo = parseInt(line);
    break;
}
console.log(numberOne + numberTwo + ` a cislo ${numberOne === numberTwo ? 'jsou stejna' : numberOne > numberTwo ? 'One je vetsi' : 'Two je vetsi'}`);
if (numberOne % 2 === 0) {
    console.log("cislo One je sude")
}
if (numberOne >= 18) {
    console.log("cislo One muze pit pivo")
} else if (numberOne >= 15) {
    console.log(`cislo One muze pit pivo za ${18 - numberOne} roky`)
} else {
    console.log("cislo One nemuze pit pivo")
}

for (let i = 1; i <= 100; i++) {
    console.log(i + " piv");
}

let jmena = ["gaylord", "jebal", "hrdlorez"]
for (let jmeno in jmena) {
    console.log(jmena[jmeno])
}
jmena.sort()
console.log(jmena)
let cisla = [4, 1, 8, 3];
console.log(cisla)
let sum = 0;
for (let i in cisla) {
    sum += cisla[i];
}
let aritmetic = sum / cisla.length;
console.log(aritmetic);

function greet(name:string) {
    console.log("hello, " + name);
}
greet("bingus");

function sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            let save = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = save;
            arr = sort(arr)
        }
    }
    return arr;
}
console.log(sort(cisla))

class Clovek {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    get() {
        console.log(this.name + this.age)
    }
}
let clovek = new Clovek("gya", 8);
clovek.get();

class Auto {
    znacka:string;
    model:string;
    rok:number;

    constructor(znacka:string,model:string,rok:number) {
        this.znacka = znacka;
        this.model = model;
        this.rok = rok;
    }

    get() {
        console.log(this.znacka, this.model, this.rok);
    }
}
let auto = new Auto("ford", "firebird", 1979);
auto.get()

class Kniha {
    nazev:string;
    autor:string;
    rok:number;

    constructor(nazev:string, autor:string, rok:number) {
        this.nazev = nazev;
        this.autor = autor;
        this.rok = rok;
    }
}
let kniha1 = new Kniha("gaylord", "firebird", 1979);
let kniha2 = new Kniha("gaylord", "jebal", 1979);
let kniha3 = new Kniha("gaylord", "hrdlorez", 1979);
let knihy = [kniha1, kniha2, kniha3];
function knihyNazvy(knihy: Kniha[]) {
    for (let i = 0; i < knihy.length; i++) {
        console.log(knihy[i].nazev)
    }
}
knihyNazvy(knihy)


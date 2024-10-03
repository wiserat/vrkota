let num:number  = 0;
let s:string = "nig";
let b:boolean = false;
let arr: number[] = [1,2];

function soucin(pat:number, mat:number, showResults:boolean = false):number {
    if (showResults) {
        console.log(pat * mat);
    }
    return pat * mat;
}

function getFullName(name:string, last:string):string {
    console.log(name + " " + last)
}

class Car {
    make:string;
    model:string;
    year:number;
    
    constructor(make:string, model:string, year:number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let mojeAuto: Car = new Car('amish.co', 'buggy', 1816);
console.log(mojeAuto.make, mojeAuto.model);

function greet(greeting:string = "Hello", name:string):string {
    return greeting + ', ' + name + '!';
}

function printId(id:string|number):void {
    console.log(typeof id,  id);
}

function identity<T>(arg:T):T {
    return arg;
}

console.log(identity<number>(69));
console.log(identity<string>('gay'));
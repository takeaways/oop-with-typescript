type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
}

const BEANS_GRAM_PER_SHOW= 7;
let coffeeBeans = 0;
function makeCoffee(shots: number):CoffeeCup{
    if(coffeeBeans < shots * BEANS_GRAM_PER_SHOW){
        throw new Error("Not Enough Coffee Beans");
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOW;

    return {
        shots,
        hasMilk: false
    }
}

coffeeBeans += 3 * BEANS_GRAM_PER_SHOW;
const coffee = makeCoffee(2);
console.log(coffee)
type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
}

class CoffeeMaker{
    static BEANS_GRAM_PER_SHOW= 7;
    coffeeBeans:number = 0;

    constructor(coffeeBeans:number){
        this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number):CoffeeCup{
        if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOW){
            throw new Error("Not Enough Coffee Beans");
        }
    
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOW;
    
        return {
            shots,
            hasMilk: false
        }
    }
    
}

const maker = new CoffeeMaker(32);
console.log(maker)

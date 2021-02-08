type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
}

//public - default
//private - only in the class
//protected - only in a child
class CoffeeMaker{
    private static BEANS_GRAM_PER_SHOW= 7;
    private coffeeBeans:number = 0;

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

    fillCoffeeBeans(beans:number){
        if(beans <0){
            throw new Error('value for beans should be grather than 0');
        }
        this.coffeeBeans = beans;
    }
    
}

const maker = new CoffeeMaker(32);
maker.fillCoffeeBeans(300);
// maker.coffeeBeans = -3; //invalid

type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
}

interface CoffeeMaker{
    makeCoffee(shots:number):CoffeeCup
}
class CoffeeMachine implements CoffeeMaker{
    private static BEANS_GRAM_PER_SHOW= 7;
    private coffeeBeans:number = 0;

    constructor(coffeeBeans:number){
        this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots:number){
        if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOW){
            throw new Error("Not Enough Coffee Beans");
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOW;
        console.log(`grinding.... ${shots}shots`)
    }

    private preheat(){
        console.log(`heating....`)
    }

    private extract(shots:number):CoffeeCup{
        console.log(`pulling... ${shots}`)
        return {
            shots,
            hasMilk:false
        }
    }

    makeCoffee(shots: number):CoffeeCup{
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots)
    }

    fillCoffeeBeans(beans:number){
        if(beans <0){
            throw new Error('value for beans should be grather than 0');
        }
        this.coffeeBeans = beans;
    }
    
}

const maker:CoffeeMachine = new CoffeeMachine(32);
maker.fillCoffeeBeans(300);
const coffee = maker.makeCoffee(3);
console.log(coffee)

// const maker2:CoffeeMaker = new CoffeeMachine(32);
// maker2.fillCoffeeBeans(300);
// const coffee2 = maker2.makeCoffee(3);
// console.log(coffee2)


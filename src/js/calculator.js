export class Calculator{
    constructor(age){
        this.age = age;
    }

    ageSeconds(){
        return this.age * 365 * 24 * 60 * 60;
    }

    ageMercury(){
        return Math.round((this.age / 0.24) * 100) / 100 ;
    }

    ageVenus(){
        return Math.round((this.age / 0.62) * 100) / 100;
    }

    ageMars(){
        return Math.round((this.age / 1.88) * 100) / 100;
    }

    ageJupiter(){
        return Math.round((this.age / 11.86) * 100) / 100;
    }
}

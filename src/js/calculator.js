export class Calculator{
    constructor(age){
        this.age = age;
    }

    ageSeconds(){
        return this.age * 365 * 24 * 60 * 60;
    }

    ageMercury(){
        return this.age / 0.24;
    }

    ageVenus(){
        return Math.round(this.age / 0.62);
    }
}

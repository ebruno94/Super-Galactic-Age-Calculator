export class Calculator{
    constructor(age){
        this.age = age;
    }

    ageSeconds(){
        return this.age * 365 * 24 * 60 * 60;
    }
}

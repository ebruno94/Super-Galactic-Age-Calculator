export class Calculator{
    // constructor(age){
    //     this.age = age;
    // }

    ageSeconds(age){
        return age * 365 * 24 * 60 * 60;
    }

    ageMercury(age){
        return Math.round((age / 0.24) * 100) / 100 ;
    }

    ageVenus(age){
        return Math.round((age / 0.62) * 100) / 100;
    }

    ageMars(age){
        return Math.round((age / 1.88) * 100) / 100;
    }

    ageJupiter(age){
        return Math.round((age / 11.86) * 100) / 100;
    }

}

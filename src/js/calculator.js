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

    // averageLE = average Life Expectancy
    expectancy(planet, averageLE, age){
        if (planet.toLowerCase() === "earth"){
            return averageLE - age;
        } else if (planet.toLowerCase() === "mercury"){
            return ageMercury(averageLE) - ageMercury(age);
        } else if (planet.toLowerCase() === "venus"){
            return ageVenus(averageLE) - ageVenus(age);
        } else if (planet.toLowerCase() === "mars"){
            return ageMars(averageLE) - ageMars(age);
        } else if (planet.toLowerCase() === "jupiter"){
            return ageJupiter(averageLE) - ageJupiter(age);
        }
    }

    dateDifference(year1, month1, day1, year2, month2, day2){
        var date1 = new Date(`${year1}-${month1}-${day1}`);
        var date2 = new Date(`${year2}-${month2}-${day2}`);
    }
}

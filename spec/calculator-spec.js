import {Calculator} from "./../src/js/calculator.js";

describe('Calculator', function() {
  // it('should test that Calculator stores age', function(){
  //   let newCalculator = new Calculator(15);
  //   expect(newCalculator.age).toEqual(15);
  // });
  const newCalculator = new Calculator();
  it('should test that given age in years will be turned to seconds', function(){
     expect(newCalculator.ageSeconds(1)).toEqual(31536000);
  });
  it('should return correct conversion of Earth age to Mercury Age', function(){
     expect(newCalculator.ageMercury(12)).toEqual(50.00);
  });
  it('should return correct conversion of Earth age to Venus age', function(){
      expect(newCalculator.ageVenus(12)).toEqual(19.35);
  })
  it('should return correct conversion of Earth age to Mars', function(){
      expect(newCalculator.ageMars(12)).toEqual(6.38);
  });
  it('should return correct conversion of Earth age to Jupiter age', function(){
      expect(newCalculator.ageJupiter(12)).toEqual(1.01);
  });
  it('should return correct number of years left given age and planet', function(){
      expect(newCalculator.expectancy("earth", 69.66, 12)).toEqual(57.66);
  });

  it('MERCURY should return correct number of years left given age and planet', function(){
      expect(newCalculator.expectancy("MERCURY", 69.66, 12)).toEqual(240.25);
  });

  it('MARS should return correct number of years left given age and planet', function(){
      expect(newCalculator.expectancy("MaRs", 69.66, 12)).toEqual(30.67);
  });

  it('JUPITER should return correct number of years left given age and planet', function(){
      expect(newCalculator.expectancy("jupiter", 69.66, 12)).toEqual(4.86);
  });

  it('should return the correct difference between dates in seconds', function(){
     expect(newCalculator.dateDifference(2018, "March", 16, 2018, "March", 15)).toEqual(86400);
  });
});

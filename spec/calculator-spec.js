import {Calculator} from "./../src/js/calculator.js";

describe('Calculator', function() {
  // it('should test that Calculator stores age', function(){
  //   let newCalculator = new Calculator(15);
  //   expect(newCalculator.age).toEqual(15);
  // });
  it('should test that given age in years will be turned to seconds', function(){
    let newCalculator = new Calculator();
    expect(newCalculator.ageSeconds(1)).toEqual(31536000);
  });
  it('should return correct conversion of Earth age to Mercury Age', function(){
     let newCalculator = new Calculator();
     expect(newCalculator.ageMercury(12)).toEqual(50.00);
  });
  it('should return correct conversion of Earth age to Venus age', function(){
      let newCalculator = new Calculator();
      expect(newCalculator.ageVenus(12)).toEqual(19.35);
  })
  it('should return correct conversion of Earth age to Mars', function(){
      let newCalculator = new Calculator();
      expect(newCalculator.ageMars(12)).toEqual(6.38);
  });
  it('should return correct conversion of Earth age to Jupiter age', function(){
      let newCalculator = new Calculator();
      expect(newCalculator.ageJupiter(12)).toEqual(1.01);
  });
  it('should return number of years a user has left to live on given planet', function(){
      let newCalculator = new Calculator();
      expect(newCalculator.ageJupiter(12)).toEqual(1.01);
  });
});

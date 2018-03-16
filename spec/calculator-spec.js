import {Calculator} from "./../src/js/calculator.js";

describe('Calculator', function() {
  it('should test that Calculator stores age', function(){
    let newCalculator = new Calculator(15);
    expect(newCalculator.age).toEqual(15);
  });
  it('should test that given age in years will be turned to seconds', function(){
    let newCalculator = new Calculator(1);
    expect(newCalculator.ageSeconds()).toEqual(31536000);
  });
  it('should return correct conversion of Earth age to Mercury Age', function(){
     let newCalculator = new Calculator(12);
     expect(newCalculator.ageMercury()).toEqual(50.00);
  });
  it('should return correct conversion of Earth age to Venus age', function(){
      let newCalculator = new Calculator(12);
      expect(newCalculator.ageVenus()).toEqual(19.35);
  })
  it('should return correct conversion of Earth age to Mars', function(){
      let newCalculator = new Calculator(12);
      expect(newCalculator.ageMars()).toEqual(6.38);
  });
  it('should return correct conversion of Earth age to Jupiter age', function(){
      let newCalculator = new Calculator(12);
      expect(newCalculator.ageJupiter()).toEqual(1.01);
  });
});

import {Calculator} from "./../src/js/calculator.js";

describe('Calculator', function() {
  it('should test that Calculator stores age', function(){
      let newCalculator = new Calculator(15);
      expect(newCalculator.age).toEqual(15);
  });
});

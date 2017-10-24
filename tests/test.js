import chai from 'chai'
const expect = chai.expect
import rainDrops from '../src/app.js'


describe('rainDrops', () => {
    describe('it should return a Pling, Plang or Plong if the number contains 3, 5 or 7 as prime factors', () => {

      it('should return "Pling" when the number 3 is passed as an argument', () => {
        expect(rainDrops(3)).to.be.equal("Pling")
      });
      it('should return "Plang" when the number 5 is passed as an argument', () => {
        expect(rainDrops(5)).to.be.equal("Plang")
      });
      it('should return "Plong" when the number 7 is passed as an argument', () => {
        expect(rainDrops(7)).to.be.equal("Plong")
      });
      
    });

    describe('it should return a combination of Pling, Plong or Plang if the prime factors of a number is a combination 3, 5, or 7', () => {
        
        it('should return "PlingPlang" when the number 21 is passed as an argument', () => {
            expect(rainDrops(21)).to.be.equal("PlingPlong")
        });
        it('should return "PlangPlong" when the number 35 is passed as an argument', () => {
            expect(rainDrops(35)).to.be.equal("PlangPlong")
        });
        it('should return "PlingPlang" when the number 1755 is passed as an argument', () => {
            expect(rainDrops(1755)).to.be.equal("PlingPlang")
        });
    })


    describe('it should handle invalid inputs', () => {
        it('should return "Argument must be a positive integer" when the number -2 is passed as an argument', () => {
          expect(rainDrops(-2)).to.be.equal('Argument must be a positive integer')
        });
        it('should return "Function requires an argument" when no value is passed as an argument', () => {
            expect(rainDrops()).to.be.equal("Function requires an argument")
        });
        it('should return zero when zero is passed as an argument', () => {
            expect(rainDrops(0)).to.be.equal(0)
        });

        
    })

    describe('it should return the string of numbers that that do no have 3, 5 and 7 as factors', () => {
        it('should return "2" when the number 2 is passed as an argument', () => {
            expect(rainDrops(2)).to.be.equal("2")
          });
        it('should return "34" when the number 34 is passed as an argument', () => {
            expect(rainDrops(34)).to.be.equal("34")
        });
        it('should return "46" when the number 46 is passed as an argument', () => {
            expect(rainDrops(46)).to.be.equal("46")
        });
    })
});
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(numOne,numTwo,operator) {
    this.numOne = numOne
    this.numTwo = numTwo
    this.operator = operator

    this.sum = function() {
        return (numOne + numTwo)
    }
    this.subtraction = function() {
        return (numOne - numTwo)
    }
    this.multiplication = function() {
        return (numOne * numTwo)
    }
    this.division = function() {
        return (numOne / numTwo)
    }
}


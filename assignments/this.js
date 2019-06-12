/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle one is the window/object binder. When we call on 'this' in the global scope we will get returned back to us everything Javascript gives us access to.

* 2. Implicit binding is when we use 'this' to call on our functions. This will refer to the Object that precedes the 'dot'.

* 3. The third principle 'New' is used when we want to create a new class using a constructor. We use the 'new' keyword to tie the new object to the constructor.

* 4. Explicit binding is some we used when we want to change or override a constructors values. We use Call and Apply to give 'this' object new values. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const myCar={
    year:1999,
    make:'Toyota',
    model:'Avalon',
    motor:'3.0L V6',
    describeCar: function(){
        return `My car is ${this.year} ${this.make} ${this.model} and it has a ${this.motor} engine.`
    }
}

console.log(myCar.describeCar());

// Principle 3

// code example for New Binding

function carObj (year, make, model,motor){
    this.year = year;
    this.make = make;
    this.model = model;
    this.motor = motor; 
}
carObj.prototype.describeCar = function(){
    return `My car is ${this.year} ${this.make} ${this.model} and it has a ${this.motor} engine.`
}

const lamborghiniDiablo = new carObj(1999, 'Lamborghini', 'Diablo', '5.7L V12')
console.log(lamborghiniDiablo.describeCar());

// Principle 4

// code example for Explicit Binding

const ferrariF50 = new carObj(1996, 'Ferrari', 'F50', '3.5L V12')

console.log(lamborghiniDiablo.describeCar.apply(ferrariF50))
console.log(ferrariF50.describeCar.apply(lamborghiniDiablo))


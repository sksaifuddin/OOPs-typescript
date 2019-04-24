var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.greeting = message;
    }
    Greeting.prototype.greet = function () {
        return this.greeting;
    };
    return Greeting;
}());
var greeting = new Greeting("Hello");
console.log(greeting.greet());

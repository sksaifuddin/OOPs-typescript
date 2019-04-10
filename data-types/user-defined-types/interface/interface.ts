// creating an interface
interface Counter {
    // function definiton - takes arugument start of type number and returns a string
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    // typecasting
    let counter =  function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
} 




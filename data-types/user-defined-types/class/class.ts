class Greeting {
    // field
    greeting: string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet(): string {
        return this.greeting;
    }
}

let greeting = new Greeting("Hello");
console.log(greeting.greet());
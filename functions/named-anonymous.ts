
// named functions
function add(x:number, y:number): number {
    return x+y;
}

const fun1 = add(2,3);
console.log(fun1);


// anonymous functions
const fun2 = (x:number,y:number) => x+y;
console.log(fun2(2,3));

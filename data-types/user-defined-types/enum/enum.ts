// NUmeric Enums
enum Direction {
    Up = 1 ,
    Down,
    Left,
    Right,
}

console.log(Direction.Up) //1
console.log(Direction.Down) //2
console.log(Direction.Left) //3
console.log(Direction.Right) //4

// String Enums
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

console.log(PrintMedia.Newspaper) 

// Heterogenous Enums
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

console.log(BooleanLikeHeterogeneousEnum.No);
console.log(BooleanLikeHeterogeneousEnum.Yes);

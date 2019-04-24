# Typescript
Learning the In and Out of Typescript

TypeScript — as its name suggests — is the typed version of JavaScript. This means we can specify types to different variables at the time of declaration.

## Data types

### Any Type

The any data type is the superset of all the data types in TypeScript. Giving any variable the type of any is equivalent to opting out of type checking for a variable.

### Built in Data types
1. String
2. Number
3. Boolean
4. Undefined
5. Null

### User Defined Data types

1. Arrays
2. Enum
3. Tuple
4. Class
5. Interface

### Enum

Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 

1. Numeric Enums

Enums are always assigned numeric values when they are stored. The first value always takes the numeric value of 0, while the other values in the enum are incremented by 1.
Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum.

2. String Enums

String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.

3. Heterogenous Enums

Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so.

#### Reverse Mapping

Enum in TypeScript supports reverse mapping. It means we can access the value of a member and also a member name from its value.

### Tuple

Tuple is a new data type which includes set of values of different data types. All the Array methods can be applied to the tuple.Tuples are mutable which means you can update or change the values of tuple elements.

### Interface

An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

In TypeScript, the core focus is on type-checking which enforces the use of a particular type. Interfaces are a way of naming these types. It’s basically a group of related methods and properties that describe an object.

It is actually a concept of abstraction and encapsulation.In object oriented programming, an interface generally defines the set of methods (or messages) that an instance of a class that has that interface could respond to.

consider the following situation,

```
You are in the middle of a large, empty room, when a zombie suddenly attacks you.
You have no weapon.
Luckily, a fellow living human is standing in the doorway of the room.
"Quick!" you shout at him. "Throw me something I can hit the zombie with!"

```
Now consider:
You didn't specify (nor do you care) exactly what your friend will choose to toss;
But it doesn't matter, as long as:

It's something that can be tossed (He can't toss you the sofa)

It's something that you can grab hold of (Let's hope he didn't toss a shuriken)

It's something you can use to bash the zombie's brains out (That rules out pillows and such)

It doesn't matter whether you get a baseball bat or a hammer -
as long as it implements your three conditions, you're good.

To sum it up:

When you write an interface, you're basically saying: "I need something that..."

### Class

In object-oriented programming, a class is the template of objects. A class defines how an object would look like in terms of that object’s features and functionalities. A class also encapsulates data for the object.Use the class keyword to declare a class in TypeScript.



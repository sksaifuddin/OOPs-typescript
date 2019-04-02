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


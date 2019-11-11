// Prototype is a way to copy properties of one object to another object. OR we can initialize new property to an Object.

address = 'D.No 1-14, GD,.';
function Person(name, age)              // Person is a function
{
    this.name = name;               // These are the properties
    this.age = age;
}
Person.prototype.address = address;     // we assigning existing property address to the Person 
Person.prototype.describe = function()  // we assigning new property describe to the Person 
{
    return this.name + ", " + this.age + " years old. Address"+this.address;
}

 p = new Person('John',23);
p.describe();     //  Output: "John, 23 years old. AddressD.No 1-14, GD,."


// Prototype is a way to copy properties of one object to another object. OR we can initialize new property to an Object.

address = 'D.No 1-14, GD,.';
function Person(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.address = address;
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old. Address"+this.address;
}

 p = new Person('test',23);
p.describe();


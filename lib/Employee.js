// A class is NOT an object
// A class is a template for an object

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name
  }
  getId() {
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return "Employee"
  }
}

module.exports = Employee; // allows you to use this code in any part of your application

// let brooke = new Employee("Brooke", 1, "brookeLikesPink@gmail.com")

// brooke.getName() // returns "brooke"
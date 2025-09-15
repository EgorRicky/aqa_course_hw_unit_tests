class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string" || value.length <= 2) throw new Error('invalid first name');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value.length <= 2) throw new Error('invalid last name');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== "string") throw new Error('invalid input');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== "number" || value <= 0) throw new Error('invalid input');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

class Company {
  #employees;
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  set title(value) {
    if (typeof value !== "string") throw new Error('invalid input');
    this._title = value;
  }

  set phone(value) {
    if (typeof value !== "number") throw new Error('invalid input');
    this._phone = value
  }

  set address(value) {
    if (typeof value !== "string") throw new Error('invalid input');
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) this.#employees.push(employee);
    else throw new Error;
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
  }
}

export { Employee, Company };

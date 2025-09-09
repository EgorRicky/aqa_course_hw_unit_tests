class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  #validateNameInput(input) {
    if (typeof input !== 'string' || input.length < 2 || input.length > 50) { return false }
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const upperChars = charCode >= 65 && charCode <= 90;
      const lowerChars = charCode >= 97 && charCode <= 122;

      if (!upperChars && !lowerChars) { return false }
    }
    return true
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!this.#validateNameInput(value)) throw new Error;
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!this.#validateNameInput(value)) throw new Error;
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.length === 0) throw new Error;
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i);
      const upperChars = charCode >= 65 && charCode <= 90;
      const lowerChars = charCode >= 97 && charCode <= 122;
      const spaceChar = charCode === 32;
      if (!upperChars && !lowerChars && !spaceChar) { throw new Error }
    }
    if (value.trim() === "") throw new Error;
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== "number" || value <= 0 || value >= 10000 || isNaN(value)) throw new Error;
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = employees;
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
    if (typeof value !== "string") throw new Error;
    this._title = value;
  }

  set phone(value) {
    this._phone = value
  }

  set address(value) {
    if (typeof value !== "string") throw new Error;
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

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(el => el.firstName === firstName);
    if (!employee) throw new Error;
    return employee;
  }

  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex(el => el.firstName === firstName);
    if (index === -1) throw new Error;
    return index;
  }

  removeEmployee(firstName) {
    if (this.#employees.find(el => el.firstName === firstName)) {
      this.#employees.splice(this.#getEmployeeIndex(firstName), 1)
    }
    else throw new Error;
  }

  getTotalSalary() {
    if (this.#employees.length === 0) { return 0 }
    else { return this.#employees.reduce((acc, el) => acc + el.salary, 0) }
  }
}

export { Employee, Company };

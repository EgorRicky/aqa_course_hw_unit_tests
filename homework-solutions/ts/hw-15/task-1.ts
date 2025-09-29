/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
4. Создайте тип UserType из объекта QA (используйте typeof)
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
*/
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = {
  name: "egor",
  salary: 10000000,
  isManager: true
}

type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA;
type UserType = typeof QA;
type PartialType = Partial<IEmployee>;
type PickType = Pick<IEmployee, 'name' | 'salary'>;
type OmitType = Omit<IEmployee, 'isManager'>;
type ReadOnlyType = Readonly<IEmployee>;
const recObj: Record<string, QaKeys> = {
  egor: "name",
  salary: 'salary',
  isManager: 'isManager'
}


/*
Необходимо создать классовую структуру
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".

2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
4. Создайте объект класса Car и проверьте работоспособность
*/
interface IVehicle {
  getDetails(): string,
  start(): string
}

abstract class Vehicle implements IVehicle {
  constructor(public make: string, public model: string) {
    this.make = make;
    this.model = model;
  }
  start(): string {
    return `This vehicle ${this.make} ${this.model} is starting`
  }
  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(make: string, model: string, public year: number) {
    super(make, model);
    this.year = year;
  }
  getDetails(): string {
    return `${this.make}, ${this.model}, ${this.year}`
  }
}
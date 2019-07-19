export default class Person {
  constructor (name) {
    this.name = name
  }
  getName () {
    console.log(this.name)
    return this.name
  }
}
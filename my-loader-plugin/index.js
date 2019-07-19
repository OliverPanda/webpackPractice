import Person from './assets/babel-example.js'
require('./assets/global.css')
require('./assets/style.css')
require('./assets/test-img.png')

const personInstance = new Person('Oliver')
var name = personInstance.getName()
console.log(name)
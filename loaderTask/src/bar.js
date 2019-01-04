import files from './test.txt'
import './bar.css'
import img from '../assets/logo.png'

export default function bar () {
  function component () {
    console.log(files)
    var elm = document.createElement('h1')
    elm.innerHTML = String(files)
    return elm
  }
  function setImg () {
    console.log(img)
    var elm = document.createElement('img')
    elm.src = img
    return elm
  }
  document.body.appendChild(component())
  document.body.appendChild(setImg())
}
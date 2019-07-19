const addStyle = function (content) {
  var style = document.createElement('style')
  style.innerHTML = content
  document.head.appendChild(style)
}

module.exports = addStyle
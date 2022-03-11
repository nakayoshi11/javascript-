window.addEventListener('load', function(){
  // 要素.addEventListener('イベント名', 関数)
  const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseover', function(){
    // 要素.addEventListener('イベント名', 関数)
    pullDownButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    // 要素.removeAttribute(name, value)
    pullDownButton.removeAttribute("style", "background-color:#FFBEDA;")
    console.log("mouseout OK")
  })

  pullDownButton.addEventListener('click', function() {
    console.log("click OK")
  })

})
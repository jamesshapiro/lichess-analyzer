let numMoves = 0

const config = { attributes: true, childList: true, subtree: true }

//========================
console.log('Hello from the content script! 7')
//========================
window.addEventListener('load', myMain, false)

var fens = []

const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    const moves = Array.from(document.getElementsByTagName('l4x')[0].children)
    const movesArray = moves.map((move) => {
      return move.innerHTML.replace(/<\/?[^>]+(>|$)/g, '')
    })
    const newArray = []
    for (let i = 0; i < moves.length; i++) {
      if (i % 3 != 0) {
        newArray.push(movesArray[i])
      }
    }
    if (newArray.length > numMoves) {
      numMoves++
      console.log(newArray)
      chrome.runtime.sendMessage(null, newArray, (response) => {
        if (!fens.includes(response)) {
          console.log(response)
          fens.push(response)
        }
        
      })
    }
    
  }
}

function myMain() {
  console.log('shalom haverim')
  console.log(document.getElementsByTagName('rm6'))
  const targetNode = document.getElementsByTagName('rm6')[0]
  const observer = new MutationObserver(callback)
  observer.observe(targetNode, config)
}

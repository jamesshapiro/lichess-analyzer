// let color = '#3aa757'

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color })
//   console.log('Default background color set to %cgreen', `color: ${color}`)
// })

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // console.log(msg)
  // console.log(sender)
  // console.log(sendResponse)
  opts = {"moves": msg}
  fetch('https://psu5f9pqn0.execute-api.us-east-1.amazonaws.com/Prod/fen/', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    console.log('1')
    response.json().then(function(result_json) {
      sendResponse(result_json['fen'])
    })
    console.log('2')
  })
  return true
})
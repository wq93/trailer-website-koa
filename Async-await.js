const fs = require('fs')

// 回调阶段
// function readFile(cb) {
//   fs.readFile('./package.json', (err, data) => {
//     if (err) cb(err)
//     cb(null, data)
//   })
// }
//
// readFile((err, data) => {
//   if (!err) {
//     data = JSON.parse(data)
//     console.log(data.name)
//   }
// })

// promise 阶段
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

// readFileAsync('./package.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })

// generator时代


// asunc/await阶段

(async function () {
  let data = await readFileAsync('./package.json')
  data = JSON.parse(data)
  console.log(data.name)
})()
import fs from 'fs'
import {promisify} from 'util' // node@8.x 新增的工具模块
import {age} from './ex'

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

(async function () {
  let data = await readFileAsync('./package.json')
  data = JSON.parse(data)
  console.log(data.name)
})()
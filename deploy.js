var gh = require('gh-pages')
var path = require('path')

gh.publish(path.join(__dirname, 'public'), function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Hee hoo!')
  }
})
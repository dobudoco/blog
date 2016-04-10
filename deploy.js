var gh = require('gh-pages')
var path = require('path')

gh.publish(path.join(__dirname, 'public'), function (err) {
  console.log(err)
})
const path = require('path')

const setup = ({ server }) => {

  server.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'))
  })
}

module.exports = setup
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./Router/appRouter')
const fileupload = require('express-fileupload')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    fileupload()
)
// https://flaviocopes.com/file-upload-using-ajax/ : Used this as a guide to set up image uploading

app.get('/', (req, res) => {
    res.send('landing page')
})

app.listen(PORT, () =>  console.log(`Server Started on port: ${PORT}`))

app.use('/api', AppRouter)

app.post('/saveImage', (req, res) => {
    const fileName = req.files.myFile.name
    const path = __dirname + '/images/' + fileName
    let image = req.files.myFile

    console.log(req)
    image.mv(path, (error) => {
      if (error) {
        console.error(error)
        res.writeHead(500, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ status: 'error', message: error }))
        return
      }
  
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'success', path: '/img/houses/' + fileName }))
    })
  })
  // https://flaviocopes.com/file-upload-using-ajax/ : Used this as a guide to set up image uploading

  app.use('/images', express.static('images'))
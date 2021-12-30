const mongoose = require('mongoose')

const
    userName = 'Username',
    password = 'Password',
    connectionString = `mongodb+srv://${userName}:${password}@emmanuelmongocluster.a8zm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

console.log('connecting ..')
mongoose.connect(connectionString)
    .then(() => {
        console.log('Mongo connected!')
    })

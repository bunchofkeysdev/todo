const express = require('express');
const app = express();

//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + 'public/index.html')
})


app.listen(3000, function () {
    console.log('your app is running on port 3000')
})
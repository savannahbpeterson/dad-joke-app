const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller')

const app = express();
app.use(bodyParser.json())


app.get(`/getjoke`, controller.getJoke)
app.post(`/savejoke`, controller.addJoke)
app.put(`/editjoke:id`, controller.updateJoke)
app.delete(`/deletejoke:id`, controller.deleteJoke)

app.listen(4000, () => console.log('Someone is eaves dropping on port 4000'))
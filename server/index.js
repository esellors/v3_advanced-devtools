const express = require('express'), app = express();
const SERVER_PORT = 5050;
const {
    getChars,
    getFavs,
    addFav,
    deleteFavs
} = require('./controller');

app.use(express.json());

app.get('/api/chars', getChars);

app.get('/api/favs', getFavs);
app.post('/api/favs', addFav);
app.delete('/api/favs', deleteFavs);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
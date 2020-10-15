const chars = require('./data/characters');
let favs = require('./data/favs');

module.exports = {
    getChars: (req, res) => res.status(200).send(chars),
    getFavs: (req, res) => res.status(200).send(favs),
    addFav: (req, res) => {
        favs.unshift(req.body);
        res.status(200).send(favs);
    },
    deleteFavs: (req, res) => {
        favs = [];
        res.sendStatus(200);
    }
}
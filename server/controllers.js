const Helpers = require('../database/dbhelpers.js');

const searchBar = (req, res) => {
    let target = req.params;
    Helpers.searchBarHelper(target)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => console.error(err));
};

module.exports = {
    searchBar
}
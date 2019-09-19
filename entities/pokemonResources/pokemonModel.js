const db = require('../../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('pokemon');
}
function getById(id) {
    return db('pokemon')
        .where({ id })
        .first()
}
function insert(post) {
    return db('pokemon')
        .insert(post)
        .then(ids => {
            return getById(ids[0])
        })
}
function update(id, changes) {
    return db('pokemon')
        .where({ id })
        .update(changes)
}
function remove(id) {
    return db('pokemon')
        .where('id', id)
        .del()
}
const pokemonDB = require('./pokemonModel.js');
// const db = require('../../data/dbConfig');
const db = require('../../data/dbConfig.js');

describe('Pokemon model', () => {
    beforeEach(async () => {
        await db('pokemon').truncate();
    })
    describe('insert pokemon', () => {
        it('should insert pokemon into the db', async () => {
            await pokemonDB.insert({ name: 'Jigglypuff' });
            let pokemon = await db('pokemon');
            expect(pokemon).toHaveLength(1);
        })
        it('should save pokemon name correctly', async () => {
            await pokemonDB.insert({ name: 'Jigglypuff' })
            let pokemon = await db('pokemon')

            expect(pokemon[0].name).toBe('Jigglypuff');
        })
    })
    
})
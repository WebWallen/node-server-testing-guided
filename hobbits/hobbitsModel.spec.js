const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate(); // cleans up table before running insert method
    });

    it('Is using testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing'); // see package.json for environment related code under "scripts.test"
    });

    describe('Insert method', () => {
        it('Should add hobbit to database', async () => {            
            const records = await db('hobbits');
            expect(records).toHaveLength(0);
            await Hobbits.insert({ name: 'Sam' })
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        });

        it('Should add provided hobbit to database', async () => {            
            let hobbit = await Hobbits.insert({ name: 'Sam' });
            expect(hobbit.name).toBe('Sam');
        });
    });
});
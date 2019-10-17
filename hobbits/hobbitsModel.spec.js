describe('hobbits model', () => {
    it('Is using testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})
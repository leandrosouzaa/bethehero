const createId = require('../../src/utils/createid')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = createId('adapv')

    expect(id).toHaveLength(10)
  })
})
const hello = require('./hello')


test('hello',() => {
  //Arrange
  let name = 'Non'


  //act
  let result = hello(name)


  //assert
  expect(result).toBe('hello Non')
})

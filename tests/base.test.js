const walkTree = require('../index')

test('basic', () => {
  expect(walkTree({
    val: 7,
    children: [{
      val: 2,
      children: [{
        val: 4,
        children: []
      },{
        val: 3,
        children: [{
          val: 5,
          children: []
        }]
      }]
    },{
      val: 6,
      children: [{
        val: 1,
        children: []
      }]
    },{
      val: 8,
      children: []
    }]
  })).toEqual([ 7,2,4,3,5,6,1,8 ])
})
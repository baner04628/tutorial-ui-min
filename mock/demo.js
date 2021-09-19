const Mock = require('mockjs')
const data = Mock.mock({
  'items|5': [{
    id: '@id',
    title: '@sentence(10, 20)',
    author: 'name'
  }]
})
module.exports = [
  {
    url: '/vue-admin-template/demo/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]

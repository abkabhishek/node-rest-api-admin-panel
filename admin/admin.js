const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const User = require('../api/users/user.models')

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        // We'll add this later
      }
    }
  ],
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)
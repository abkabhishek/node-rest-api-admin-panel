const express = require("express")
const mongoose = require("mongoose") 
const app = express();



// All available routes
const admin = require("./admin/admin")
const users = require("./api/users/user.route")




let PORT = 5000;
// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => {





    // All route registration
    app.use('/admin',  admin)
    app.use("/api/users", users)





    app.get('/', (req, res) => {
        res.send('Server is running...')
      })
      

    app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}!`)
    })
  })
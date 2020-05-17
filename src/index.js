const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

// app.use((req,res,next) => {
//     if(req.method === 'GET') {
//         res.send('get request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Under maintenance check back later')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('listening on port ' + port)
})


// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async() => {
//     // const task = await Task.findById('5ebed4d2b21ab4288423a950')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     // const user = await User.findById('5ebed4a7b21ab4288423a94d')
//     // await user.populate('tasks').execPopulate()
//   //  console.log(user.tasks)
// }
// main()
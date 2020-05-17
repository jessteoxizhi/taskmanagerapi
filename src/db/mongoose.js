const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const me = new User({
//     name:'Bob   ',
//     email: 'KJSBKDS@gmail.com',
//     password: 'jess234'
// })

// me.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })



// const sleep = new Task({
//     description: 'go to sleep'
// })
// sleep.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//      console.log(error)
// })
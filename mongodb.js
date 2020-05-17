//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error ) {
        return error.log('unable to connect')
    }

    const db = client.db(databaseName)

    //DELETE
    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').deleteOne({
    //     description: 'go sleep'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //UPDATE
    // db.collection('users').updateOne({_id: new ObjectID('5ebc59abe193dd1f64ab51da')}, {
    //     $set: {
    //         name: 'Mike'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({completed: false},{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //READ
    // db.collection('tasks').findOne({ _id: new ObjectID('5ebc5d75dae9a3114c426b1e')}, (error,task) => {
    //     if(error) {
    //         return console.log('task cannot be found')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').findOne({_id: new ObjectID('5ebc59abe193dd1f64ab51da')}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 23}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 23}).count((error, count) => {
    //     console.log(count)
    // })

    
    //CREATE
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'buy food',
    //         completed: false
    //     }, {
    //         description: 'eat dinner',
    //         completed: false
    //     }, {
    //         description: 'go sleep',
    //         completed: true
    //     }
    // ], (error,result) => {
    //     if(error) {
    //         return console.log('unable to insert')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'karen',
    //     age: 20
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'john',
    //         age: 24
    //     }, {
    //         name: 'bob',
    //         age: 20
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert')
    //     }

    //     console.log(result.ops)
    // })
})
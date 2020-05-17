const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    // const task = new Task(req.body)
    // task.save().then((task) => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})



// GET /tasks?completed=false
// GET /tasks?limit=10&skip=10
// getting the 20-30 result^
// GET /tasks?sortBy=createdAt:asc
// GET /tasks?sortBy=createdAt:desc

router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if(req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        //const tasks = await Task.find({owner: req.user._id})
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
                // {
                //     //1 for asc, -1 for desc
                //     //createdAt: 1
                //     completed: 1
                // }
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (error) {
        res.status(400).send(error)
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        //const task = await Task.findById(_id)
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task) {
            return res.status(404).send('There is no task found by you')
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
    // Task.findById(_id).then((task) => {
    //     if(!task) {
    //         return res.status(404).send('There is no task found')
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})


router.patch('/tasks/:id', auth, async (req,res)=> {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => {
      return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send('Invalid Update')
    }
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
        //const task = await Task.findById(req.params.id)

        if(!task) {
            return res.status(404).send('Cannot find task')
        }
        updates.forEach((update) => {
            task[update] = req.body[update]
        })
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})



router.delete('/tasks/:id', auth, async (req,res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})
        if(!task) {
            return res.status(404).send('task specified not found')
        } 
        res.send(task)
    } catch (error) {
        res.status(500).send(error)

    }
})

module.exports = router
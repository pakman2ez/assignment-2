const { Task, User } = require("../models")

exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, userId } = req.body

        const user = await User.findByPk(userId)

        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }

        const task = await Task.create({
            title,
            description,
            dueDate,
            userId
        })

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getTasks = async (req, res) => {
    const tasks = await Task.findAll({
        include: User
    })

    res.json(tasks)
}

exports.getTaskById = async (req, res) => {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }

    res.json(task)
}

exports.updateTask = async (req, res) => {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }

    await task.update(req.body)

    res.json(task)
}

exports.deleteTask = async (req, res) => {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }

    await task.destroy()

    res.json({ message: "Task deleted" })
}
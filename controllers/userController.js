const { User, Task } = require("../models")

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email required" })
        }

        const user = await User.create({ name, email })

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUsers = async (req, res) => {
    const users = await User.findAll()
    res.json(users)
}

exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
}

exports.deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    await user.destroy()

    res.json({ message: "User deleted" })
}
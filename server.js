const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const user = {
    email: "naveen@gmail.com",
    password: "123456"
}

app.post("/login", function (req, res) {

    const { email, password } = req.body

    if (email === user.email && password === user.password) {

        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                email: email
            }
        })

    } else {

        res.status(401).send({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.listen(4000, function () {
    console.log("Server started on port 4000")
})
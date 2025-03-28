const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
// const morgan = require('morgan')
const connectDB = require('./config/db')

// Load Environment Variables
dotenv.config()

//database connection
connectDB()

//Initialize Express app
const app = express();
app.use(express.json())

//middlewares
app.use(cors())
// app.use(morgan("dev"))

// routes
app.use("/api/v1",require('./routes/userRoutes'))


const PORT = process.env.PORT || 8080
app.listen(PORT , () => {
    console.log(`Server is up and running on port ${PORT}`)
})

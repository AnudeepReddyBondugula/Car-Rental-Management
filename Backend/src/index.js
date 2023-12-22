const server = require("./app");
const {PORT} = require("./config/serverConfig");
const connectMongodb = require("./config/dbConfig");

connectMongodb()
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    })
})
    

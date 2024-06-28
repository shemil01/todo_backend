const express = require("express");
const cors = require("cors");
const routes = require("./router/taskRout");
const DbConnect = require("./config/dbConnect");

const app = express();
const port = 4000;

app.use(express.json());
    
app.use(     
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", routes);

DbConnect();

app.listen(port, () => {
  console.log(`your app running on port:${port}`);
});

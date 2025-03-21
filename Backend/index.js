import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import ConnectMD from "./mongoDB/ConnectDB.js";

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 6969;

const _dirname = path.resolve()

app.use(cors());
app.use(express.json());

ConnectMD();

// Defining Routes
app.use("/api/v1/books", bookRoute); 
app.use("/api/v1/user", userRoute);

app.use(express.static(path.join(_dirname,'/frontend/dist')))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname, 'frontend','dist','index.html'));
})



app.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
});

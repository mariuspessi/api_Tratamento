import express from "express";
//import routerETE from "./routes/ETE.js";
import routerETA from "./routes/ETA.js";
import routerLagoa from "./routes/Lagoa.js";
import routerPoco from "./routes/Poco.js";
import cors from "cors";

const app  = express();

app.use(express.json());
app.use(cors());

//app.use("/ETE", routerETE)
app.use("/ETA", routerETA)
app.use("/Lagoa", routerLagoa)
app.use("/Poco", routerPoco)

app.listen(8800);
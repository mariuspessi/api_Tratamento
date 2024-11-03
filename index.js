import express from "express";
import routerEte from "./routes/ETE.js";
import routerETA from "./routes/ETA.js";
import routerLagoa from "./routes/Lagoa.js";
import routerPoco from "./routes/Poco.js";
import cors from "cors";

const app  = express();

app.use(express.json());
app.use(cors());

app.use("/ete", routerEte)
app.use("/", routerETA)
app.use("/lagoa", routerLagoa)
app.use("/poco", routerPoco)

app.listen(8800);
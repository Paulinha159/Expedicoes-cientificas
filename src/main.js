/*
 Inicializa o servidor
 Carrega os serviços 
*/

import e from "express";
import "dotenv/config";
import "./db.js";
import expedition_router from "./routes/expedition_route.js";
import explorer_router from "./routes/explorer_route.js";
import species_router from "./routes/species_route.js";

const app = e();

app.use(e.json());

app.use("/expedition", expedition_router);
app.use("/explorer", explorer_router);
app.use("/species", species_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));

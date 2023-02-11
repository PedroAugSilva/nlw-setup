import fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";
const app = fastify();

app.register(cors)
app.register(appRoutes)

app
  .listen({
    port: 3001,
  })
  .then(() => {
    console.log("server running in port 3001");
  });
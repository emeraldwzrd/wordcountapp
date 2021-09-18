import express, { Express } from "express"
import cors from "cors"
import routes from "./routes"


const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.use(routes)

try {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  )
} catch(e){
  console.log(e)
}

import { Router } from "express"
import { countWords } from "../controllers/counters"

const router: Router = Router()

router.post("/countwords", countWords)

export default router

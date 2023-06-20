import { Router } from "express"
import { getNotes, createNote } from "../controllers/note.controllers.js"


const router = Router()

router.route("/")
    .get(getNotes)
    .post(createNote)


export default router
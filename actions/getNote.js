import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function getNote(noteId) {
    const repository = new Repository(noteSchema, client)
    const note = await repository.search().where('noteId').equals(noteId).return.first()
    
    return note
}
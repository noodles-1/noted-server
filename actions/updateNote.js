import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function updateNote(note) {
    const repository = new Repository(noteSchema, client)
    const result = await repository.fetch(note.noteId)

    result.title = note.title
    result.body = note.body
    result.category = note.category
    result.modified = note.modified
    await repository.save(result)
}
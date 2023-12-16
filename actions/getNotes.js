import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function getNotes() {
    const repository = new Repository(noteSchema, client)

    const notes = await repository.search().return.all()

    return notes.filter((note) => {
        return note.category === 'all' || note.category === 'pinned'
    })
}
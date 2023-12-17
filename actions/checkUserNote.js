import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function checkUserNote(userId, noteId) {
    const repository = new Repository(noteSchema, client)

    const note = await repository.search().where('userId').equals(userId)
                        .and('noteId').equals(noteId)
                        .return.first()

    if (!note)
        return null
    return note.category !== 'deleted' ? note : null
}
import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function getPinnedNotes(userId) {
    const repository = new Repository(noteSchema, client)

    const notes = await repository.search().where('userId').equals(userId)
                            .sortBy('modified', 'DESC')
                            .return.all()
    
    return notes.filter((note) => {
        return note.category === 'pinned'
    })
}
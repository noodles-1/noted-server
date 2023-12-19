import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function getAllNotes(userId) {
    const repository = new Repository(noteSchema, client)

    let notes = await repository.search().where('userId').equals(userId)
                            .sortBy('modified', 'DESC')
                            .return.all()


    notes.map(note => {
        const symbols = Object.getOwnPropertySymbols(note)
        note.noteId = note[symbols[0]]
    })

    return notes.filter((note) => {
        return note.category === 'all' || note.category === 'pinned'
    })
}
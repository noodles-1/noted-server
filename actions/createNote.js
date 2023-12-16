import { client } from "../redis.js"
import { noteSchema } from "../schemas/index.js"
import { Repository } from "redis-om"
import uniqid from 'uniqid'

export async function createNote(userId) {
    const repository = new Repository(noteSchema, client)

    const note = {
        noteId: uniqid('note_'),
        userId: userId,
        title: '',
        body: '',
        category: 'all',
        created: new Date(),
        modified: new Date()
    }

    const newNote = await repository.save(note)
    return newNote
}
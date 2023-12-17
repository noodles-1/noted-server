import { Repository } from "redis-om";
import { noteSchema } from "../schemas/index.js";
import { client } from "../redis.js";

export async function deleteNote(noteId) {
    const repository = new Repository(noteSchema, client)

    const note = await repository.search().where('noteId').equals(noteId).return.firstId()
    await repository.remove(note)
}
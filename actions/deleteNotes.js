import { Repository } from "redis-om";
import { noteSchema } from "../schemas/index.js";
import { client } from "../redis.js";

export async function deleteNotes(userId) {
    const repository = new Repository(noteSchema, client)

    const notes = await repository.search().where('userId').equals(userId)
                    .and('category').equals('deleted')
                    .return.allIds()

    await repository.remove(notes)
}
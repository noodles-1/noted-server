import { client } from "../redis.js"
import { userSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function createUser(userId) {
    const repository = new Repository(userSchema, client)

    const userExists = await repository.search().where('userId').equals(userId).return.first()
    if (!userExists)
        await repository.save({ userId: userId, spellchecked: true, wallpaper: '/background3.jpg' })
}
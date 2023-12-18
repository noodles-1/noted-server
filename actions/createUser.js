import { client } from "../redis.js"
import { userSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function createUser(userId) {
    const repository = new Repository(userSchema, client)
    
    const user = repository.fetch(userId)

    if (!user)
        await repository.save(userId, { spellchecked: true, wallpaper: '/background3.jpg' })
}
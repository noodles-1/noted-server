import { client } from "../redis.js"
import { userSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function updateUser(user) {
    const repository = new Repository(userSchema, client)

    const result = await repository.search().where('userId').equals(user.userId).return.first()

    if (result) {
        result.spellchecked = user.spellchecked
        result.wallpaper = user.wallpaper
        await repository.save(result)
    }
}
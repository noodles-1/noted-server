import { client } from "../redis.js"
import { userSchema } from "../schemas/index.js"
import { Repository } from "redis-om"

export async function getUser(userId) {
    const repository = new Repository(userSchema, client)

    const user = await repository.fetch(userId)
    const symbols = Object.getOwnPropertySymbols(user)
    user.userId = user[symbols[0]]

    return user
}
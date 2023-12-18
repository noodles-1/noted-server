import { Schema } from "redis-om"

export const userSchema = new Schema('user', {
    spellchecked: { type: 'boolean' },
    wallpaper: { type: 'string' }
})
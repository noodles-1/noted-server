import express from 'express'

import { 
    getAllNotes,
    getPinnedNotes,
    checkUserNote, 
    createNote, 
    getNotes,
    getNote,
    updateNote,
    createUser,
    getDeletedNotes,
    deleteNote,
    getUser,
    updateUser,
    deleteNotes
} from './actions/index.js'

export const router = express.Router()

// GET requests
router.get('/all-notes/:userId/:category', async (req, res) => {
    try {
        let notes = null

        if (req.params.category === 'all')
            notes = await getAllNotes(req.params.userId)
        else if (req.params.category === 'pinned')
            notes = await getPinnedNotes(req.params.userId)
        else
            notes = await getDeletedNotes(req.params.userId)

        res.json(notes)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/deleted-notes/:userId', async (req, res) => {
    try {
        const notes = await getDeletedNotes(req.params.userId)
        res.json(notes)
    }
    catch (err) {
        console.log(err)
        req.sendStatus(500)
    }
})

router.get('/pinned-notes/:userId', async (req, res) => {
    try {
        const notes = await getPinnedNotes(req.params.userId)
        res.json(notes)
    }
    catch (err) {
        console.log(err)
        req.sendStatus(500)
    }
})

router.get('/check-note/:userId/:noteId', async (req, res) => {
    try {
        const note = await checkUserNote(req.params.userId, req.params.noteId)
        res.json(note)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/note/:noteId', async (req, res) => {
    try {
        const note = await getNote(req.params.noteId)
        res.json(note)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/notes', async (req, res) => {
    try {
        const notes = await getNotes()
        res.json(notes)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/get-user/:userId', async (req, res) => {
    try {
        const user = await getUser(req.params.userId)
        res.json(user)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


// POST requests
router.post('/create-note/:userId', async (req, res) => {
    try {
        const note = await createNote(req.params.userId)
        res.json(note)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/update-note', async (req, res) => {
    try {
        await updateNote(req.body)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/create-user', async (req, res) => {
    try {
        await createUser(req.body.userId)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/delete-note', async (req, res) => {
    try {
        await deleteNote(req.body.noteId)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/delete-notes', async (req, res) => {
    try {
        await deleteNotes(req.body.userId)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/update-user', async (req, res) => {
    try {
        await updateUser(req.body)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
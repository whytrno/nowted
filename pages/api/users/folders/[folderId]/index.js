import connectDB from '@/components/connectDB'
import User from '@/models/user'

export default async function getNotes(req, res) {
    await connectDB()

    const { noteId } = req.query

    const users = await User.findById('63e1066cf9b6b287c8496b4f', {
        folders: {
            $elemMatch: {
                _id: noteId
            }
        }
    })
    const notes = users.folders[0].notes

    res.status(200).json(notes)
}
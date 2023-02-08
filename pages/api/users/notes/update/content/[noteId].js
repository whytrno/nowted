import connectDB from '@/components/ConnectDB'
import User from '@/models/User'

export default async function update(req, res) {
    if (req.method !== 'PUT') return res.status(400).json({ error: 'Method not allowed.' })

    const { noteId } = req.query
    const { content } = req.body

    try {
        await connectDB()
        const user = await User.updateOne(
            { "folders.notes._id": noteId },
            // set operator akan mereplace data yang lama dengan data yang baru
            {
                $set: {
                    // $[] akan mengambil semua data yang sesuai dengan filter
                    // sehingga $[xxx] akan mengambil data yang di filter pada arrayFilter
                    'folders.$[].notes.$[xxx].content': content
                }
            },
            {
                // melakukan filter pada array notes
                // dengan mencari data yang memiliki _id yang sama dengan noteId
                // lalu xxx digunakan pada operator $set
                arrayFilters: [
                    { "xxx._id": noteId }
                ]
            }
        )

        res.status(201).json({ success: true, data: user })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}
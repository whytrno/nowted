import connectDB from '@/components/ConnectDB'
import User from '@/models/user'

export default async function create(req, res) {
    if (req.method !== 'POST') return res.status(400).json({ error: 'Method not allowed.' })

    const { folderId } = req.query

    try {
        await connectDB()

        const date = new Date()

        const user = await User.updateOne(
            { "folders._id": folderId },
            // set operator akan mereplace data yang lama dengan data yang baru
            {
                $push: {
                    // $[] akan mengambil semua data yang sesuai dengan filter
                    // sehingga $[xxx] akan mengambil data yang di filter pada arrayFilter
                    'folders.$[xxx].notes': {
                        title: 'New Note',
                        date: date.toLocaleDateString(),
                        content: 'New Note Content'
                    }
                }
            },
            {
                // melakukan filter pada array notes
                // dengan mencari data yang memiliki _id yang sama dengan folderId
                // lalu xxx digunakan pada operator $set
                arrayFilters: [
                    { "xxx._id": folderId }
                ]
            }
        )

        res.status(201).json({ success: true, data: user })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}
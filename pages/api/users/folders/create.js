import ConnectDB from '@/components/ConnectDB';
import User from '@/models/user';

export default async function create(req, res) {
    if (req.method !== 'POST') return res.status(400).json({ error: 'Method not allowed.' })

    const { name } = req.body

    try {
        await ConnectDB()
        const filter = { _id: '63e1066cf9b6b287c8496b4f' };
        const update = {
            $push: {
                folders: {
                    name
                }
            }
        };

        const user = await User.findOneAndUpdate(filter, update, {
            // agar mereturn data yang baru
            new: true
        })

        res.status(201).json({ success: true, data: user })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}
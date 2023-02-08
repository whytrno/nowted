import connectDB from '@/components/connectDB';
import User from '@/models/user';

export default async function getFolders(req, res) {
    if (req.method !== 'GET') return res.status(400).json({ error: 'Method not allowed.' })

    await connectDB()

    const users = await User.findById('63e1066cf9b6b287c8496b4f')

    res.status(200).json(users.folders);
}
import ConnectDB from '@/components/ConnectDB';
import User from '@/models/user';

export default async function getFolders(req, res) {
    if (req.method !== 'GET') return res.status(400).json({ error: 'Method not allowed.' })

    await ConnectDB()

    const users = await User.findById('63e1066cf9b6b287c8496b4f')

    res.status(200).json(users.folders);
}
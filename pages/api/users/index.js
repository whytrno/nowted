import ConnectDB from '@/components/ConnectDB';
import User from '@/models/user';

export default async function getAllData(req, res) {
    await ConnectDB()

    const users = await User.findById('63e1066cf9b6b287c8496b4f')

    res.status(200).json(users);
}
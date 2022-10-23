import connectDB from '../../lib/db'
import Order from '../../models/orderModels'

connectDB().catch(err => console.log('ERROR: ', err))

export default async function order(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const data = await Order.find()
                res.status(200).json(data)
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, error });
            }
            break;
        case "POST":
            const create = new Order({
                name: 'Osman Abi'
            })
            create.save().then(() => {
                res.status(200).json(create)
            })
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}
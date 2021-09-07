import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    const client = await MongoClient.connect(process.env.MONGO_URI)
    const db = client.db()
    const meetupCollection = db.collection('meetups')
    const result = await meetupCollection.insertOne(data)
    console.log(result)
    client.close()
    res.status(201).json({ message: 'Meetup added!!!' })
  }
}
export default handler

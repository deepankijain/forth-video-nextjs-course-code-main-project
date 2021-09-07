import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head'

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React Meetups'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const meetups = await meetupCollection.find().toArray()
  client.close()
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 2,
  }
}

export default HomePage

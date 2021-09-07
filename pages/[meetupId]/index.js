import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
import MeetupDetails from '../../components/meetups/MeetupDetails'

const MeetupDetailPage = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name='description' content={meetupData.description} />
      </Head>
      <MeetupDetails
        title={meetupData.title}
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
  client.close()

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  }
}
export async function getStaticProps(context) {
  const { meetupId } = context.params
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  })
  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  }
}

export default MeetupDetailPage

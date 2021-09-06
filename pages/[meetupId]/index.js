import React from 'react'
import MeetupDetails from '../../components/meetups/MeetupDetails'

const MeetupDetailPage = ({ meetupData }) => {
  return (
    <div>
      <MeetupDetails
        title={meetupData.title}
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </div>
  )
}
export async function getStaticProps(context) {
  const { meetupId } = context.params

  return {
    props: {
      meetupData: {
        id: 'm1',
        title: 'A First Meetup',
        image:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address: 'Some Street 5, Some City',
        description: 'This is the first meet up',
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  }
}
export default MeetupDetailPage

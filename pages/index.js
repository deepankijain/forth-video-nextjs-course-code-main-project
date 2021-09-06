import MeetupList from '../components/meetups/MeetupList'

const dummyMeetups = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    address: 'Some address 123, 12345 Some City',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    address: 'Some address 123, 4567 Some City',
    description: 'This is the second meetup!',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    address: 'Some address 123, 12345 Some City',
    description: 'This is the third meetup!',
  },
]

const HomePage = ({ meetups }) => {
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      meetups: dummyMeetups,
    },
  }
}

export default HomePage

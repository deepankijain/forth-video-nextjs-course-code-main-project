import classes from './MeetupDetails.module.css'

const MeetupDetails = ({ title, image, address, description }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt='A first meetup' />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}

export default MeetupDetails

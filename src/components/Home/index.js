import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

import RegisterContext from '../../context/RegisterContext'

import {
  HomePage,
  BodyContainer,
  Heading,
  Description,
  RegisterButton,
  HomePageImg,
  ActiveHeading,
  ActiveDescription,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {showUserDetails, userInputDetails} = value
      const {username, displayText} = userInputDetails
      return (
        <HomePage>
          <Header />
          {showUserDetails ? (
            <BodyContainer>
              <ActiveHeading>{`Hello ${username}`}</ActiveHeading>
              <ActiveDescription>{`Welcome to ${displayText}`}</ActiveDescription>
              <HomePageImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </BodyContainer>
          ) : (
            <BodyContainer>
              <Heading>Welcome to Meetup</Heading>
              <Description>Please register for the topic</Description>
              <Link className="link" to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <HomePageImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </BodyContainer>
          )}
        </HomePage>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home

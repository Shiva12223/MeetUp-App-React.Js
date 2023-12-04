import Header from '../Header'
import {
  NotFoundPageContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import {BodyContainer} from '../Home/styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <Header />
    <BodyContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found.
      </NotFoundDescription>
    </BodyContainer>
  </NotFoundPageContainer>
)

export default NotFound

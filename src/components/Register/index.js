import {Component} from 'react'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  BodyContainer,
  ResponsiveContainer,
  RegisterImg,
  FormContainer,
  RegisterTitle,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    username: '',
    topic: topicsList[0].id,
    homeTopic: '',
    showError: false,
    errorMsg: '',
    userDetails: {},
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    const {username, topic, showError, errorMsg} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {updatedUserDetails} = value

          const onSubmitForm = event => {
            event.preventDefault()
            if (username !== '') {
              const topicObj = topicsList.find(item => item.id === topic)
              const {displayText} = topicObj
              const obj = {username, displayText}
              updatedUserDetails(obj)
              const {history} = this.props
              history.replace('/')
            } else {
              this.setState(prevState => ({
                showError: !prevState.showError,
                errorMsg: 'Please enter your name',
              }))
            }
          }
          return (
            <RegisterContainer>
              <Header />
              <BodyContainer>
                <ResponsiveContainer>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />

                  <FormContainer onSubmit={onSubmitForm}>
                    <RegisterTitle>Let us join</RegisterTitle>
                    <InputContainer>
                      <Label htmlFor="name">NAME</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={username}
                        onChange={this.onChangeUsername}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="topics">TOPICS</Label>
                      <Select
                        id="topics"
                        value={topic}
                        onChange={this.onChangeTopic}
                      >
                        {topicsList.map(item => (
                          <Option key={item.id} value={item.id}>
                            {item.displayText}
                          </Option>
                        ))}
                      </Select>
                    </InputContainer>
                    <RegisterNowButton type="submit">
                      Register Now
                    </RegisterNowButton>
                    {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                  </FormContainer>
                </ResponsiveContainer>
              </BodyContainer>
            </RegisterContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register

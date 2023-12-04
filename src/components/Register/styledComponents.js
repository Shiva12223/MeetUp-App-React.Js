import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 50px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
`

export const RegisterImg = styled.img`
  height: 100%;
  width: 50%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  width: 50%;
  font-family: 'Roboto';
`
export const RegisterTitle = styled.h1`
  color: #475569;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #64748b;
  border-radius: 7px;
  width: 100%;
  padding: 5px;
  color: #7b8794;
  height: 45px;
  cursor: pointer;
  outline: none;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  margin-bottom: 20px;
`
export const Label = styled.label`
  color: #7b8794;
  font-weight: bold;
`
export const Select = styled.select`
  background-color: transparent;
  border: 1px solid #64748b;
  border-radius: 7px;
  width: 100%;
  padding: 5px;
  color: #334155;
  font-family: 'Roboto';
  font-weight: bold;
  height: 45px;
  cursor: pointer;
  outline: none;
`
export const Option = styled.option`
  color: #334155;
  font-family: 'Roboto';
  font-weight: normal;
`
export const RegisterNowButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 7px;
  width: 150px;
  height: 45px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`
export const ErrorMsg = styled.p`
  color: red;
  margin-top: 0px;
`

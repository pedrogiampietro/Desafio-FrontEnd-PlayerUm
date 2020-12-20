import React from 'react'
import { connect } from 'react-redux'
import { getToken } from '../../helpers/account'
import { getTokenExpire } from '../../helpers/jwt'
import { secondsToReadableTime } from '../../helpers/dateTime'
import { getFreshToken } from '../../actions/AccountActions'

const TokenRefresher = ({ getFreshToken }) => {
  const treshHold = 30

  const calculate = () => {
    const token = getToken()
    const expires = getTokenExpire(token)
    const secondsToExpire = expires - Date.now() / 1000

    return secondsToExpire
  }

  React.useEffect(() => {
    const secondsToExpire = calculate() - treshHold
    const readableTime = secondsToReadableTime(secondsToExpire)
    console.log('****** TokenRefresher.readableTime', readableTime)
    const id = setTimeout(getFreshToken, secondsToExpire * 1000)
    return () => clearTimeout(id)
  }, [getFreshToken])

  return null
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher)

import React from 'react'
import { connect } from 'react-redux'
import { upLike, unLike } from '../../actions/PlaceActions'
import { getAccount } from '../../helpers/account'

import { AiOutlineHeart } from 'react-icons/ai'

const LikeDeslikes = ({ upLike, account, id, likes_count, interaction }) => {
  const [accountLogged, setAccountLogged] = React.useState()

  React.useEffect(() => {
    if (account) setAccountLogged(getAccount().id)
  }, [account])

  async function likeAPlace() {
    await upLike(id)
    interaction()
  }

  async function unlikeAPlace() {
    await unLike(id)
    interaction()
  }

  return (
    <div>
      {account ? (
        <span
          id={`data-post-${id}`}
          className="d-inline-flex align-items-center text-dark"
        >
          {likes_count?.includes(accountLogged) ? (
            <span className="width-3 height-2 h1 mb-1 mt-2">
              <AiOutlineHeart
                className="text-pink"
                onClick={() => {
                  unlikeAPlace()
                }}
              />
              <span className="badge badge-icon pos-top pos-right mb-5">
                {likes_count?.length}
              </span>
            </span>
          ) : (
            <span className="width-3 height-2 h1">
              <AiOutlineHeart
                onClick={() => {
                  likeAPlace()
                }}
              />

              <span className="badge badge-icon pos-top pos-right mb-5">
                {likes_count?.length}
              </span>
            </span>
          )}
        </span>
      ) : (
        <span className="width-3 height-2 d-inline-flex align-items-center justify-content-center position-relative h1 ">
          <AiOutlineHeart />
          <span className="badge badge-icon pos-top pos-right mb-5">
            {likes_count?.length}
          </span>
        </span>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    place: state.place.place,
    account: state.account.account,
  }
}

export default connect(mapStateToProps, { upLike, getAccount })(LikeDeslikes)

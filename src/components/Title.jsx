import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
    document.title = "ABCfruit-" + props.title
  return (
    <div>{props.children}</div>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title
import React from 'react'
import styled from 'styled-components'
import { Button, Toolbar } from './components'
import PropTypes from 'prop-types'

const ContentContainer = styled.div`flex-grow: 1; padding: 24px; display: ${props => { return (props.display || 'none') }};margin-left:250px;`
const ContentParagraph = styled.p`margin: 20px; margin-top: 25px; font-size: 18px; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`

function Content (props) {
  return (
    <ContentContainer
      id={props.id}
      display={props.display || 'none'}
    >
      <Toolbar />
      <br />
      <ContentParagraph
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      >
        {props.children}
      </ContentParagraph>
      <Button
        secondary
        disabled={props.previous === 'disabled'}
        onClick={props.previous !== 'disabled' ? props.previous : () => {}}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={props.next === 'disabled'}
        onClick={props.next !== 'disabled' ? props.next : () => {}}
        next
      >
        Next
      </Button>
    </ContentContainer>
  )
}

Content.propTypes = {
  id: PropTypes.string,
  display: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  previous: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  next: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
}

Content.defaultProps = {
  display: 'none',
  previous: () => {},
  next: () => {}
}

export default Content

import React from 'react'
import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const ContentNextButton = styled(Button)`float: right; margin-right: 5px;`
const ContentContainer = styled.div`flex-grow: 1; padding: 24px; display: ${props => {return (props.display || 'none')}};`
const ContentParagraph = styled(Typography)`margin: 20px; margin-top: 25px; font-size: 18px;`

function Content (props) {
  return (
    <ContentContainer
      id={props.id}
      display={props.display || 'none'}
    >
      <Toolbar />
      <br />
      <ContentParagraph
        paragraph
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      >
        {props.children}
      </ContentParagraph>
      <Button
        variant="contained"
        color="secondary"
        disabled={props.previous === 'disabled'}
        onClick={props.previous !== 'disabled' ? props.previous : () => {}}
      >
        Previous
      </Button>
      <ContentNextButton
        variant="contained"
        color="primary"
        disabled={props.next === 'disabled'}
        onClick={props.next !== 'disabled' ? props.next : () => {}}
      >
        Next
      </ContentNextButton>
    </ContentContainer>
  )
}

export default Content

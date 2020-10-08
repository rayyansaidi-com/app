import React from 'react'
import { SidebarItem, underscore, handleClick, parseContent } from './index'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Content from '../Content'

function renderSidebar(content) {
  return Object.keys(content.headers).map((value0, index0) => {
    return (
      <div key={index0}>
        <Divider />
        <Typography noWrap className="sidebarHeader">
          {value0}
        </Typography>
        <Divider />
        <List>
          {content.headers[value0].map((value1, index1) => {
            return (
              <SidebarItem
                key={index1}
                text={value1}
                onClick={() => {
                  handleClick(underscore(value1), content)
                }}
              />
            )
          })}
        </List>
      </div>
    )
  })
}

function renderContent(content) {
  return Object.keys(content.headers).map((value0, index0) => {
    return content.headers[value0].map((value1, index1) => {
      return (
        <Content
          id={underscore(value1)}
          key={parseInt(`${index0}${index1}`)}
          dangerouslySetInnerHTML={{
            __html: parseContent(content.content[value1])
          }}
          display={index0 === 0 && index1 === 0 ? 'block' : 'none'}
          previous={
            index1 === 0
              ? 'disabled'
              : () => {
                handleClick(
                  underscore(content.headers[value0][index1 - 1]),
                  content
                )
              }
          }
          next={
            content.headers[value0].length - 1 === index1
              ? 'disabled'
              : () => {
                handleClick(
                  underscore(content.headers[value0][index1 + 1]),
                  content
                )
              }
          }
        />
      )
    })
  })
}

export { renderSidebar, renderContent }

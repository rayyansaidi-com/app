import React from 'react'
import { underscore, handleClick, parseContent, encodeHTML } from './index'
import { Divider } from '../components'
import { Typography, SidebarItem, List } from '../components'
import Content from '../Content'

function renderSidebar(content) {
  return Object.keys(content.headers).map((value0, index0) => {
    return (
      <div key={index0}>
        <Divider />
        <Typography noWrap h6 className="sidebarHeader">
          {value0}
        </Typography>
        <Divider />
        <List>
          {content.headers[value0].map((value1, index1) => {
            return (
              <SidebarItem
                key={index1}
                onClick={() => {
                  handleClick(underscore(value1), content)
                }}
              >
                {encodeHTML(value1)}
              </SidebarItem>
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

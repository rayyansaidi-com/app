import marked from 'marked'
import React from 'react'
import insane from 'insane'
import axios from 'axios'
import defaultContent from '../content.json'

function parseJSON (any) {
  try {
    if (typeof any === 'string') {
      return JSON.parse(any)
    } else if (typeof any === 'object') {
      return any
    } else {
      return
    }
  } catch (err) {
    console.error(err)
  }
}

function parseContent (value) {
  return insane(marked(value))
}

function retargetLinks (query) {
  const q = document.querySelectorAll(query || 'a')
  for (let i = 0; i < q.length; i++) {
    q[i].setAttribute('target', '_blank')
  }
}

function underscore (str) {
  return str.replace(/ /g, '_').toLowerCase()
}

function handleClick (string, content) {
  // eslint-disable-next-line array-callback-return
  Object.keys(content.headers).map((value) => {
    // eslint-disable-next-line array-callback-return
    content.headers[value].map((value) => {
      document.getElementById(underscore(value)).style.display = 'none'
    })
  })
  document.getElementById(string).style.display = 'block'
}

function getContent() {
  axios
  .get(
    'https://raw.githubusercontent.com/rayyansaidi-com/app/master/src/content.json?rayyan_saidi_desktop_random=' +
      Math.random()
  )
  .then((response) => {
    localStorage.setItem('content', JSON.stringify(response.data))
    return JSON.stringify(response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error)

    if (!localStorage.getItem('content')) {
      localStorage.setItem('content', JSON.stringify(defaultContent))
      return JSON.stringify(defaultContent)
    } else if (
      localStorage.getItem('content').version < defaultContent.version
    ) {
      localStorage.setItem('content', JSON.stringify(defaultContent))
      return JSON.stringify(defaultContent)
    } else {
      return JSON.stringify(localStorage.getItem('content'))
    }
  })
}

function encodeHTML (string) {
  return string.replace(/[\u00A0-\u9999<>&]/g, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
 });
}

export { parseJSON, parseContent, retargetLinks, underscore, handleClick, getContent, encodeHTML }

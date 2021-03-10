import React from 'react'

export const menuList = [
  {
    name: 'Home',
    link: '/',
    icon: <i className="material-icons group-hover:text-cyan-400 mr-2">home</i>,
  },
  {
    name: 'Form',
    link: '/form/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z" />
      </svg>
    ),
  },
  {
    name: 'App',
    link: '/app/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    name: 'Gallery',
    link: '/gallery/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
      </svg>
    ),
  },
  {
    name: 'Photos',
    link: '/photos/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
      </svg>
    ),
  },
  // {
  //   name: 'Links',
  //   link: '/links/',
  //   icon: ,
  // },
]

export const linkList = [
  {
    id: 1,
    name: 'Google翻譯',
    link:
      'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">
        g_translate
      </i>
    ),
  },
  {
    id: 2,
    name: '日報',
    link:
      'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit?ouid=116808363677895581574&usp=sheets_home&ths=true',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">
        insert_invitation
      </i>
    ),
  },
  {
    id: 3,
    name: '批注詞',
    link:
      'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">
        text_snippet
      </i>
    ),
  },
  {
    id: 4,
    name: 'OA審批成效計算',
    link:
      'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">calculate</i>
    ),
  },
  {
    id: 5,
    name: '常用共用檔',
    link:
      'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws/edit#gid=1653933803',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">group_add</i>
    ),
  },
  {
    id: 6,
    name: '採購部共用檔',
    link:
      'https://docs.google.com/spreadsheets/d/1TBm2PKXAb9ihChkjfeFgtiCJ7wk8KV6K7NvM5_RkhoQ/edit#gid=0',
    icon: (
      <i className="material-icons group-hover:text-cyan-400 mr-2">
        folder_shared
      </i>
    ),
  },
]

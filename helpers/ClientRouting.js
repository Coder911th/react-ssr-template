// import React from 'react'
// import ReactDOM from 'react-dom'

// const pagesCache = {}

// export async function clientSideRendering(pageName) {
//     const Page = (await import(/* webpackChunkName: "client/[request]" */
//         `../pages/${pageName}`)).default
//     ReactDOM.hydrate(<Page/>, document.getElementById('content'))
// }

// export async function goTo(pageName) {
//     const content = await fetch(`server/${pageName}`).then(res => res.text())
//     pagesCache[pageName] = content
//     document.getElementById('content').innerHTML = content
//     clientSideRendering(pageName)
// }
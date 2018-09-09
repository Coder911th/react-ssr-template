import React from 'react'
import ReactDOM from 'react-dom'

PAGE_CONTENT_ELEMENT = document.getElementById('content')

async function clientSideRendering(pageName) {
    const Page = (await import(/* webpackChunkName: "client/[request]" */
        `../pages/${pageName}`)).default
    ReactDOM.hydrate(<Page/>, PAGE_CONTENT_ELEMENT)
}

clientSideRendering(location.pathname.slice(1))

const pagesCache = {}

export async function goTo(pageName) {
    const content = await fetch(`server/${pageName}`).then(res => res.text())
    pagesCache[pageName] = content
    PAGE_CONTENT_ELEMENT.innerHTML = content
    clientSideRendering(pageName)
}

console.log('123!')
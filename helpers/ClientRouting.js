import React from 'react'
import ReactDOM from 'react-dom'

const pagesCache = {}

// Запустить клиенский рендеринг страницы
export async function clientSideRendering(pageName) {
    const Page = (await import(/* webpackChunkName: "client/[request]" */
        `../pages/${pageName}`)).default
    ReactDOM.hydrate(<Page/>, document.getElementById('content'))
}

// Переход на конкретную страницу
export async function goTo(pageName) {
    history.pushState(null, null, pageName)
    const content = await fetch(`server/${pageName}`).then(res => res.text())
    pagesCache[pageName] = content
    const contentContainer = document.getElementById('content')
    ReactDOM.unmountComponentAtNode(contentContainer)
    contentContainer.innerHTML = content
    clientSideRendering(pageName)
}
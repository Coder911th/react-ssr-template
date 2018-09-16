import React from 'react'
import ReactDOM from 'react-dom'

const pagesCache = {}

function getPage(name) {
    return import(/* webpackChunkName: "client/[request]" */
        `../pages/${name}`).then(module => module.default)
}

// Запустить клиенский рендеринг страницы
export async function clientSideRendering(pageName) {
    const Page = await getPage(pageName)
    ReactDOM.hydrate(<Page/>, document.getElementById('content'))
}

// Переход на конкретную страницу
export async function goTo(pageName, pushState=true) {
    let Page = null
    const contentContainer = document.getElementById('content')

    if (pushState) {
        history.pushState(null, null, pageName)
    }

    // TODO: Проверить
    await Promise.all([
        // Предзагрузка страницы
        new Promise(resolve =>
            resolve(
                pagesCache[pageName]
                    ? pagesCache[pageName]
                    : fetch(`server/${pageName}`).then(res => res.text())))
            .then(content => {
                pagesCache[pageName] = content
                ReactDOM.unmountComponentAtNode(contentContainer)
                contentContainer.innerHTML = content
            }),
        // Загрузка страницы
        getPage(pageName).then(pageClass => Page = pageClass)
    ])

    // Установка мета данных страницы
    document.title = Page.title

    ReactDOM.hydrate(<Page/>, contentContainer)
}
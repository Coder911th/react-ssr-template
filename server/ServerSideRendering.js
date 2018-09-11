import React from 'react'
import {renderToNodeStream} from 'react-dom/server'

async function getPage(pageName) {
    return (await import(
        /* webpackChunkName: "server/[request]" */ `../pages/${pageName}`)).default
}

const firstChunk = (
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
        '<title>'
)
const secordChunk = (
        '</title>' +
    '</head>' +
    '<body>' +
        '<div id="content">'
)
const thirdChunk = (
        '</div>' +
            '<script src="/public/page-core.js" defer></script>' +
        '</body>' +
    '</html>'
)

export async function sendPageTemplate(res, pageName) {
    const Page = await getPage(pageName);
    res.set('Content-Type', 'text/html')
    res.write(firstChunk)
    if (Page.title) {
        res.write(Page.title)
    }
    res.write(secordChunk)
    const stream = renderToNodeStream(<Page/>)
    stream.pipe(res, {end: false})
    stream.on('end', () =>
        res.end(thirdChunk))
}

export async function serverSideRendering(res, pageName) {
    const Page = await getPage(pageName);
    res.set('Content-Type', 'application/javascript')
    renderToNodeStream(<Page/>).pipe(res, {end: true})
}
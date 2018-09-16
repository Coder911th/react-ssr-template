import React from 'react'
import fs from 'fs'
import path from 'path'
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
        '<style data-href="/client/'
)
const thirdChunk = '.css">'
const fourthChunk = (
    '</style>' +
    '</head>' +
    '<body>' +
        '<div id="content">'
)
const fifthChunk = (
        '</div>' +
            '<script src="/public/page-core.js" defer></script>' +
        '</body>' +
    '</html>'
)

export async function sendPageTemplate(res, pageName) {
    const PagePromise = getPage(pageName);
    const pathToStyles = path.resolve(__dirname, '..', 'build', 'client', `${pageName}.css`)
    // TODO: читать стили потоком, а не строкой
    fs.readFile(pathToStyles, async function(err, styles) {
        if (err) {
            // TODO: Обработка ситуации, когда у страницы нет стилей
            console.warn('Не удалось прочитать стили для страницы!', err)
            styles = ''
        }
        res.set('Content-Type', 'text/html')
        res.write(firstChunk)
        const Page = await PagePromise
        if (Page.title) {
            res.write(Page.title)
        }
        res.write(secordChunk)
        res.write(pageName)
        res.write(thirdChunk)
        res.write(styles)
        res.write(fourthChunk)
        const stream = renderToNodeStream(<Page/>)
        stream.pipe(res, {end: false})
        stream.on('end', () => res.end(fifthChunk))
    })
}

export async function serverSideRendering(res, pageName) {
    const Page = await getPage(pageName);
    res.set('Content-Type', 'application/javascript')
    renderToNodeStream(<Page/>).pipe(res, {end: true})
}
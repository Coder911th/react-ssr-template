import express from 'express'
import path from 'path'
import {
    serverSideRendering,
    sendPageTemplate
} from './ServerSideRendering'

const
    PORT = 8080,
    APP_FOLDER = path.resolve(__dirname, '..', 'build'),
    PUBLIC_FOLDER = path.resolve(__dirname, '..', 'public'),
    pagesRoutes = PAGES.map(pageName => `/${pageName}`),
    router = express()

router
    /* Выгрузка статики */
    // TODO: Проверить возможность выхода из "песочницы"
    .get('/public/:fileName', (req, res) =>
        res.sendFile(req.params.fileName, {root: PUBLIC_FOLDER}))
    /* Первая загрузка приложения */
    .get(pagesRoutes, (req, res) =>
        sendPageTemplate(res, req.path.slice(1)))
    /* Клиентский рендеринг */
    // TODO: Обработка 404. Блокировка доступа к fs.
    // TODO: отдельные роуты для страниц и для стилей
    .get('/client/:pageName', (req, res) =>
        res.sendFile(req.params.pageName, {
            root: path.resolve(APP_FOLDER, 'client')}))
    /* Серверный рендеринг */
    // TODO: Обработка 404. Блокировка доступа к fs.
    .get('/server/:pageName', (req, res) =>
        serverSideRendering(res, req.params.pageName))
    /* Not Found 404 */
    .get('*', (req,  res) => res.end('Not Found 404'))
    .listen(PORT, err => console.log(err
        ? `Не удалось запустить сервер! (Порт: ${PORT})`
        : `Сервер успешно запущен! (Порт: ${PORT})`))
/**
 * Выолняется только на клиенте
 */
import {clientSideRendering, goTo} from './ClientRouting'
clientSideRendering(location.pathname.slice(1))

// Обработка переходов назад/вперед
window.onpopstate = function() {
    goTo(location.pathname)
}
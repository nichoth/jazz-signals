import Router from '@nichoth/routes'
import { Home } from './home.js'
import { ListView } from './list.js'

export default function _Router ():ReturnType<Router> {
    const router = Router()

    router.addRoute('/', () => {
        return Home
    })

    router.addRoute('/login', () => {
        return (props) => {
            return <div>login</div>
        }
    })

    router.addRoute('/id/:id', () => {
        return ListView
    })

    return router
}

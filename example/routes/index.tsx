import Router from '@nichoth/routes'
import { Home } from './home.js'
import { ListView } from './list.js'
// import { Login } from './pages/login.jsx'
// import { MainView } from './pages/main.jsx'
// import { Home } from './pages/home.jsx'

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

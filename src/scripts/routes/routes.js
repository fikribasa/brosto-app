import RestoHome from '../views/pages/resto-home'
import RestoFavorite from '../views/pages/resto-favorites'
import RestoDetail from '../views/pages/resto-detail'

const routes = {
  '/': RestoHome,
  '/home': RestoHome,
  '/favorite': RestoFavorite,
  '/detail/:id': RestoDetail
}

export default routes

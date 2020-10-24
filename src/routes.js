import HomePage from './Page/HomePage';
import PromoPage from './Page/PromoPage';
import RestaurantPage from './Page/RestaurantPage'
import FavoritesPage from './Page/FavoritesPage'

export const  routes = [
    {path:'' , component: HomePage},
    {path:'/promopage' , component:PromoPage},
    {path:'/restaurant/:id',component:RestaurantPage, name:'restaurant'},
    {path:'/favorites', component:FavoritesPage}
];
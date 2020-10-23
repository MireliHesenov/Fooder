import HomePage from './Page/HomePage';
import PromoPage from './Page/PromoPage';
import RestaurantPage from './Page/RestaurantPage'
export const  routes = [
    {path:'' , component: HomePage},
    {path:'/promopage' , component:PromoPage},
    {path:'/restaurant/:id',component:RestaurantPage, name:'restaurant'}
];
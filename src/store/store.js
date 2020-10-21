import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
 state:{
    restaurants : [

        {
            restaurant_name : "Burger King" ,
            restaurant_description : "Burger King (BK) hamburgerli fast food restoranlarının Amerikan qlobal şəbəkəsidir",
            restaurant_photo : "",
    
            restaurant_menu:[{
                "photo": "./src/assets/image/assorted.png",
                "name": "Snek miks",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/BigSnekMiks.jpg",
                "name": "Big Snek Miks",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/KingSneks.jpg",
                "name": "King Snek Miks",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/Hamburger.jpg",
                "name": "Hamburger",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/Cizburger.jpg",
                "name": "Cizburger",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/CikenBurger.jpg",
                "name": "Ciken Burger",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/Vooper.jpg",
                "name": "Vooper",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
            {
                "photo": "./src/assets/image/Steakhouse.jpg",
                "name": "Steakhouse",
                "detail": "Delics Fruit salad,Ngasem",
                "newPrice": 18.500,
                "oldPrice": 22.500,
                "stock": 5
            },
        ]}]
 }
})
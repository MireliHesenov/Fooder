
export const favorites ={
    state: () =>({
    
        favorites:[]
     }),
     getters:{
    
         favorites(state){
             return state.favorites
         }
     },
     mutations:{
        like(state,newItem){
            let found = false;
            for(let itemIndex in state.favorites){
                let item = state.favorites[itemIndex]
                console.log(item)
                if(item.menu_name == newItem.menu_name){
                     found = true;
                };
                
            }

            if(!found){
                state.favorites.push(newItem)
            }
        },
        removeFavorite(state,item){
            for(let itemIndex in state.favorites){
                let currentItem = state.favorites[itemIndex]
                if(currentItem.menu_name == item.menu_name){
                    state.favorites.splice(itemIndex,1);
                } 
            }
        }
    },
    
}
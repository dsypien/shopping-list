import axios from 'axios';

export function addListItem (item) {
   return new Promise( (res, rej) => {
      axios.post("http://localhost:3001/shoppinglist", item)
      .then( apiRes => {
         res(apiRes);
      })
      .catch( err => {
         console.log("Error posting list item ")
         console.log(err);
         rej(err);
      })
   });   
} 

export function editListItem (item) {
   return new Promise ( (res, rej) => {
      axios.put(`http://localhost:3001/shoppinglist/${item.id}`, item)
         .then( apiRes => {
            res(apiRes);
         })
         .catch( err => {
            console.log("Error updating list item ")
            console.log(err);
            rej(err);
         })
   });
}
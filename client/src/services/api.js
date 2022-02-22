import axios from 'axios';

export function addListItem (item) {
   return new Promise( (res, rej) => {
      axios.post("http://localhost:3001/shoppinglist", item)
      .then( apiRes => {
         console.log(apiRes);
         console.log(apiRes.data);
         res(apiRes);
      })
      .catch( err => {
         console.log("Error posting list item ")
         console.log(err);
         rej(err);
      })
   })   
} 
import React from "react";
import { Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingListItem = (props) => {
   const { item } = props;

   return (
      <div className="shopping-list-item mb-3">
         <div className="flex-container" key={item.id}>
            <div className="left-container"> 
               <Checkbox style={{padding: "12px"}} />
            </div>
            <div className="shopping-list-body">
               <div>
                  <h3>{item.itemName} ({item.quantity})</h3>
               </div>
               <span>{item.description}</span>                        
            </div>
            <div className="right-container">
               <EditIcon />
               <DeleteIcon className="ml-1"/>
            </div>
         </div>
      </div>
   )
}

export default ShoppingListItem;
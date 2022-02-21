import React from "react";
import { Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const ShoppingListItem = (props) => {
   const { item } = props;
   const navigate = useNavigate();

   const onDeleteItem = () => {
      // TODO: delete
   }

   const onEditItem = () => {
      navigate(`/edit/${item.id}`);
   }

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
               <EditIcon onClick={onEditItem}/>
               <DeleteIcon className="ml-1"/>
            </div>
         </div>
      </div>
   )
}

export default connect()(ShoppingListItem);
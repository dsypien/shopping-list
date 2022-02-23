import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteItemDialog from "./DeleteItemDialog";
import { handleEditItem } from "../actions/shoppingList";


const ShoppingListItem = (props) => {   
   const { item } = props;
   const [purchased, setPurchased] = useState(item.purchased || false);
   const navigate = useNavigate();

   const onEditItem = () => {
      navigate(`/edit/${item.id}`);
   }

   useEffect( () => {
      setPurchased(props.item.purchased)
   }, [props.item.purchased])

   const onTogglePurchase = () => {  
      //setPurchased(prevPurchased => !prevPurchased)
      const { id, itemName, description, quantity } = item;
      props.dispatch(handleEditItem({
         id,
         itemName,
         description,
         quantity,
         purchased: !purchased
      }))
   }

   if(item === null){
      return <p>This item does not exist.</p>
   }

   return (      
      <div className={`shopping-list-item mb-3 ${item.purchased ? 'purchased' : ''}`}>
         <div className="flex-container" key={item.id}>
            <div className="left-container"> 
               <Checkbox 
                  checked={purchased}
                  onClick={() => {onTogglePurchase()}}
                  style={{padding: "12px"}} />
            </div>
            <div className="shopping-list-body">
               <div className="item-name">{item.itemName} ({item.quantity})</div>
               <div className="item-description">{item.description}</div>                        
            </div>
            <div className="right-container">
               <ModeEditOutlineOutlinedIcon onClick={() => {onEditItem()}}/>
               <DeleteItemDialog id={item.id}/>
            </div>
         </div>
      </div>
   )
}

export default connect()(ShoppingListItem);
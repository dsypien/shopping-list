import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingList = (props) => {   
   const {list} = props;
   const navigate = useNavigate();

   const onAddItem = () => {
      navigate("/add");
   }

   return (
      <>
         <h2>Shopping List</h2>
         <div style={{display: "flex", justifyContent: "space-between", margin: "25px"}}>
            <h3>Your items</h3>
            <Button 
               size="small"
               variant="contained"
               onClick={onAddItem}>
               Add Item
            </Button>               
         </div>
         <div className="shopping-list">               
            {list && list.map(item => (
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
            ))}
         </div>         
      </>
   )
}

function mapStateToProps ({shoppingList}) {
   if(shoppingList) {
      const list = Object.values(shoppingList);
      return {
         list,
      }
   }
   return {
   
   }
}

export default connect(mapStateToProps)(ShoppingList);
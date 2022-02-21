import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingListItem from "./ShoppingListItem";

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
               <ShoppingListItem item={item} />
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
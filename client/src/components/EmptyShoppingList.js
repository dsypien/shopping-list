import React, { Component } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EmptyShoppingList () {
   const navigate = useNavigate();

   const onAddItem = () => {
      navigate("/add");
   }

   return (
      <div className="empty-container">
         <div className="item-form-h3 mb-4">Your shopping list is empty :(</div>
         <Button 
            size="large"
            variant="contained"
            onClick={onAddItem}>
            Add your first Item
         </Button>
      </div>      
   )
}
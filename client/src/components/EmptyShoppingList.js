import React, { Component } from "react";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export default function EmptyShoppingList () {
   const navigate = useNavigate();

   const onAddItem = () => {
      navigate("/add");
   }

   return (
      <>
         <h3>Your shopping list is empty :(</h3>)
         <Button 
            size="large"
            variant="contained"
            onClick={onAddItem}>
            Add your first Item
         </Button>
      </>
   )
}
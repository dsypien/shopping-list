import React, { Component } from "react";
import { Button } from "@mui/material";

class EmptyShoppingList extends Component {
   render () {
      return (
         <>
            <h3>Your shopping list is empty :(</h3>)
            <Button 
               size="large"
               variant="contained"
               onClick={this.onAddItem}>
               Add your first Item
            </Button>
         </>
      )
   }
}

export default EmptyShoppingList;
import React, { Component } from "react";
import { TextField } from "@mui/material";
import Dropdown from "./InputFields/Dropdown";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { createShoppingListItem } from "../actions/shoppingList";

class AddItem extends Component {
   state = {
      id: this.props.id || null,
      itemName: this.props.itemName || "",
      description: this.props.description || "",
      quantity: this.props.quantity || ""
   }

   quantityOptions = [{value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}]

   setInputValue = (e) => {
      if (e.target.type === "checkbox") {
         this.setState({
            [e.target.name] : e.target.checked
         })
      } else {
         this.setState({
            [e.target.name]: e.target.value
         })
      }
   }

   onAddItem = () => {
      this.props.dispatch(createShoppingListItem({
         itemName: this.state.itemName,
         description: this.state.description,
         quantity: this.state.quantity
      }));
   }

   onCancel = () => {
      // TODO: navigate back to dashboard  
   }

   render () {
      return (
         <div className="item-form">
            <h2>Add an Item</h2>
            <TextField
               style={{width:"100%", margin: "10px"}}
               name="itemName"
               label="Item Name"
               value={this.state.itemName}
               onChange={(e) => this.setInputValue(e) }
               variant="outlined"
               autoComplete="off" />
            <TextField
               style={{width:"100%", margin: "10px"}}
               name="description"
               label="Description"
               multiline={true}
               rows={5}
               value={this.state.description}
               onChange={(e) => this.setInputValue(e) }
               variant="outlined"
               autoComplete="off" />
            <Dropdown
               name="quantity"
               label="How many?"
               value={this.state.quantity}
               options={this.quantityOptions}
               handleChange={(e) => this.setInputValue(e)}
            />
            <div style={{display: "flex", justifyContent: "space-evenly", margin: "25px"}}>
               <Button 
                  size="large"
                  variant="outlined"
                  onClick={this.onCancel}>
                  Cancel
               </Button>
               <Button 
                  size="large"
                  variant="contained"
                  onClick={this.onAddItem}>
                  Add Item
               </Button>
               
            </div>
            
         </div>
      )
   }
}

export default connect()(AddItem);
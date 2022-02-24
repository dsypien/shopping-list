import React, { Component } from "react";
import { TextField } from "@mui/material";
import Dropdown from "./InputFields/Dropdown";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { handleAddItem } from "../actions/shoppingList";
import { Navigate } from "react-router-dom";

class AddItem extends Component {
   state = {
      id: this.props.id || null,
      itemName: this.props.itemName || "",
      itemNameError: "",
      description: this.props.description || "",
      quantity: this.props.quantity || "",
      quantityError: "",
      navigateDashboard : false
   }

   characterLimit = 100;
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
      if(this.validateForm()){
         const { itemName, description, quantity } = this.state;

         this.props.dispatch(handleAddItem({
            itemName,
            description,
            quantity,
            purchased: false
         }));

         this.setState({navigateDashboard: true});
      }      
   }

   validateForm = () => {
      let isValid = true;

      if(this.state.itemName.trim() === "") {
         this.setState({
            itemNameError: "Please enter an item."
         });
         isValid = false;
      }

      if(this.state.quantity === "") {
         this.setState({
            quantityError: "Please select a quantity."
         })
         isValid = false;
      }

      return isValid;
   }

   onCancel = () => {
      this.setState({navigateDashboard: true});
   }

   render () {
      if(this.state.navigateDashboard){
         return <Navigate to="/" />;
      }

      return (
         <div className="item-form">
            <div className="item-form-h3">Add an Item</div>
            <div className="item-form-h4">Add your new item below</div>
            <TextField               
               style={{width:"100%", margin: "10px 0px"}}
               name="itemName"
               label="Item Name"
               value={this.state.itemName}
               onChange={(e) => this.setInputValue(e) }
               variant="outlined"
               required
               error={this.state.itemNameError.length > 0}
               helperText={this.state.itemNameError}
               autoComplete="off" />
            <TextField
               style={{width:"100%", margin: "10px 0px"}}
               name="description"
               label="Description"
               multiline={true}
               rows={5}
               value={this.state.description}
               onChange={(e) => this.setInputValue(e) }
               variant="outlined"
               inputProps={{maxLength: 100}}
               autoComplete="off" />
            <p className="character-counter">{`${this.state.description.length}/${this.characterLimit}`}</p>
            <Dropdown
               name="quantity"               
               label="How many?"               
               value={this.state.quantity}
               options={this.quantityOptions}
               required={true}
               error={this.state.itemNameError.length > 0}
               helperText={this.state.itemNameError}
               handleChange={(e) => this.setInputValue(e)}
            />
            <div className="btn-container-right">
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
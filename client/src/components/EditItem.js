import React, { Component, useEffect } from "react";
import { TextField } from "@mui/material";
import Dropdown from "./InputFields/Dropdown";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { handleEditItem } from "../actions/shoppingList";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditItem = (props) => {
   const { id } = useParams();
   const item = props.shoppingList[id];
   const navigate = useNavigate();
   const [itemName, setItemName] = useState(item.itemName || ""); 
   const [itemNameError, setItemNameError] = useState(""); 
   const [description, setDescription] = useState(item.description || ""); 
   const [quantity, setQuantity] = useState(item.quantity || ""); 
   const [quantityError, setQuantityError] = useState(""); 
   const [purchased, setPurchased] = useState(item.purchased || false);

   const quantityOptions = [{value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}];
   const characterLimit = 100;

   const onSaveItem = () => {
      if (validateForm()) {
         props.dispatch(handleEditItem({
            id,
            itemName,
            description,
            quantity,
            purchased,
         }));

         navigate("/");
      }       
   }

   const validateForm = () => {
      let isValid = true;

      if(itemName.trim() === "") {
         setItemNameError("Please enter an item.");
         isValid = false;
      }

      if(quantity === "") {
         setItemNameError("Please select a quantity.");
         isValid = false;
      }

      return isValid;
   }

   const onCancel = () => {
      navigate("/");
   }

   return (
      <div className="item-form">
         <div className="item-form-h3">Edit an Item</div>
         <div className="item-form-h4">Edit your item below.</div>
         <TextField
            style={{width:"100%", margin: "10px 0px"}}
            name="itemName"
            label="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value) }
            variant="outlined"
            required
            error={itemNameError.length > 0}
            helperText={itemNameError}
            autoComplete="off" />
         <TextField
            style={{width:"100%", margin: "10px 0px"}}
            name="description"
            label="Description"
            multiline={true}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value) }
            variant="outlined"
            inputProps={{maxLength: 100}}
            autoComplete="off" />
         <p className="character-counter">{`${description.length}/${characterLimit}`}</p>
         <Dropdown
            name="quantity"
            label="How many?"
            value={quantity}
            options={quantityOptions}
            required={true}
            error={itemNameError.length > 0}
            helperText={itemNameError}
            handleChange={(e) => setQuantity(e.target.value)}/>
         <FormControlLabel 
            name="purchased"
            label="Purchased"
            className="faded-text"
            control={<Checkbox
               onClick={(e) => setPurchased(e.target.checked)}
               checked={purchased}/>}/>
         <div className="btn-container-right">
            <Button 
               size="large"
               variant="outlined"
               onClick={onCancel}>
               Cancel
            </Button>
            <Button 
               size="large"
               variant="contained"
               onClick={onSaveItem}>
               Save Item
            </Button>
            
         </div>
         
      </div>
   )
}

function mapStateToProps({shoppingList}){
   return {
      shoppingList,
   }
}

export default connect(mapStateToProps)(EditItem);
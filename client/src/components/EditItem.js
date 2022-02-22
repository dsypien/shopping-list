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
   const [description, setDescription] = useState(item.description || ""); 
   const [quantity, setQuantity] = useState(item.quantity || ""); 
   const [purchased, setPurchased] = useState(item.purchased || false);

   const quantityOptions = [{value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}];

   const onSaveItem = () => {
      props.dispatch(handleEditItem({
         id,
         itemName,
         description,
         quantity,
         purchased,
      }));

      navigate("/");
   }

   const onCancel = () => {
      navigate("/");
   }

   return (
      <div className="item-form">
         <h2>Edit an Item</h2>
         <TextField
            style={{width:"100%", margin: "10px"}}
            name="itemName"
            label="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value) }
            variant="outlined"
            autoComplete="off" />
         <TextField
            style={{width:"100%", margin: "10px"}}
            name="description"
            label="Description"
            multiline={true}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value) }
            variant="outlined"
            autoComplete="off" />
         <Dropdown
            name="quantity"
            label="How many?"
            value={quantity}
            options={quantityOptions}
            handleChange={(e) => setQuantity(e.target.value)}/>
         <FormControlLabel 
            name="purchased"
            label="Purchased"
            control={<Checkbox
               onClick={(e) => setPurchased(e.target.checked)}
               checked={purchased}/>}/>
         <div style={{display: "flex", justifyContent: "space-evenly", margin: "25px"}}>
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
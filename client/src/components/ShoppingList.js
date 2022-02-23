import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingListItem from "./ShoppingListItem";
import Pagination from '@mui/material/Pagination';
import { handleGetShoppingList } from "../actions/shoppingList";

const ShoppingList = (props) => {   
   const { list, pagination } = props;
   const [currentPage, setCurrentPage] = useState(props.pagination.currentPage);

   const navigate = useNavigate();

   const onAddItem = () => {
      navigate("/add");
   }

   const onPaginationClick = (event, value) => {
      if(value !== currentPage){
         props.dispatch(handleGetShoppingList(value));
      }
   }

   useEffect(()=> {
      setCurrentPage(props.pagination.currentPage);
   }, [props.pagination.currentPage])

   return (
      <>
         <div className="shopping-list-header">
            <span>Your Items</span>
            <Button 
               variant="contained"
               onClick={onAddItem}>
               Add Item
            </Button>               
         </div>
         <div className="shopping-list">               
            {list && list.map(item => (
               <ShoppingListItem key={item.id} item={item} />
            ))}
         </div>      
         <Pagination 
            style={{display: "flex", justifyContent: "center"}}
            count={pagination.totalPages} 
            page={currentPage}
            onChange={onPaginationClick}
            color="primary" />
      </>
   )
}

function mapStateToProps ({shoppingList, pagination}) {
   return {
      list: Object.values(shoppingList),
      pagination,
   }
}

export default connect(mapStateToProps)(ShoppingList);
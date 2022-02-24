import React, { useEffect, useState } from "react";
import ShoppingList from "./ShoppingList";
import EmptyShoppingList from "./EmptyShoppingList";
import { connect } from "react-redux";
import { CircularProgress } from "@mui/material";

const Dashboard = (props) => {   
   const [isLoading, setLoading] = useState(props.loading);
   const [numItems, setNumItems] = useState(props.itemCount)

   useEffect(() => {
      setLoading(props.loading);
      setNumItems(props.itemCount);
   }, [props.loading, props.itemCount])

   const renderDashboard = () => {  
      if (isLoading) {
         return (
            <div className="spinner-container">
               <CircularProgress id="circular-progress" />
            </div>
         );
      }  else if(numItems > 0){
         return <ShoppingList />
      } else {
         return <EmptyShoppingList />
      }
   }

   return (
      <div className="dashboard">
         {renderDashboard()}
      </div>
   )
}

function mapStateToProps ({shoppingList, appStatus}) {
   const itemCount = Object.keys(shoppingList).length;

   return {
      itemCount,
      loading: appStatus.loading
   }
}

export default connect(mapStateToProps)(Dashboard);
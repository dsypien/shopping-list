import React from "react";
import ShoppingList from "./ShoppingList";
import EmptyShoppingList from "./EmptyShoppingList";
import AddItem from "./AddItem";
import { connect } from "react-redux";

const Dashboard = (props) => {
   const { itemCount } = props;

   const renderDashboard = () => {      
      if(itemCount > 0){
         return <ShoppingList />
      } else {
         return <EmptyShoppingList />
      }
   }

   return (
      <div className="dashboard">
         Dashboard
         {renderDashboard()}
         <AddItem />
      </div>
   )
}

function mapStateToProps ({shoppingList}) {
   const itemCount = Object.keys(shoppingList).length;

   return {
      itemCount,
   }
}

export default connect()(Dashboard);
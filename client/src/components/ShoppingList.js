import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingList extends Component {   
   render () {
      const {list} = this.props;
      return (
         <>
            <h2>Shopping List</h2>
            <table>               
               {list && list.map(item => (
                  <tr key={item.id}>
                     <td>{item.itemName}</td>
                     <td>{item.description}</td>
                     <td>{item.quantity}</td>
                  </tr>
               ))}
            </table>
         </>
      )
   }
}

function mapStateToProps ({shoppingList}) {
   if(shoppingList) {
      const list = Object.values(shoppingList);
      return {
         list,
      }
   }
   return {
   
   }
}

export default connect(mapStateToProps)(ShoppingList);
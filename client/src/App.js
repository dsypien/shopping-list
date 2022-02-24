import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import { handleGetShoppingList } from "./actions/shoppingList";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"

function App(props) {
  useEffect( () => {
    props.dispatch(handleGetShoppingList());
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav title="Shopping Cart"/>        
        <Routes>
          <Route path="/" exact element={<Dashboard />}/>
          <Route path="/add" element={<AddItem />}/>
          <Route path="/edit/:id" element={<EditItem />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default connect()(App);

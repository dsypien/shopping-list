import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { hideAlertStatus } from '../actions/appStatus';
import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { connect } from 'react-redux';

const ButtonAppBar = (props) => {
   const { title } = props;
   const [ alertText, setAlertText] = useState(props.alertText || "");
   const [ showAlert, setShowAlert] = useState(props.showAlert || "");
 
   const onCloseAlert = () => {
     props.dispatch(hideAlertStatus());
   } 

   useEffect( () => {
      setAlertText(props.alertText);
      setShowAlert(props.showAlert);
    }, [props.alertText, props.showAlert]);
  

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  { title }
               </Typography>
            </Toolbar>
         </AppBar>
         { showAlert && 
          <Alert onClose={onCloseAlert} severity="error">{alertText}</Alert>
        }        
      </Box>
   );
}

function mapStateToProps ({appStatus}) {
   return {
     showAlert: appStatus.alertText !== "",
     alertText: appStatus.alertText
   }
 }

export default connect(mapStateToProps)(ButtonAppBar)
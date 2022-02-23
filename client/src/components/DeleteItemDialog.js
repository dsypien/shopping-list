import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { connect } from 'react-redux';
import { handleDeleteItem } from '../actions/shoppingList';

const DeleteItemDialog = (props) => {
   const [open, setOpen] = React.useState(false);
   const {id} = props;

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleDelete = () => {
      props.dispatch(handleDeleteItem(id));
      setOpen(false);
   }

   return (
      <div>
         <DeleteOutlineOutlinedIcon onClick={handleClickOpen} />
         <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
         >
         <DialogTitle id="alert-dialog-title">
            {"Delete Item?"}
         </DialogTitle>
         <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?  This cannot be undone.
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button
               size="large"
               variant="outlined" 
               onClick={handleClose}>
                  Cancel
            </Button>
            <Button 
               size="large"
               variant="contained"
               onClick={handleDelete} autoFocus>
               Delete
            </Button>
         </DialogActions>
         </Dialog>
      </div>
   );
}

export default connect()(DeleteItemDialog)
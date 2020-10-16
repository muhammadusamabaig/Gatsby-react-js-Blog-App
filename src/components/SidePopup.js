import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {ArrowForwardIos}  from '@material-ui/icons';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(true);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={12000}
        onClose={handleClose}
        message="VIEW ALL BLOGS"
        action={
          <React.Fragment>
            <Button style={{color:"white"}} size="large" onClick={handleClose}>
              <ArrowForwardIos/>
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

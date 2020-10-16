import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function Rating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>nnsjcjdsc</h1>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={4} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </div>
  );
}
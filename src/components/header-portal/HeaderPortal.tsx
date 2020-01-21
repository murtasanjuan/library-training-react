import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './HeaderPortal.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
export function HeaderPortal() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className='App-header'>
          <Typography variant='h6' className={classes.menuButton}>
            <Link className='App-link' to='/'>
              BoomPortal
            </Link>
          </Typography>
          <Typography variant='h6' className={classes.title}>
            <Link className='App-link' to='/catalog'>
              Catalog
            </Link>
          </Typography>
          <Typography variant='h6' >
          <Button color='inherit'>
            Account
          </Button>
          </Typography>
          <Typography variant='h6' >
          <Button color='inherit'>
           <SearchIcon />
           </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

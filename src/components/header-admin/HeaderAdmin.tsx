import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import './HeaderAdmin.scss';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    background: 'Black',
    borderRadius: 30,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})(Button);

export function HeaderAdmin() {
  return (
    <AppBar>
      <Toolbar className='headerAdminPortal'>
        <Typography variant='h6'>BoomPortaal</Typography>
        <div className='adminBarIcon'>
          <StyledButton>
            <Link to='/'>Home</Link>
            <PersonIcon className='header-icon' />
          </StyledButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

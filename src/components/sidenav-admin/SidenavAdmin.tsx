import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import './SidenavAdmin.scss';

export function SidenavAdmin() {
  const navValues = ['Portals', 'Pages', 'Widgets', 'Configuration'];

  return (
    <div className='drawer'>
      <List>
        {navValues.map(text => (
          <ListItem button key={text}>
            <Typography variant='h6'>
              <ListItemText primary={text} />
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

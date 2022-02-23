import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const StyledRoot = styled.div`
  height: 500px;

  .toolbar {
    position: relative;

    .fab {
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }

  .list {
    margin-top: 100px;
  }
`;


class App extends Component {

  render() {
    return (
      <StyledRoot>
      
        <AppBar>
          <Toolbar className="toolbar">
            <Fab className="fab">
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>

        <List className="list" >
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>

      </StyledRoot>
    );
  }
}

render(<App />, document.getElementById('root'));

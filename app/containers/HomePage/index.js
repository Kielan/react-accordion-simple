/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Collapse, { Panel } from 'rc-collapse';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Accordion from '../../components/Accordion';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500, blue500} from 'material-ui/styles/colors';
import CampaignsAccordion from '../CampaignsAccordion';

const muiTheme = getMuiTheme({
    palette: {
	accent1Color: blue500,
    },
});
const materialStyle = {
    homePage: {
	display: 'flex',
	flex: 1,
	backgroundColor: '#E7E7E7',
	height: 800,
	width: 1100,
	
    },
    listContainer: {
	paddingTop: 60,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
    },
    listPrefix: {
	backgroundColor: '#FAFBFB',
	maxHeight: 89,
	flex: 1,
	alignItems: 'center',
	display: 'flex',

    },
    inputBoxContainer: {
	height: 50,
	marginBottom: 0,
	border: '1px solid #cfd8dc',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	width: 450,
	marginLeft: 80,
    },
    inputBox: {
	height: 50,
	width: 400,
	color: '#FFFFFF',
    },
    buttonSearchDropdownMenu: {
	alignSelf: 'flex-end',
    },
    buttonSearchDropdownIcon: {
		borderLeft: '1px solid #cfd8dc',
	float: 'right',
	backgroundColor: '#F2F4F7',
    },
    listHeader: {
	height: 90,
	backgroundColor: '#FFFFFF',
	display: 'flex',
	alignItems: 'center',
	border: '1px solid #eceff1',
		justifyContent: 'space-between',

    },
    listHeaderContent: {
	marginLeft:80,
	display: 'flex',
	alignItems: 'center',
	
    },
    listHeaderContentTitle: {
    	fontSize: 15,
	textTransform: 'uppercase',
	color: '#455a64',
	fontWeight: 600,
	marginRight: 20,
    },
    listHeaderContentSubtitle: {
	color: '#a5b2bb',
	fontSize: 13,
	fontWeight: 400,
    },
    accordianExpand: {
		marginRight: 40,
    }
}

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  render() {
    return (
	    <div style={materialStyle.homePage}>
	    <div style={materialStyle.listContainer}> 
	    <div style={materialStyle.listPrefix}>
	    <div style={materialStyle.inputBoxContainer}>
	    <input style={materialStyle.inputBox}/>
 <MuiThemeProvider muiTheme={muiTheme}>
            <IconMenu
	style={materialStyle.buttonSearchDropdownMenu}
            iconButtonElement={
              <IconButton style={materialStyle.buttonSearchDropdownIcon} touch={true} >
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            </IconMenu>
	    </MuiThemeProvider>
	    </div>
	    </div>

	    <CampaignsAccordion />
	
	    </div>
	    </div>
    );
  }
}

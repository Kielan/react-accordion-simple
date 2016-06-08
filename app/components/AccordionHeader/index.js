import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500, blue500} from 'material-ui/styles/colors';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

const muiTheme = getMuiTheme({
    palette: {
	accent1Color: blue500,
    },
});

const materialStyle = {
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
}
export default class AccordionHeader extends React.Component {

  render() {
      return (
	  	    <div style={materialStyle.listHeader}>
	    <div style={materialStyle.listHeaderContent}>
	      <span style={materialStyle.listHeaderContentTitle}>{this.props.HeaderContentTitle}</span>
	      <span style={materialStyle.listHeaderContentSubtitle}>{this.props.HeaderContentSubtitle}</span>
	    </div>
	    <MuiThemeProvider muiTheme={muiTheme}>
	    <NavigationExpandMoreIcon style={materialStyle.accordianExpand}/>     
	    </MuiThemeProvider>
	    </div>
      )
  }
}

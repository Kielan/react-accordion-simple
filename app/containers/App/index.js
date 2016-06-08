/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Appbar from 'material-ui/AppBar';
import * as mui from 'material-ui';
import {deepOrange500, blue500} from 'material-ui/styles/colors';
import ElementRight from '../ElementRight';
import ElementLeft from '../ElementLeft';
import styles from './styles.css';
const muiTheme = getMuiTheme({
    palette: {
	accent1Color: deepOrange500,
    },
});

const appBarStyle = {
    appBar: {
	height: 65,
	zIndex: 1,
	backgroundColor: '#0D47A1',
	div: {
	    marginTop: 0,
	}
    },
    subElementStyle: {
	margin: 0,
    }
}
//from './appbarStyles.css';
/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

    static propTypes = {
	children: React.PropTypes.node,
    };

    static childContextTypes = {
	muiTheme: React.PropTypes.object
    }

  //  getChildContext() {
//	let ThemeManager = new mui.Styles.ThemeManager();
//	return {
//	    muiTheme: ThemeManager.getCurrentTheme()
//	}
 //   }
//iconElementRight={<ElementRight/>}
//	  className={styles.appBar}
    render() {
	/* this.props.children is individual page view components*/
      return (
	  <div>
	      <MuiThemeProvider muiTheme={muiTheme}>
	      <Appbar
	  iconElementLeft={<ElementLeft style={appBarStyle.subElementStyle}/>}
	  iconElementRight={<ElementRight/>}
	  style={appBarStyle.appBar}
	      />
	      </MuiThemeProvider>
	      {this.props.children}
	  </div>
    );
  }
}

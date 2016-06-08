
import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import Menu from 'material-ui/svg-icons/navigation/menu';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import { white} from 'material-ui/styles/colors';
import styles from './styles.css'
const materialStyles = {
    actionHome: {
	color: 'white',
	fontSize: 24,
    },
    flex: {
	flex: 1,
	top: 0,
	alignItems: 'center',
	margin: 'auto',
	position: 'absolute',
	left: 0,
	width: 600,
    },
    iconContainer: {
	float: 'left',
    },
    icon: {
	flex: 1,
	height: 26,
	width: 26,
	margin: '19 0 0 24',
	float: 'left',
    },
    campaignTitleContainer: {
	marginTop: 22,
	float: 'left',
	color: 'white',
	textTransform: 'uppercase',
	fontSize: 14,
    },
    chevronRightContainer: {
	marginLeft: 0,
	marginRight: 0,
	marginTop: 19,
	float: 'left',
    },
    chevronRight: {
	margin: 0,
    },
    menuContainer: {

	borderRight: '1px solid #1565C0',
	width: 77,
	height: 65,
	float: 'left',
    }
}
export default class ElementLeft extends React.Component {
      render() {
	  return (
		  <div style={materialStyles.flex}>
		  <div style={materialStyles.menuContainer}>
		  <Menu color={white} style={materialStyles.icon}/>
		  </div>
		  <div style={materialStyles.iconContainer}>
		  <ActionHome  color={white} style={materialStyles.icon}/>
		  </div>
		  <div style={materialStyles.chevronRightContainer}>
		  <ChevronRight color={white} style={materialStyles.chevronRight} />
		  </div>
		  <div style={materialStyles.campaignTitleContainer}>
		  <span>create campaign</span>
		  </div>
		  </div>
	  )
      }
}

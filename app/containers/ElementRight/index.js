
import React from 'react';
import Img from '../../components/Img';
import Bolt from 'material-ui/svg-icons/image/flash-on';
import Avatar from 'material-ui/Avatar';
import NotificationsBell from 'material-ui/svg-icons/social/notifications';
import Profile from './profile.jpeg';
import { white} from 'material-ui/styles/colors';
const componentStyles = {
    img: {
	maxWidth: 10,
	maxHeight: 10,
    }
}

export default class ElementRight extends React.Component {
      render() {
	  return (
		  <div>
		  <Bolt color={white}/>
		  <NotificationsBell color={white} />
		  <Avatar src={Profile}/>
	      </div>
	  )
      }
}

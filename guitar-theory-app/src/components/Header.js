import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import DropMenu from './Dropdown'


class Header extends Component {
    render() {
      return (
          <div className="flex pa1 justify-between black">
            <div className="f1 lh-title avenir">FretFriend</div>
            <div>
              <DropMenu />
            </div>
          </div>
      )
    }
  }
  
  export default Header
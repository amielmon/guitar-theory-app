import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class Header extends Component {
    render() {
      return (
          <div className="flex flex-fixed black">
            <div className="f1 lh-title avenir">FretFriend</div>
          </div>
      )
    }
  }
  
  export default Header
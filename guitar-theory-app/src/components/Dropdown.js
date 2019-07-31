import { Menu, Dropdown, Icon } from 'antd'
import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const rootMenu = (
    <Menu>
      <Menu.Item>
        <a className="f9 lh-copy avenir">
          A
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="f9 lh-copy avenir">
          A#/Bb
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="f9 lh-copy avenir">
          B
        </a>
      </Menu.Item>
    </Menu>
  );
  
  const chordMenu = (
      <Menu>
        <Menu.Item>
          <a className="f9 lh-copy avenir">
            Maj
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="f9 lh-copy avenir">
            Maj6
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="f9 lh-copy avenir">
            Maj7
          </a>
        </Menu.Item>
      </Menu>
    );

class DropMenu extends Component {

    render() {
        return (
            <div>
              <Dropdown overlay={rootMenu}>
                  <a className="f9 lh-copy avenir">
                      Root Note <Icon type="down" />
                  </a>
              </Dropdown>
              <Dropdown overlay={chordMenu}>
                  <a className="f9 lh-copy avenir">
                      Chord Type <Icon type="down" />
                  </a>
              </Dropdown>
          </div>
        )
    }
}

export default DropMenu
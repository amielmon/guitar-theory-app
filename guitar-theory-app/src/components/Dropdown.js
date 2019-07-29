import { Menu, Dropdown, Icon } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const rootmenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          A
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          A#/Bb
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          B
        </a>
      </Menu.Item>
    </Menu>
  );
  
  const chordmenu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Maj
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Maj6
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Maj7
          </a>
        </Menu.Item>
      </Menu>
    );

class DropMenu extends Component {

    render() {
        return (
            <div>
              <Dropdown overlay={rootmenu}>
                  <a className="ant-dropdown-link" href="#">
                      Root Note <Icon type="down" />
                  </a>
              </Dropdown>,
              <Dropdown overlay={chordmenu}>
                  <a className="ant-dropdown-link" href="#">
                      Chord Type <Icon type="down" />
                  </a>
              </Dropdown>,
          </div>,
          mountNode
        )
    }
}

export default DropMenu
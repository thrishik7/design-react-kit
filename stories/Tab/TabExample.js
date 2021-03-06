import React from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from '../../src'
import PropTypes from 'prop-types'

const titles = ['Tab titolo 1', 'Tab titolo 2', 'Tab titolo 3']

class TabExample extends React.Component {
  state = {
    activeTab: '1'
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    const { text, icons } = this.props
    return (
      <div>
        <Nav tabs className="mb-3">
          <NavItem>
            <NavLink
              href="#"
              active={this.state.activeTab === '1'}
              onClick={() => {
                this.toggle('1')
              }}>
              {(() => {
                if (icons) {
                  return (
                    <span>
                      <svg className="icon icon-primary">
                        <use xlinkHref="/svg/sprite.svg#it-link"></use>
                      </svg>
                      <i
                        className="it-ico-lg it-file d-block text-center"
                        aria-label={titles[0]}
                      />
                    </span>
                  )
                }
              })()}
              {(() => {
                if (text) {
                  return <span>{titles[0]}</span>
                }
              })()}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={this.state.activeTab === '2'}
              onClick={() => {
                this.toggle('2')
              }}>
              {(() => {
                if (icons) {
                  return (
                    <span>
                      <svg className="icon icon-primary">
                        <use xlinkHref="/svg/sprite.svg#it-calendar"></use>
                      </svg>
                      <i
                        className="it-ico-lg it-calendar d-block text-center"
                        aria-label={titles[1]}
                      />
                    </span>
                  )
                }
              })()}
              {(() => {
                if (text) {
                  return <span>{titles[1]}</span>
                }
              })()}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={this.state.activeTab === '3'}
              onClick={() => {
                this.toggle('3')
              }}>
              {(() => {
                if (icons) {
                  return (
                    <span>
                      <svg className="icon icon-primary">
                        <use xlinkHref="/svg/sprite.svg#it-comment"></use>
                      </svg>
                      <i
                        className="it-ico-lg it-comment d-block text-center"
                        aria-label={titles[2]}
                      />
                    </span>
                  )
                }
              })()}
              {(() => {
                if (text) {
                  return <span>{titles[2]}</span>
                }
              })()}
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2" className="p-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </TabPane>
          <TabPane tabId="3" className="p-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

TabExample.propTypes = {
  text: PropTypes.string,
  icons: PropTypes.bool
}

export default TabExample

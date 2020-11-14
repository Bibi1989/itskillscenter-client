import React, { useContext, useState } from 'react'
import { Modal, Tabs } from 'antd';
import styled from 'styled-components'

import CustomButton from '../ui/Buttons'
import Login from './Login';
import Register from './Register';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const { TabPane } = Tabs;

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false)

  const history = useHistory()
  const {clearUser, user} = useContext(UserContext)


  const showLoginModal = () => {
    setLoginModal(true);
  };

  const handleOk = (e: any) => {
    setLoginModal(false)
  };

  const handleCancel = (e: any) => {
    setLoginModal(false)
  };

  return (
    <Nav>
      <Name onClick={() => {
        // clearUser(history)
        history.push('/')
        setLoginModal(false)
      }}>
        It Skills Center
      </Name>
      <Ul>
        <Li>
          {user?.email ? <CustomButton title={"Logout"} onClick={() => clearUser(history)} /> : <CustomButton title={"Create Account"} background="orange" color="white" onClick={showLoginModal} />}
        </Li>
      </Ul>
      <ModalStyle
        // title="Basic Modal"
        visible={user?.email ? false : loginModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={false}
      >
        <TabWrapper>
          <Tabs defaultActiveKey="1" type="card" style={{width: '100%'}}>
            <TabPane tab="Sign In" key="1">
              <Login />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <Register />
            </TabPane>
          </Tabs>
        </TabWrapper>
      </ModalStyle>
    </Nav>
  )
}


const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: #eeeef4;
  margin: 0;
`
const Name = styled.div`
  font-size: 20px;
  cursor: pointer;
`
const ModalStyle = styled(Modal)`
  ::-webkit-scrollbar{
    display: none;
  }

  .ant-modal-content{
    border-radius: 10px;
    overflow: hidden;
  }

  .ant-modal-body{
    padding: 0 !important;
    padding-bottom: 20px !important;
  }
`
const TabWrapper = styled.div`
  .ant-tabs-nav-list {
    width: 100%;
    .ant-tabs-tab{
      flex: 1;
      width: 100%;

      #rc-tabs-0-tab-2{
        width: 100%;
        text-align: center;
        outline: none;
      }
      #rc-tabs-0-tab-1{
        width: 100%;
        text-align: center;
        outline: none;
      }

      &.ant-tabs-tab-btn{
        text-align: center;
        color: red;
      }
    }
  }
`
const Ul = styled.div`
  display: flex;
  padding: 0;
`
const Li = styled.div`
  padding: 0;
  padding-left: 20px;
`

export default Navbar

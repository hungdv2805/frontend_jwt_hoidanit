import React, { useState, useContext } from "react";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom" 
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const navigate = useNavigate()
  const {auth, setAuth} = useContext(AuthContext)
    const items = [
        {
          label: <Link to={"/"}>HomePage</Link>,
          key: "home",
          icon: <HomeOutlined />,
        },
        ...(auth.isAuthenticated ? [
          {
            label: <Link to={"/user"}>User</Link>,
            key: "user",
            icon: <UsergroupAddOutlined />,
          }
          ]:[]),
        {
          label: `Wellcome ${auth?.user?.name}`,
          key: "SubMenu",
          icon: <SettingOutlined />,
          children: [
            ...(auth.isAuthenticated ? [
              {
                label: <span onClick={()=>{
                  localStorage.removeItem("access_token");
                  setCurrent('home')
                  setAuth({
                    isAuthenticated: false,
                    user: {
                      email: '',
                      name: '',
                    },
                  })
                  navigate("/")
                }}>Logout</span>,
                key: "logout",
              }
              ]:[
                {
                  label: <Link to={"/login"}>Login</Link>,
                  key: "login",
                }
              ]),
          ],
        }
    ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;

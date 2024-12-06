import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom" 

const Header = () => {
    const items = [
        {
          label: <Link to={"/"}>HomePage</Link>,
          key: "home",
          icon: <MailOutlined />,
        },
        {
          label: <Link to={"/user"}>User</Link>,
          key: "user",
          icon: <MailOutlined />,
        },
        {
          label: "Wellcome",
          key: "SubMenu",
          icon: <SettingOutlined />,
          children: [
            {
              type: "group",
              label: "Item 1",
              children: [
                {
                  label: "Login",
                  key: "login",
                },
                {
                  label: "Logout",
                  key: "logout",
                },
              ],
            }
          ],
        }
    ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
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

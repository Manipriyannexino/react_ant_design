import React from "react";
import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div>
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          { label: "Home", key: "", icon: <HomeFilled /> },
          {
            label: "Men",
            key: "men",
            children: [
              { label: "Men's shirts", key: "mens-shirts" },
              { label: "Men's shoes", key: "mens-shoes" },
              { label: "Men's watches", key: "mens-watches" },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              { label: "Women's shirts", key: "womens-shirts" },
              { label: "Women's shoes", key: "womens-shoes" },
              { label: "Women's watches", key: "womens-watches" },
            ],
          },
          { label: "Accessories", key: "accessories" },
        ]}
      />
    </div>
  );
};

export default Header;

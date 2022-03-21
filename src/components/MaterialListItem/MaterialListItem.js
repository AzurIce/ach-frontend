import "./MaterialListItem.css";

import React from "react";

import { Avatar, Progress, Button } from "antd";
import { AntDesignOutlined, EditOutlined } from "@ant-design/icons";

import { Typography } from "antd";
const { Text } = Typography;


class MaterialListItem extends React.Component {
  render() {
    return (
      <div class="material-list-item">
        <Avatar size={32} icon={ <AntDesignOutlined /> }/>
        <Progress style={{flexShrink: 1}} percent={66} />
        <Text style={{width: "fit-content"}}>66 / 100</Text>
        <Button type="primary" shape="round" icon={<EditOutlined />}></Button>
      </div>
    );
  }
}

export default MaterialListItem;
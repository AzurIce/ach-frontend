import React from "react";

import MaterialListItem from "../MaterialListItem/MaterialListItem";

import { Progress, Typography } from "antd";
const { Title } = Typography;

class MaterialList extends React.Component {
  render() {
    return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start"
        }}
      >
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "1px solid #cccccc"
          }}
        >
          <Title level={3} style={{margin: "0px 10px 0px 0px", flexShrink: 0}}>材料列表</Title>
          <Progress style={{margin: "0px 0px 0px 10px"}} percent={66}></Progress>
        </div>
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
      </div>
    );
  }
}

export default MaterialList;
import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import LineChartScrolZoom from "./LineChartScrolZoom";
import StatusTable from "../StatusTable";
import TabMap from "./TabMap";
import OverAllordersRow from "./OverAllordersRow";
import ViewFilters from "./ViewFilters";
import Kitchendashoff from "../../assets/img/Kitchendashoff.svg";
import KitchenTableoff from "../../assets/img/KitchenTableoff.svg";
import KitchenTableoffcopy from "../../assets/img/KitchenTableoffCopy.svg";

const IconsTabsData = () => {
  return <IconTabs />;
};
const IconTabs = () => {
  const [key, setKey] = React.useState("graph");
  let Tab1 = <img src={Kitchendashoff} alt="" width="60px" />;
  let Tab2 = <img src={KitchenTableoff} alt="" width="60px" />;
  let Tab3 = <img src={KitchenTableoffcopy} alt="" width="60px" />;
  return (
    <div className="col-12">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 iconstabs"
      >
        <Tab eventKey="graph" title={Tab1}>
          <Tab1Data />
        </Tab>
        <Tab eventKey="table" title={Tab2}>
          <Tab2Data />
        </Tab>
        <Tab eventKey="map" title={Tab3}>
          <Tab3Data />
        </Tab>
      </Tabs>
    </div>
  );
};
const Tab1Data = () => {
  return (
    <>
      <div className="row mt-4">
        <OverAllordersRow />
      </div>
      <ViewFilters />
      <div className="row">
        <div className="col-12">
          <LineChartScrolZoom />
        </div>
      </div>
    </>
  );
};
const Tab2Data = () => {
  return (
    <>
      <div className="row mt-4">
        <OverAllordersRow />
      </div>
      <ViewFilters />
      <div className="row">
        <div className="col-12">
          <StatusTable />
        </div>
      </div>
    </>
  );
};
const Tab3Data = () => {
  return (
    <>
      <div className="row mt-4">
        <OverAllordersRow />
      </div>
      <ViewFilters />
      <div className="row">
        <div className="col-12">
          <TabMap />
        </div>
      </div>
    </>
  );
};
export default IconsTabsData;

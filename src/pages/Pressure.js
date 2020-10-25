import React, { useState } from "react";

import ReactChart from "../components/organisms/ReactChart";
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper";

import AddPressure from "../components/molecules/addPressure/AddPressure";

const Pressure = () => {
  const [active, setActive] = useState({
    chart: false,
    history: false,
    add: true,
  });

  return (
    <main>
      <ChartWrapper>
        {active.chart && <ReactChart queryKey='pressure' endPointName='pressure' />}
        {active.history && "history"}
        {active.add && <AddPressure />}
      </ChartWrapper>
    </main>
  );
};

export default Pressure;

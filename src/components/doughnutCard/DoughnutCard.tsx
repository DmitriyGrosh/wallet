import React, { FC, useMemo } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import "./DoughnutCard.scss";

interface IDoughnutCard {
  data: { count: number }[];
  labels: string[];
}

const DoughnutCard: FC<IDoughnutCard> = ({ data, labels }) => {
  const options = {
    cutout: "60%",
    layout: {
      padding: 15,
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const d = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: data.map((el) => el.count),
          backgroundColor: ["#6B8E23", "#FCA4FF", "#8E96FF"],
          hoverOffset: 20,
          borderWidth: 0,
        },
      ],
    }),
    [data, labels],
  );

  return (
    <div className="doughnut-container">
      <Doughnut width={169} height={169} options={options} data={d as any} />
    </div>
  );
};

export default DoughnutCard;

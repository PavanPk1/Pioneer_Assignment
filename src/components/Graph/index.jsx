import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      if (response.ok) {
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData.data);
      }
    };
    fetchData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height="500" aspect={3}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="Year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Year"
          stroke="yellow"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Population"
          stroke="red"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;

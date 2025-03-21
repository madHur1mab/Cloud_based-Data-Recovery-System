import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data - In a real application, this would come from your API
const backupData = [
  { date: "Jun 01", size: 210 },
  { date: "Jun 08", size: 215 },
  { date: "Jun 15", size: 255 },
  { date: "Jun 22", size: 268 },
  { date: "Jun 29", size: 285 },
  { date: "Jul 06", size: 302 },
  { date: "Jul 13", size: 315 },
];

const RecentBackupsChart = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Backups (GB)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={backupData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}GB`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #E9F1FA",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value} GB`, "Size"]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Bar dataKey="size" fill="#16A4D8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBackupsChart;

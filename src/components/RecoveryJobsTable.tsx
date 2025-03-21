import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, File, HardDrive } from "lucide-react";


const recoveryJobs = [
  {
    id: "job-001",
    name: "Weekly Backup Recovery",
    status: "Completed",
    files: 128,
    size: "2.4 GB",
    date: "Jul 15, 2023",
    time: "14:30"
  },
  {
    id: "job-002",
    name: "Database Snapshot",
    status: "In Progress",
    files: 15,
    size: "5.1 GB",
    date: "Jul 16, 2023",
    time: "09:15"
  },
  {
    id: "job-003",
    name: "User Images Restore",
    status: "Queued",
    files: 437,
    size: "1.7 GB",
    date: "Jul 16, 2023",
    time: "11:45"
  },
  {
    id: "job-004",
    name: "Config Files Recovery",
    status: "Failed",
    files: 23,
    size: "0.3 GB",
    date: "Jul 14, 2023",
    time: "16:20"
  }
];

const RecoveryJobsTable = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-cloud-success/20 text-cloud-success border-cloud-success/30";
      case "in progress":
        return "bg-cloud-accent/20 text-cloud-accent border-cloud-accent/30";
      case "queued":
        return "bg-cloud-warning/20 text-cloud-warning border-cloud-warning/30";
      case "failed":
        return "bg-cloud-danger/20 text-cloud-danger border-cloud-danger/30";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Recovery Jobs</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Job Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">Files</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">Size</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recoveryJobs.map((job) => (
                <tr key={job.id} className="border-b last:border-0 hover:bg-cloud-gray/50">
                  <td className="px-4 py-3 text-sm">{job.name}</td>
                  <td className="px-4 py-3 text-sm">
                    <Badge className={`${getStatusColor(job.status)} font-normal`}>
                      {job.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <File className="h-4 w-4 text-muted-foreground" />
                      {job.files}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-muted-foreground" />
                      {job.size}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span>{job.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{job.time}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <Button variant="ghost" size="sm">Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecoveryJobsTable;

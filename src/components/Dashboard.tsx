import { Cloud, HardDriveDownload, Server, Package } from "lucide-react";
import StatusCard from "./StatusCard";
import RecentBackupsChart from "./RecentBackupsChart";
import RecoveryJobsTable from "./RecoveryJobsTable";
import CreateRecoveryModal from "./CreateRecoveryModal";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your recovery operations</p>
        </div>
        <div className="mt-4 md:mt-0">
          <CreateRecoveryModal />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatusCard 
          title="Active Recovery Jobs" 
          value="3"
          icon={<HardDriveDownload className="h-4 w-4 text-cloud-accent" />}
          trend={5}
        />
        <StatusCard 
          title="Total Storage" 
          value="1.2 TB"
          icon={<Cloud className="h-4 w-4 text-cloud-accent" />}
          trend={12}
        />
        <StatusCard 
          title="Backup Sources" 
          value="7"
          icon={<Server className="h-4 w-4 text-cloud-accent" />}
          trend={0}
        />
        <StatusCard 
          title="Recovered Files" 
          value="1,452"
          icon={<Package className="h-4 w-4 text-cloud-accent" />}
          trend={-3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <RecentBackupsChart />
        <div className="flex flex-col gap-6">
          <div className="bg-cloud-accent/10 p-6 rounded-lg border border-cloud-accent/20">
            <h3 className="text-lg font-medium mb-2">Quick Recovery</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Need to recover files quickly? Start with these options:
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Latest Files
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Server className="h-4 w-4 mr-2" />
                Database Backup
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Cloud className="h-4 w-4 mr-2" />
                Point-in-time Recovery
              </Button>
            </div>
          </div>
          <div className="bg-cloud-light p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-2">Recovery Health</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">System Integrity</span>
                  <span className="text-sm font-medium">98%</span>
                </div>
                <div className="w-full bg-cloud-gray rounded-full h-2">
                  <div className="bg-cloud-success h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">AWS Connection</span>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <div className="w-full bg-cloud-gray rounded-full h-2">
                  <div className="bg-cloud-success h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Backup Reliability</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="w-full bg-cloud-gray rounded-full h-2">
                  <div className="bg-cloud-success h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecoveryJobsTable />
    </div>
  );
};

export default Dashboard;

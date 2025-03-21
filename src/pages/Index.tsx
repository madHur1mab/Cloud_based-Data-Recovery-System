import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import FileExplorer from "@/components/FileExplorer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast when the app loads
    toast({
      title: "Welcome to CloudRestore",
      description: "Your AWS cloud data recovery hub is ready to use.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-cloud-gray/30 flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-6">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="files">File Explorer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>
            
            <TabsContent value="files">
              <div className="container py-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold">File Explorer</h1>
                    <p className="text-muted-foreground">Browse and recover your files from AWS backups</p>
                  </div>
                </div>
                
                <FileExplorer />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="border-t bg-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 CloudRestore. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span className="text-sm text-muted-foreground">Connected to AWS</span>
              <span className="text-sm text-muted-foreground">Version 1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

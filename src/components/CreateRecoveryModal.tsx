import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HardDriveDownload } from "lucide-react";
import { toast } from "sonner";

interface CreateRecoveryModalProps {
  trigger?: React.ReactNode;
}

const CreateRecoveryModal = ({ trigger }: CreateRecoveryModalProps) => {
  const [open, setOpen] = useState(false);
  const [recoveryType, setRecoveryType] = useState("selective");
  const [recoveryName, setRecoveryName] = useState("");
  const [recoverySnapshot, setRecoverySnapshot] = useState("");
  const [targetLocation, setTargetLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!recoveryName.trim()) {
      toast.error("Please enter a recovery job name");
      return;
    }
    
    if (!recoverySnapshot) {
      toast.error("Please select a backup snapshot");
      return;
    }
    
    if (!targetLocation.trim()) {
      toast.error("Please enter a target location");
      return;
    }
    
    // In a real application, this would call your API
    console.log({
      recoveryName,
      recoveryType,
      recoverySnapshot,
      targetLocation
    });
    
    toast.success("Recovery job created successfully!");
    setOpen(false);
    
    // Reset form
    setRecoveryName("");
    setRecoveryType("selective");
    setRecoverySnapshot("");
    setTargetLocation("");
  };

  const defaultTrigger = (
    <Button className="gap-2">
      <HardDriveDownload className="h-4 w-4" />
      New Recovery
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Recovery Job</DialogTitle>
            <DialogDescription>
              Configure a new recovery task to restore your files and data.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="recoveryName" className="text-right">
                Job Name
              </Label>
              <Input
                id="recoveryName"
                value={recoveryName}
                onChange={(e) => setRecoveryName(e.target.value)}
                placeholder="My Recovery Job"
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Recovery Type
              </Label>
              <RadioGroup 
                value={recoveryType} 
                onValueChange={setRecoveryType}
                className="col-span-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="selective" id="selective" />
                  <Label htmlFor="selective">Selective Recovery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full" id="full" />
                  <Label htmlFor="full">Full Recovery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="point-in-time" id="point-in-time" />
                  <Label htmlFor="point-in-time">Point-in-time Recovery</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="snapshot" className="text-right">
                Backup Snapshot
              </Label>
              <Select 
                value={recoverySnapshot} 
                onValueChange={setRecoverySnapshot}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a snapshot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="backup-20230715">July 15, 2023 (Complete)</SelectItem>
                  <SelectItem value="backup-20230708">July 8, 2023 (Complete)</SelectItem>
                  <SelectItem value="backup-20230701">July 1, 2023 (Complete)</SelectItem>
                  <SelectItem value="backup-20230624">June 24, 2023 (Complete)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="targetLocation" className="text-right">
                Target Location
              </Label>
              <Input
                id="targetLocation"
                value={targetLocation}
                onChange={(e) => setTargetLocation(e.target.value)}
                placeholder="s3://my-bucket/recovery"
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Recovery Job</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRecoveryModal;

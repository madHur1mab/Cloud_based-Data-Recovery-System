import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Folder, File, ChevronRight, ChevronDown, Search, FolderOpen } from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  size?: string;
  children?: FileItem[];
}

const initialFiles: FileItem[] = [
  {
    id: "folder-1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "file-1", name: "report.pdf", type: "file", size: "1.2 MB" },
      { id: "file-2", name: "presentation.pptx", type: "file", size: "3.7 MB" },
      { id: "file-3", name: "budget.xlsx", type: "file", size: "0.9 MB" },
    ]
  },
  {
    id: "folder-2",
    name: "Images",
    type: "folder",
    children: [
      { id: "file-4", name: "profile.jpg", type: "file", size: "2.3 MB" },
      { id: "file-5", name: "banner.png", type: "file", size: "4.5 MB" },
    ]
  },
  {
    id: "folder-3",
    name: "Backups",
    type: "folder",
    children: [
      { id: "file-6", name: "db_backup_20230715.sql", type: "file", size: "156 MB" },
      { id: "file-7", name: "config_backup.zip", type: "file", size: "0.4 MB" },
    ]
  },
  { id: "file-8", name: "readme.txt", type: "file", size: "0.1 MB" }
];

const FileExplorer = () => {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
  const [selectedFiles, setSelectedFiles] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  const toggleFileSelection = (fileId: string) => {
    setSelectedFiles(prev => ({
      ...prev,
      [fileId]: !prev[fileId]
    }));
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map(item => {
      const isExpanded = expandedFolders[item.id];
      const isSelected = selectedFiles[item.id];
      
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        if (item.type === "folder" && item.children) {
          const matchedChildren = renderFileTree(item.children);
          if (matchedChildren.filter(Boolean).length === 0) {
            return null;
          }
        } else {
          return null;
        }
      }

      return (
        <div key={item.id} className="mb-1">
          <div 
            className={`flex items-center p-2 rounded-md hover:bg-cloud-gray/50 cursor-pointer ${isSelected ? 'bg-cloud-gray/70' : ''}`}
            style={{ paddingLeft: `${(level * 12) + 8}px` }}
          >
            <Checkbox 
              checked={isSelected}
              onCheckedChange={() => toggleFileSelection(item.id)}
              className="mr-2"
            />
            
            {item.type === "folder" ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 mr-1 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFolder(item.id);
                  }}
                >
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
                {isExpanded ? 
                  <FolderOpen className="h-5 w-5 text-cloud-accent mr-2" /> : 
                  <Folder className="h-5 w-5 text-cloud-accent mr-2" />
                }
                <span className="text-sm font-medium">{item.name}</span>
              </>
            ) : (
              <>
                <div className="w-5 mr-1"></div>
                <File className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-sm flex-1">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.size}</span>
              </>
            )}
          </div>
          
          {item.type === "folder" && isExpanded && item.children && (
            <div>
              {renderFileTree(item.children, level + 1)}
            </div>
          )}
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Explorer</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-[400px]">
          {renderFileTree(files)}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {Object.values(selectedFiles).filter(Boolean).length} items selected
          </div>
          <Button disabled={Object.values(selectedFiles).filter(Boolean).length === 0}>
            Recover Selected
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileExplorer;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Menu, X, Bell, HardDriveDownload, Settings } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-cloud-accent" />
            <span className="text-xl font-bold text-cloud-DEFAULT">CloudRestore</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-cloud-accent transition-colors">
            Dashboard
          </Link>
          <Link to="/backups" className="text-sm font-medium hover:text-cloud-accent transition-colors">
            Backups
          </Link>
          <Link to="/recovery" className="text-sm font-medium hover:text-cloud-accent transition-colors">
            Recovery
          </Link>
          <Link to="/settings" className="text-sm font-medium hover:text-cloud-accent transition-colors">
            Settings
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <span className="text-sm font-medium">Recovery job complete</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-sm font-medium">New backup created</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" className="gap-2">
            <HardDriveDownload className="h-4 w-4" />
            New Recovery
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b p-4 md:hidden z-50">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 p-2 hover:bg-cloud-gray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/backups" 
                className="flex items-center gap-2 p-2 hover:bg-cloud-gray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Backups
              </Link>
              <Link 
                to="/recovery" 
                className="flex items-center gap-2 p-2 hover:bg-cloud-gray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recovery
              </Link>
              <Link 
                to="/settings" 
                className="flex items-center gap-2 p-2 hover:bg-cloud-gray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
              <Button className="gap-2 mt-2">
                <HardDriveDownload className="h-4 w-4" />
                New Recovery
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

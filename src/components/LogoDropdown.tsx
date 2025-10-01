// simple logo dropdown component that can be used to go to the landing page or sign out for the user

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export function LogoDropdown() {
  // Auth functionality removed for static site
  // const { isAuthenticated, signOut } = useAuth();

  return (
    <div className="flex items-center gap-2">
      {/* Logo dropdown content - auth removed */}
    </div>
  );
}
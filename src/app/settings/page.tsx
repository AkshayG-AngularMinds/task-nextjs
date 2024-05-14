// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Profile from "./Profile";
// import ChangePassword from "./ChangePassword";
// // import Header from "../Header";

// const Settings = () => {
//   const [selectedTab, setSelectedTab] = useState("profile");

//   return (
//     <div>
//       {/* Render content based on selected tab */}
//       {/* <Header /> */}
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <Link href="#" passHref legacyBehavior>
//               <a
//                 className={`text-black hover:text-blue-500 ${
//                   selectedTab === "profile" ? "text-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedTab("profile")}
//               >
//                 Profile
//               </a>
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <Link href="#" passHref legacyBehavior>
//               <a
//                 className={`text-black hover:text-blue-500 ${
//                   selectedTab === "themes" ? "text-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedTab("themes")}
//               >
//                 Themes
//               </a>
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <Link href="#" passHref legacyBehavior>
//               <a
//                 className={`text-black hover:text-blue-500 ${
//                   selectedTab === "change-password" ? "text-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedTab("change-password")}
//               >
//                 Change Password
//               </a>
//             </Link>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//       {selectedTab === "profile" && <Profile />}
//       {selectedTab === "change-profile" && <h1>CHANGE PROFILE</h1>}
//       {selectedTab === "change-password" && <ChangePassword />}
//     </div>
//   );
// };

// export default Settings;

"use client";
import { useState } from "react";
import Profile from "./Profile";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import ChangePassword from "./ChangePassword";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="grid  w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setSelectedTab("profile")}
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Playground"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Profile
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                  onClick={() => setSelectedTab("change-theme")}
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Themes
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                  onClick={() => setSelectedTab("change-password")}
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Change Password
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        {selectedTab === "profile" && <Profile />}
        {selectedTab === "change-theme" && <h1>Change Theme</h1>}
        {selectedTab === "change-password" && <ChangePassword />}
      </div>
    </div>
  );
};

export default Dashboard;

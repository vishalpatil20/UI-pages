import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { MdNavigateNext } from "react-icons/md";

   
  export function SideNavbar() {
    return (
      <Card className="h-full w-full max-w-[20rem] p-4 flex">
        <List className="flex">
          <ListItem className="py-2 mb-1 text-lg hover:bg-gray-100  flex items-center justify-start ">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Navigation
          </ListItem>
          <ListItem className="py-2 mb-1 text-lg hover:bg-gray-100  flex items-center justify-start ">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Navigation
          </ListItem>
          <ListItem className="py-2 mb-1 text-lg hover:bg-gray-100  flex items-center justify-start ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Navigation
          </ListItem>
          <ListItem className="py-2 mb-1 text-lg hover:bg-gray-100  flex items-center justify-start  ">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Navigation
          </ListItem>
          <div className="mt-48">
          <ListItem className="py-2 mb-1 text-lg hover:bg-gray-100  flex items-center justify-start  ">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="py-2 mb-1 text-base hover:bg-gray-100 flex items-center justify-start  ">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Sign Out
          </ListItem>
          </div>
        </List>
      </Card>
    );
  }
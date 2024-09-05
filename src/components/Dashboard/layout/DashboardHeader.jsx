import { cn } from "@/lib/utils";
import getCurrentUser from "@/lib/session";
import UserAccountNav from "./UserAccountNav";
import DynamicDashboardHeaderTitle from "./DynamicDashboardHeader";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ToggleTheme";

export default async function DashboardHeader({ className, ...props }) {
  const user = await getCurrentUser();

  // console.log(user);

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 px-5 py-4 bg-transparent gap-2 backdrop-blur-sm flex flex-row justify-between items-center",
        className
      )}
      {...props}
    >
      <DynamicDashboardHeaderTitle />
      <ThemeToggle className="hidden max-md:flex" />
      <MobileNav />
      <UserAccountNav
        user={{
          name: user?.name,
          email: user?.email,
          image: user?.image,
        }}
      />
    </header>
  );
}

import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import UserListPage from "@/features/users/components/user-list-page";

export const metadata = {
  title: "Dashboard: Users",
};

export default async function Page() {
  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="User Management"
            description="Manage user in report system"
          />
          <Link
            href="/dashboard/user/new"
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <IconPlus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <UserListPage />
      </div>
    </PageContainer>
  );
}

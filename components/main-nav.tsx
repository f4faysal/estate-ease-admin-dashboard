"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { role }: any = getUserInfo();

  const pathname = usePathname();
  const params = useParams();

  const routesSuperAdmin = [
    {
      href: `/${params.adminId}`,
      label: "Overview",
      active: pathname === `/${params.adminId}`,
    },
    {
      href: `/${params.adminId}/superAdmin/manage-admins`,
      label: "Manage Admins",
      active: pathname === `/${params.adminId}/superAdmin/manage-admins`,
    },
    {
      href: `/${params.adminId}/superAdmin/manage-rent-users`,
      label: "Manage Rent Users",
      active: pathname === `/${params.adminId}/superAdmin/manage-rent-users`,
    },
    {
      href: `/${params.adminId}/superAdmin/manage-home-owners`,
      label: "Manage Home Owner",
      active: pathname === `/${params.adminId}/superAdmin/manage-home-owners`,
    },
  ];
  const routesAdmin = [
    {
      href: `/${params.adminId}`,
      label: "Overview",
      active: pathname === `/${params.adminId}`,
    },
    {
      href: `/${params.adminId}/admin/manage-rent-users`,
      label: "Manage Rent Users",
      active: pathname === `/${params.adminId}/admin/manage-rent-users`,
    },
    {
      href: `/${params.adminId}/admin/manage-home-owners`,
      label: "Manage Home Owner",
      active: pathname === `/${params.adminId}/admin/manage-home-owners`,
    },
    {
      href: `/${params.adminId}/admin/settings`,
      label: "Settings",
      active: pathname === `/${params.adminId}/admin/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {role === "Super_Admin" ? (
        routesSuperAdmin.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      ) : role === "Admin" ? (
        routesAdmin.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      ) : (
        <></>
      )}
    </nav>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export interface ClientAdvancedNavLinkProps<T = string>
  extends Omit<LinkProps, "href"> {
  to: string;
  key?: T;
  children:
    | React.ReactNode
    | ((props: { isActive: boolean }) => React.ReactNode);
}

/**
 * Client-only implementation of AdvancedNavLink
 */
export function ClientAdvancedNavLink<T extends string | number = string>({
  to,
  key,
  children,
  ...props
}: ClientAdvancedNavLinkProps<T>) {
  const pathname = usePathname();

  // Determine if the link is active
  const isActive = pathname === to || pathname.startsWith(to);

  return (
    <Link href={to} {...props}>
      {typeof children === "function"
        ? (children as (props: { isActive: boolean }) => React.ReactNode)({
            isActive,
          })
        : children}
    </Link>
  );
}

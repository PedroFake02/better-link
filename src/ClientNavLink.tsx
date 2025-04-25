"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export interface ClientNavLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  renderChildren?: (isActive: boolean) => React.ReactNode;
}

/**
 * Client-only implementation of NavLink
 */
export function ClientNavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  exact = false,
  renderChildren,
  ...props
}: ClientNavLinkProps) {
  const pathname = usePathname();

  // Determine if the link is active
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // Combine classnames when active
  const linkClassName =
    isActive && activeClassName
      ? `${className} ${activeClassName}`.trim()
      : className;

  return (
    <Link href={href} className={linkClassName} {...props}>
      {renderChildren ? renderChildren(isActive) : children}
    </Link>
  );
}

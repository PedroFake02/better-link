"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export interface NavLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  /**
   * Function to render children with isActive state
   * @param isActive Whether the link is active
   * @returns React node
   */
  renderChildren?: (isActive: boolean) => React.ReactNode;
}

/**
 * NavLink component that extends Next.js Link with isActive functionality
 *
 * @example
 * ```tsx
 * // Basic usage
 * <NavLink href="/about" activeClassName="active">About</NavLink>
 *
 * // With render prop
 * <NavLink href="/about" renderChildren={(isActive) => (
 *   <span className={isActive ? 'text-blue-500' : 'text-gray-500'}>About</span>
 * )}>
 *   About
 * </NavLink>
 * ```
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "",
  exact = false,
  renderChildren,
  ...props
}) => {
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
};

export default NavLink;

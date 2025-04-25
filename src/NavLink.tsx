"use client";

import React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import dynamic from "next/dynamic";

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

// Dynamically import the client component with no SSR
const ClientNavLink = dynamic(
  () => import("./ClientNavLink").then((mod) => mod.ClientNavLink),
  {
    ssr: false,
  }
);

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
export const NavLink: React.FC<NavLinkProps> = (props) => {
  return <ClientNavLink {...props} />;
};

export default NavLink;

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export interface AdvancedNavLinkProps<T = string>
  extends Omit<LinkProps, "href"> {
  to: string;
  key?: T;
  children:
    | React.ReactNode
    | ((props: { isActive: boolean }) => React.ReactNode);
}

/**
 * AdvancedNavLink component that follows the pattern shown in the example
 *
 * @example
 * ```tsx
 * <AdvancedNavLink to={href} key={id}>
 *   {({ isActive }: { isActive: boolean }) => (
 *     <span className={isActive ? 'active-link' : 'link'}>Link Text</span>
 *   )}
 * </AdvancedNavLink>
 * ```
 */
export const AdvancedNavLink = <T extends string | number = string>({
  to,
  key,
  children,
  ...props
}: AdvancedNavLinkProps<T>): React.ReactElement => {
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
};

export default AdvancedNavLink;

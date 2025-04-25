"use client";

import React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import dynamic from "next/dynamic";

export interface AdvancedNavLinkProps<T = string>
  extends Omit<LinkProps, "href"> {
  to: string;
  key?: T;
  children:
    | React.ReactNode
    | ((props: { isActive: boolean }) => React.ReactNode);
}

// Dynamically import the client component with no SSR
const ClientAdvancedNavLink = dynamic(
  () =>
    import("./ClientAdvancedNavLink").then((mod) => mod.ClientAdvancedNavLink),
  {
    ssr: false,
  }
);

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
export const AdvancedNavLink = <T extends string | number = string>(
  props: AdvancedNavLinkProps<T>
) => {
  return <ClientAdvancedNavLink {...props} />;
};

export default AdvancedNavLink;

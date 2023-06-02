"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../header.module.scss";

export function Navlink({ children, href }) {
  const currentPath = usePathname();

  const isActive = currentPath === href;

  return (
    <li>
      <Link
        c
        href={href}
        className={styles.nav_link + " " + (isActive && styles.active)}
      >
        {children}
      </Link>
    </li>
  );
}

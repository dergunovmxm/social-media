"use client";
import cn from "clsx";
import { Sun } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { MENU } from "./sidebar.data";
import { usePathname } from "next/navigation";

const isLoggedIn = false;

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={40} height={40} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({ [styles.active]: pathname === item.url })}
          >
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={27} />
    </aside>
  );
}

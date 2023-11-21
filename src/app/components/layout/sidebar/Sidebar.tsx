import { MessageSquare, Phone, Settings, Sun, User2 } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <div>
        <Link href="/friends">
          <User2 />
        </Link>
        <Link href="/calls">
          <Phone />
        </Link>
        <Link href="/chats">
          <MessageSquare />
        </Link>
        <Link href="/settings">
          <Settings />
        </Link>
      </div>
      <Sun />
    </aside>
  );
}

import Nav from "@/components/Theme/nav/page";

import "../../globals.css";
import styles from "./Layout.module.css";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.body_content}`}>
          <Nav />
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}

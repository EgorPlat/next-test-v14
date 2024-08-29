'use client'
import { Link } from "nextra-theme-docs";
import "./layout.css";
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/users/add">Add user</Link>
            <Link href="/users">Users list</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

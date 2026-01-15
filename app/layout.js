import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] })

const satoshi = localFont({
  src: "../src/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
})

export const metadata = {
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  )
}

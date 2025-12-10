// app/layout.tsx

import "./globals.css";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";

export const metadata = {
  title: "Smart Hostel Finder - Find Your Perfect Room",
  description:
    "Discover and explore hostel room allocations with our intelligent room finder system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">
        <SessionProviderWrapper>
          <main>{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}

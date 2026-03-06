import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <Link href="/" className="text-xl font-bold text-blue-600">
            SkillSwap
          </Link>
          <div className="space-x-6 font-medium text-gray-600">
            <Link href="/discover" className="hover:text-blue-500">
              Discover
            </Link>
            <Link href="/sessions" className="hover:text-blue-500">
              Sessions
            </Link>
            <Link href="/messages" className="hover:text-blue-500">
              Messages
            </Link>
            <Link href="/credits" className="hover:text-blue-500">
              Credits
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Profile
            </Link>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="p-6 text-center text-gray-400 text-sm">
          © 2026 SkillSwap - Peer-to-Peer Learning
        </footer>
      </body>
    </html>
  );
}

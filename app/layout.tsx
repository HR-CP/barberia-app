import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barbería",
  description: "Reserva tu cita",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-semibold">Barbería</div>
            <nav className="flex items-center gap-3">
              <Link
                href="/reservar"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Reservar
              </Link>
            </nav>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-red-600 via-white to-blue-700" />
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t border-gray-200">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Barbería
          </div>
        </footer>
      </body>
    </html>
  );
}

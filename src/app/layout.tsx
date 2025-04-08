import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: true,
});

export const metadata: Metadata = {
    title: "React Shop",
    description: "A modern e-commerce application built with Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1 p-4 max-w-7xl mx-auto w-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

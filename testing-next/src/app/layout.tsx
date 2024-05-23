// seller
'use client'
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { QueryClient} from 'react-query'
import QueryClientProvider from '@/providers/react-query'
import ReactQueryProvider from "@/providers/react-query";
// import {QueryClient} from "@tanstack/query-core";
const queryClient = new QueryClient();

const montserrat = Montserrat({ subsets: ["latin-ext", "cyrillic"] });
/*
import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const popins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700', '800'],
})
master*/

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
// seller
  return (
	<html lang="ru">
		<body className={montserrat.className}>
			<ReactQueryProvider>
				<main>{children}</main>
			</ReactQueryProvider>
		</body>
	</html>

  );
/*
	return (
		<html lang="ru">
			<body className={popins.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
master*/
}

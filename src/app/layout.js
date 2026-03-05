import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Khushi Portfolio",
	description: "This is the portfolio website of Khushi Chaudhary.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-black`}>
				<Navbar />

				<Suspense fallback={<Loader />}>{children}</Suspense>

				<Footer />
			</body>
		</html>
	);
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Khushi Portfolio",
	description: "This is the portfolio website of khushi chaudhary.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" bg-black opacity-90">{children}</body>
		</html>
	);
}

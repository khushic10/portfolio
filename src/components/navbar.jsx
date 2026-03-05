"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
	const pathname = usePathname();
	const formatPath = (path) => {
		if (path === "/") return "Home";

		const formatted = path.substring(1).replace(/-/g, " ");

		return formatted.charAt(0).toUpperCase() + formatted.slice(1);
	};
	return (
		<nav className={`fixed w-full top-0 z-50 bg-black/50`}>
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex items-center space-x-4">
						<div className="hidden sm:flex space-x-8">
							{["/", "/about", "/projects", "/beyond-code"].map((path) => (
								<Link
									key={path}
									href={path}
									className={`px-6 py-2 rounded-md text-xl font-medium transition ${
										pathname === path
											? "bg-custom-gray text-custom-blue font-bold"
											: "text-white hover:text-custom-blue"
									}`}
								>
									{path === "/" ? "Home" : formatPath(path)}
								</Link>
							))}
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
							<button
								className="inline-flex items-center justify-center p-2 rounded-md text-custom-blue hover:text-white hover:bg-custom-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex items-center justify-start">
						<div className="flex-shrink-0">
							<Image
								src="/images/Khushi.png"
								alt="Your Logo"
								width={48}
								height={48}
								className="h-12 w-auto rounded-xl m-2"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="sm:hidden" id="mobile-menu">
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link
						href="/"
						className="text-custom-blue hover:bg-custom-yellow hover:text-custom-brown block px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-custom-blue hover:bg-custom-yellow hover:text-custom-brown block px-3 py-2 rounded-md text-base font-medium"
					>
						About
					</Link>
					<Link
						href="/projects"
						className="text-custom-blue hover:bg-custom-yellow hover:text-custom-brown block px-3 py-2 rounded-md text-base font-medium"
					>
						Projects
					</Link>
					<Link
						href="/beyond-code"
						className="text-custom-blue hover:bg-custom-yellow hover:text-custom-brown block px-3 py-2 rounded-md text-base font-medium"
					>
						Beyond Code
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

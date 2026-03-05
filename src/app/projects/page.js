"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import projects from "../../assets/projects.json";

export default function Projects() {
	const [activeSection, setActiveSection] = useState("next");

	useEffect(() => {
		const sections = document.querySelectorAll("div[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const categories = ["NEXT", "REACT", "REACT NATIVE"];

	const getSectionLabel = (id) => {
		if (id === "next") return "Next.js Projects";
		if (id === "react") return "React.js Projects";
		if (id === "react-native") return "React Native Projects";
		return "";
	};

	return (
		<main>
			{(activeSection === "react" || activeSection === "react-native") && (
				<div className="fixed left-1/2 transform -translate-x-1/2 top-20 flex flex-col items-center gap-2 z-50">
					<button
						onClick={() =>
							scrollToSection(
								activeSection === "react-native" ? "react" : "next",
							)
						}
						className="bg-custom-gold text-black px-6 py-2 rounded-full shadow-lg hover:scale-110 transition flex items-center gap-2"
					>
						↑{" "}
						{getSectionLabel(
							activeSection === "react-native" ? "react" : "next",
						)}
					</button>
				</div>
			)}

			<div className="relative overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{
						backgroundImage: "url('/images/book.jpg')",
						backgroundSize: "cover",
					}}
				/>
				<div className="relative flex h-full items-center justify-center bg-black bg-opacity-30 text-white z-20">
					<div className="sticky top-0 w-full h-full pt-20 text-center bg-black bg-opacity-40 backdrop-blur-md max-w-7xl px-12 py-10">
						{categories.map((category) => {
							const sectionId =
								category === "NEXT"
									? "next"
									: category === "REACT"
										? "react"
										: "react-native";

							return (
								<div
									id={sectionId}
									key={category}
									className="mb-16 min-h-screen"
								>
									<h2 className="text-3xl font-semibold text-custom-gray mb-6">
										{category === "NEXT"
											? "Next.js Projects"
											: category === "REACT NATIVE"
												? "React Native Projects"
												: "React.js Projects"}
									</h2>

									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
										{projects
											.filter((p) => p.category === category)
											.map((project, index) => (
												<div
													key={index}
													className="relative bg-custom-gray rounded-lg shadow-lg overflow-hidden"
												>
													{/* Featured Tag */}
													{project.featured && (
														<div className="absolute top-2 right-2 bg-custom-gold text-custom-black text-xs font-bold px-2 py-1 rounded-lg shadow-md">
															Highlighted
														</div>
													)}

													{/* Project Image */}
													<div className="flex justify-center items-center">
														<div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-full overflow-hidden shadow-lg my-6">
															<Image
																src={project.image}
																alt={project.title}
																fill
																style={{ objectFit: "cover" }}
															/>
														</div>
													</div>

													{/* Project Info */}
													<div className="p-4 text-center">
														<h3 className="text-xl font-bold text-gray-900">
															{project.title}
														</h3>
														<p className="text-sm text-gray-600 mb-2">
															{project.type}
														</p>
														<p className="text-gray-700">
															{project.description}
														</p>
													</div>

													{/* Hover Links */}
													<div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
														<a
															href={project.github}
															target="_blank"
															rel="noopener noreferrer"
															className="text-custom-yellow font-semibold text-lg mb-3 px-6 py-2 border-2 border-custom-yellow rounded-full hover:bg-custom-yellow hover:text-custom-black transition"
														>
															GitHub
														</a>
														<a
															href={project.demo}
															target="_blank"
															rel="noopener noreferrer"
															className="text-custom-orange font-semibold text-lg px-6 py-2 border-2 border-custom-orange rounded-full hover:bg-custom-orange hover:text-custom-black transition"
														>
															Live Demo
														</a>
													</div>
												</div>
											))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{(activeSection === "next" || activeSection === "react") && (
				<div className="fixed left-1/2 transform -translate-x-1/2 bottom-5 flex flex-col items-center gap-2 z-50">
					<button
						onClick={() =>
							scrollToSection(
								activeSection === "next" ? "react" : "react-native",
							)
						}
						className="bg-custom-orange text-black px-6 py-2 rounded-full shadow-lg hover:scale-110 transition flex items-center gap-2"
					>
						{getSectionLabel(
							activeSection === "next" ? "react" : "react-native",
						)}{" "}
						↓
					</button>
				</div>
			)}
		</main>
	);
}

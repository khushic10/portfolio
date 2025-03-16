"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import projects from "../../assets/projects.json";

export default function Projects() {
	return (
		<main>
			<Navbar page={"projects"} />
			<div className="relative overflow-hidden">
				{/* Secondary Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{
						backgroundImage: "url('/images/book.jpg')",
						backgroundSize: "cover",
					}}
				/>
				{/* Overlay Content */}
				<div className="relative flex h-full items-center justify-center bg-black bg-opacity-30 text-white z-20">
					<div className="sticky top-0 w-full h-full pt-20 text-center bg-black bg-opacity-40 backdrop-blur-md max-w-7xl px-12 py-10">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{projects.map((project, index) => (
								<div
									key={index}
									className="relative group bg-custom-gray rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
								>
									{/* Project Image */}
									<div className="flex justify-center items-center">
										<div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-full overflow-hidden shadow-lg my-6">
											<Image
												src={project.image}
												alt={project.title}
												layout="fill"
												objectFit="cover"
											/>
										</div>
									</div>

									{/* Project Info */}
									<div className="p-4">
										<h3 className="text-xl font-bold text-gray-900">
											{project.title}
										</h3>
										<p className="text-sm text-gray-600 mb-2">{project.type}</p>
										<p className="text-gray-700">{project.description}</p>
									</div>

									{/* Hover Overlay with Links */}
									<div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white text-lg font-semibold mb-2 hover:underline"
										>
											GitHub
										</a>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white text-lg font-semibold hover:underline"
										>
											Live Demo
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}

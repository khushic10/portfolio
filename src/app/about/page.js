"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import {
	FaUser,
	FaAddressBook,
	FaBirthdayCake,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineDescription, MdContactPhone } from "react-icons/md";

export default function About() {
	const openPdf = () => {
		window.open("/khushicv.pdf", "_blank");
	};
	const skills = [
		{ name: "HTML", image: "/images/html.png" },
		{ name: "CSS", image: "/images/css.png" },
		{ name: "Tailwind", image: "/images/tailwind.png" },
		{ name: "Javascript", image: "/images/javascript.png" },
		{ name: "React", image: "/images/react.png" },
		{ name: "Next", image: "/images/next.png" },
		{ name: "Node", image: "/images/node.png" },
		{ name: "Express", image: "/images/express.png" },
		{ name: "Mongo", image: "/images/mongodb.png" },
		{ name: "Postman", image: "/images/postman.svg" },
		{ name: "Github", image: "/images/github.png" },
		{ name: "SASS", image: "/images/sass.png" },
	];
	const AzrachTechStack = [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Tanstack Query",
		"Semantic UI",
		"Postman",
		"Github",
		"Typescript",
		"Jira",
	];
	const EnvisionTechStack = [
		"React.js",
		"Scss",
		"Node",
		"Tailwind CSS",
		"Material UI",
		"Express",
		"Postman",
		"AWS",
		"JavaScript",
	];
	return (
		<main className="m-0 p-0 ">
			<div className="mt-20 mx-16 border-custom-brown bg-custom-gray p-8 border-4 rounded-2xl">
				<h1 className="text-3xl text-center font-semibold text-custom-black font-serif">
					About Me
				</h1>
				<p className="m-4 text-justify font-semibold text-gray-800 text-lg">
					Hello! I am a Frontend Developer focused on building dynamic,
					responsive, and user-friendly web applications. I hold a Bachelor of
					Science in Computer Science and Information Technology (BSc CSIT) from
					Bhaktapur Multiple Campus, Tribhuvan University. Currently, I work as
					a Frontend Developer at Azrach IT, an Australian-based company in
					Nepal, where I specialize in Next.js and modern frontend technologies
					to create innovative solutions and impactful digital experiences.
				</p>
				<div>
					<div className="grid grid-cols-2 m-4 gap-4">
						<div className="flex items-center text-xl font-semibold">
							<FaUser />{" "}
							<span className="ml-2 text-custom-black">Khushi Chaudhary</span>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<IoMdMail />{" "}
							<span className="ml-2 text-custom-black">
								khushichaudhary989@gmail.com
							</span>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<FaAddressBook />{" "}
							<span className="ml-2 text-custom-black">Kathmandu, Nepal</span>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<MdContactPhone />{" "}
							<span className="ml-2 text-custom-black">+977 9823065734</span>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<FaBirthdayCake />{" "}
							<span className="ml-2 text-custom-black">15-10-2002</span>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<FaLinkedin />{" "}
							<a
								href="https://www.linkedin.com/in/khushi-chaudhary-b17b41217/"
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2 text-custom-black hover:text-blue-600"
							>
								LinkedIn
							</a>
						</div>
						<div className="flex items-center text-xl font-semibold">
							<FaGithub />{" "}
							<a
								href="https://github.com/khushic10"
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2 text-custom-black hover:text-green-600"
							>
								Github
							</a>
						</div>
						<div
							className="flex items-center text-xl font-semibold cursor-pointer"
							onClick={openPdf}
						>
							<MdOutlineDescription />{" "}
							<span className="ml-2 text-custom-black">View CV</span>
						</div>
					</div>

					<h4 className="text-center text-custom-brown font-semibold text-2xl font-sans m-4">
						Technical Skills
					</h4>
					<div className=" min-h-screen flex items-center justify-center p-2">
						<div className="grid grid-cols-4 gap-8">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="flex flex-col items-center justify-center bg-gray-700 hover:bg-custom-blue text-white p-6 rounded-xl shadow-lg w-40 h-40"
								>
									<Image
										src={skill.image}
										alt={skill.name}
										width={64}
										height={64}
										className="w-16 h-16"
									/>
									<span className="mt-2 text-sm font-semibold">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
					<h4 className="text-center text-custom-brown font-semibold text-2xl font-sans m-4">
						Professional Experience
					</h4>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
						<div className="bg-custom-gray border-l-8 border-custom-blue rounded-xl p-6 shadow-md">
							<p className="text-sm text-custom-blue font-medium tracking-wide">
								Sep 2025 – Present
							</p>

							<h3 className="text-2xl font-semibold text-custom-black mt-2">
								Frontend Developer
							</h3>

							<p className="text-custom-gray mt-1">
								Azrach IT · Nepal (Australian-based)
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{AzrachTechStack.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 text-xs bg-gray-100 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="bg-custom-gray border-l-8 border-custom-green rounded-xl p-6 shadow-md">
							<p className="text-sm text-custom-green font-medium tracking-wide">
								July 2023 – Sep 2025
							</p>

							<h3 className="text-2xl font-semibold text-custom-black mt-2">
								React Intern → Frontend Developer
							</h3>

							<p className="text-custom-gray mt-1">Envision Tech</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{EnvisionTechStack.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 text-xs bg-gray-100 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

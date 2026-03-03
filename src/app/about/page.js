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
	return (
		<main className="m-0 p-0 ">
			<Navbar />
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
						Work Experience
					</h4>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
						<div className="bg-custom-gray border-l-8 border-custom-blue rounded-xl p-6 shadow-md">
							<h3 className="text-2xl font-semibold text-custom-black">
								Frontend Developer
							</h3>

							<p className="text-sm text-custom-blue font-medium mt-1">
								Azrach IT · Nepal (Australian-based)
							</p>

							<p className="text-xs text-custom-green mt-1">
								Sep 2025 – Present
							</p>

							<ul className="mt-5 space-y-2 text-sm text-custom-black leading-relaxed list-disc list-inside">
								<li>
									Developing scalable and high-performance web applications
									using Next.js, React.js, and Tailwind CSS.
								</li>
								<li>
									Collaborating with UI/UX designers and backend developers to
									deliver end-to-end solutions.
								</li>
								<li>
									Improving SEO, responsiveness, and performance optimization.
								</li>
								<li>
									Implementing REST APIs, authentication flows, and dashboard
									features.
								</li>
							</ul>
						</div>

						<div className="bg-custom-gray border-l-8 border-custom-green rounded-xl p-6 shadow-md">
							<h3 className="text-2xl font-semibold text-custom-black">
								React Intern → Frontend Developer
							</h3>

							<p className="text-sm text-custom-blue font-medium mt-1">
								Envision Tech
							</p>

							<p className="text-xs text-custom-green mt-1">
								July 2023 – Sep 2025
							</p>

							<ul className="mt-5 space-y-2 text-sm text-custom-black leading-relaxed list-disc list-inside">
								<li>
									Built interactive UI components using React.js and Ant Design.
								</li>
								<li>
									Worked closely with senior developers on production features.
								</li>
								<li>
									Integrated APIs using Axios and managed application state
									using Redux.
								</li>
								<li>
									Gained real-world experience in Git workflows and agile
									development.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}

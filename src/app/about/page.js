"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
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
	const [showPdf, setShowPdf] = useState(false);
	const openPdf = () => {
		window.open("/khushicv.pdf", "_blank"); // Opens in a new tab
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
					Hello! I am a web developer with a focus on crafting dynamic and
					user-friendly web applications. I am currently studying for a Bachelor
					of Science in Computer Science and Information Technology (BSc CSIT)
					degree at Bhaktapur Multiple Campus. Alongside my studies, I am
					working as a React developer, where I get to apply my skills in
					creating innovative solutions and impactful digital experiences.
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
							<span className="ml-2 text-custom-black">9823065734</span>
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

					{showPdf && (
						<div className="fixed top-12 left-0 w-full min-h-screen bg-black bg-opacity-50 flex items-center justify-center z-100">
							<div className="relative bg-white p-4 rounded-lg shadow-lg w-3/4 h-3/4">
								<button
									onClick={() => setShowPdf(false)}
									className="absolute top-2 right-2 text-red-500 text-lg"
								>
									✖
								</button>
								<iframe
									src="/khushicv.pdf"
									className="w-full h-[90vh] border"
								></iframe>
							</div>
						</div>
					)}

					<h4 className="text-center text-custom-brown font-semibold text-2xl font-sans m-4">
						Technical Skills
					</h4>
					<div className=" min-h-screen flex items-center justify-center p-2">
						<div className="grid grid-cols-4 gap-8">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="flex flex-col items-center justify-center bg-gray-700 text-white p-6 rounded-xl shadow-lg w-40 h-40"
								>
									<img
										src={skill.image}
										alt={skill.name}
										className="w-16 h-16"
									/>
									<span className="mt-2 text-sm font-semibold">
										{skill.name}
									</span>
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

"use client";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Home() {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [hovered, setHovered] = useState(false);
	const skillclassfirst =
		" text-center rounded-xl text-white px-4 py-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out animate-float-up-down hover:animate-none cursor-default";
	const skillclassSecond =
		" text-center rounded-xl text-white px-4 py-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out animate-float-down-up hover:animate-none cursor-default";

	return (
		<main className="">
			<Navbar />
			<div
				className="h-screen bg-cover bg-center bg-fixed bg-no-repeat"
				style={{ backgroundImage: "url('/images/table.jpg')" }}
			>
				<div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
					<div className="relative m-10">
						{hovered && (
							<div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 flex space-x-4">
								<img
									src="/images/laptop.png"
									alt="laptop"
									className="h-14 w-14 transition-transform duration-1000 ease-in-out transform animate-fall"
									style={{ animationDelay: "0.1s" }}
								/>
								<img
									src="/images/laptop.png"
									alt="laptop"
									className="h-10 w-10 transition-transform duration-1000 ease-in-out transform animate-fall"
									style={{ animationDelay: "0.3s" }}
								/>

								<img
									src="/images/laptop.png"
									alt="laptop"
									className="h-14 w-14 transition-transform duration-1000 ease-in-out transform animate-fall"
								/>
								<img
									src="/images/laptop.png"
									alt="laptop"
									className="h-12 w-12 transition-transform duration-1000 ease-in-out transform animate-fall"
									style={{ animationDelay: "0.5s" }}
								/>
								<img
									src="/images/laptop.png"
									alt="laptop"
									className="h-12 w-12 transition-transform duration-1000 ease-in-out transform animate-fall"
									style={{ animationDelay: "0.2s" }}
								/>
							</div>
						)}
					</div>
					<h1 className="text-custom-gray font-mono tracking-wider text-4xl font-bold mx-4">
						Hi, I am{" "}
						<span
							className="cursor-pointer font-bold relative"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Khushi Chaudhary
						</span>
					</h1>
					<h4 className="text-custom-brown text-base mb-4">
						Web Developer | HTML | CSS | JavaScript | React | Next.js
					</h4>
					<p className="text-gray-800 p-8 m-1 text-lg text-justify font-semibold font-sans bg-custom-green rounded-2xl mx-16 my-4">
						I am a passionate web developer specializing in building dynamic and
						responsive web applications. With a keen eye for detail and a
						commitment to delivering high-quality work, I strive to create web
						experiences that are not only visually appealing but also
						user-friendly and efficient.
					</p>
				</div>
			</div>
			<div className="m-10 border-custom-brown p-8 border-4 rounded-2xl">
				<h1 className="text-3xl text-center font-semibold text-custom-black font-serif">
					About Me
				</h1>
				<div>
					<p className="m-4 text-justify font-semibold text-gray-800">
						Hello! I am a web developer with a focus on crafting dynamic and
						user-friendly web applications. I am currently studying for a
						Bachelor of Science in Computer Science and Information Technology
						(BSc CSIT) at Bhaktapur Multiple Campus. Alongside my studies, I am
						working as a React developer, where I get to apply my skills in
						creating innovative solutions and impactful digital experiences.
					</p>
					<h4 className="text-center text-custom-orange font-semibold text-xl font-sans m-8">
						Skills
					</h4>
					<div className="flex flex-wrap justify-center gap-4">
						<div className={`bg-custom-blue ${skillclassfirst}`}>
							Tailwind CSS
						</div>
						<div className={`bg-custom-green ${skillclassSecond}`}>React</div>
						<div className={`bg-custom-brown ${skillclassfirst}`}>
							JavaScript
						</div>
						<div className={`bg-custom-blue ${skillclassSecond}`}>CSS</div>
						<div className={`bg-custom-green ${skillclassfirst}`}>
							Problem Solving
						</div>
						<div className={`bg-custom-brown ${skillclassSecond}`}>Next.js</div>
						<div className={`bg-custom-blue ${skillclassfirst}`}>HTML</div>
						<div className={`bg-custom-green ${skillclassSecond}`}>
							Communication
						</div>
						<div className={`bg-custom-brown ${skillclassfirst}`}>SASS</div>
					</div>
				</div>
			</div>
			<div className="relative h-screen overflow-hidden">
				{/* Primary Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out z-10"
					style={{
						backgroundImage: "url('/images/project.jpg')",
						backgroundSize: "cover",
						transform: `translate(${offsetY * 0.3}px, ${offsetY * 0.3}px)`,
					}}
				/>
				{/* New Image Moving Upwards */}
				<div
					className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out z-20"
					style={{
						transform: `translate(${offsetY * -0.3}px, ${offsetY * -0.3}px)`,
					}}
				>
					<img
						src="/images/download.jpg"
						alt="Moving Up"
						className="h-full w-full object-cover"
					/>
				</div>
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
					<div className="text-center">
						<h1 className="text-5xl font-bold font-mono">Projects</h1>
						<p className="mt-4 text-lg">
							Explore a variety of projects that illustrate my skills,
							creativity, and commitment to quality in web development.
						</p>
					</div>
				</div>
			</div>
			<div className="text-4xl p-4">
				hello Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Veritatis illum sequi omnis odio quod libero magni eaque illo rem,
				necessitatibus dolorem ex non dolor corporis harum consequatur quis quas
				repellat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Beatae velit fugiat deleniti. Quos similique suscipit velit placeat.
				Facilis rerum reiciendis aspernatur aliquid possimus voluptatum dolorem
				sequi alias iste sit? Nesciunt. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Iure quos rerum cum cumque, maiores incidunt
				inventore, quisquam quaerat reiciendis facilis voluptates, quasi enim
				nulla quas aliquam architecto iste molestiae dolorum. Lorem ipsum dolor
				sit amet consectetur, adipisicing elit. Quos distinctio temporibus,
				maiores ab, delectus, quas odit eaque eligendi tenetur error sed! Qui
				sapiente expedita perspiciatis corrupti, eos impedit adipisci
				doloremque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis quibusdam aut odio voluptatem possimus, nihil iure placeat,
				quo corrupti aspernatur itaque enim perspiciatis, quisquam impedit
				aliquam accusantium nesciunt consequuntur quas.
			</div>
		</main>
	);
}

// pages/index.js

"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
	return (
		<main className="">
			<Navbar />
			<div
				className="h-screen bg-cover bg-center bg-fixed bg-no-repeat"
				style={{ backgroundImage: "url('/images/download.jpeg')" }}
			>
				<div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
					<h1 className="text-custom-gray font-mono tracking-wider text-4xl font-bold m-4">
						Hi, I'm <span className="cursor-pointer">Khushi Chaudhary</span>
					</h1>
					<h4 className="text-custom-green text-base mb-4">
						Web Developer | HTML | CSS | JavaScript | React | Next.js
					</h4>
					<p className="text-gray-800 p-8 m-1 text-lg text-justify font-semibold font-sans bg-custom-green rounded-2xl mx-16 my-4">
						I’m a passionate web developer specializing in building dynamic and
						responsive web applications. With a keen eye for detail and a
						commitment to delivering high-quality work, I strive to create web
						experiences that are not only visually appealing but also
						user-friendly and efficient.
					</p>
				</div>
			</div>
			<div className="m-10 border-custom-green p-8 border-4 rounded-2xl">
				<h1 className="text-3xl text-center font-semibold text-custom-brown font-serif">
					About Me
				</h1>
				<div>
					<p className="m-4 text-justify font-semibold text-gray-700">
						Hello! I'm a web developer with a focus on crafting dynamic and
						user-friendly web applications. I'm currently studying for a
						Bachelor of Science in Computer Science and Information Technology
						(BSc CSIT) at Bhaktapur Multiple Campus. Alongside my studies, I am
						working as a React developer, where I get to apply my skills in
						creating innovative solutions and impactful digital experiences.
					</p>
					<h4 className="text-center text-custom-blue font-semibold text-xl font-sans">
						Skills
					</h4>
					<div>
						<div>HTML</div>
						<div>CSS</div>
						<div>JavaScript</div>
						<div>React</div>
						<div>SASS</div>
						<div>Next.js</div>
						<div>Communication</div>
						<div>Problem Solving</div>
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

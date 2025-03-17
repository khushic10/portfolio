"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
	const [hovered, setHovered] = useState(false);
	const router = useRouter();

	return (
		<main className="m-0">
			<Navbar page={"home"} />
			<div
				className="h-screen bg-cover bg-center bg-fixed bg-no-repeat"
				style={{
					backgroundImage: "url('/images/background.jpg')",
				}}
			>
				<div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-75">
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
					<div className="flex items-center justify-start">
						<div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full overflow-hidden shadow-lg mb-4 sm:mb-0 sm:mr-6">
							<Image
								src="/images/profile.jpg"
								alt="Khushi Chaudhary"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="text-center">
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
						</div>
					</div>
					<p className="text-gray-800 p-8 m-1 text-lg text-justify font-semibold font-sans bg-custom-green rounded-2xl mx-16 my-4">
						I am a passionate web developer specializing in building dynamic and
						responsive web applications. With a keen eye for detail and a
						commitment to delivering high-quality work, I strive to create web
						experiences that are not only visually appealing but also
						user-friendly and efficient.
					</p>
				</div>
			</div>

			<div className="relative h-60 overflow-hidden">
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
					<div className="sticky top-0 w-full h-full pt-20 text-center bg-black bg-opacity-40 backdrop-blur-md py-4">
						<h1 className="text-5xl font-bold font-mono">Projects</h1>
						<p className="mt-2 text-lg px-4">
							Explore a variety of projects that illustrate my skills,
							creativity, and commitment to quality in web development.
						</p>
						<div className="flex justify-end">
							<button
								className="bg-red-950 text-white m-4 py-2 px-4 text-lg font-semibold rounded border border-white hover:bg-orange-950 transition transform hover:scale-110"
								onClick={() => router.push("/projects")}
							>
								View All Projects
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-xl bg-custom-black px-28 py-8">
				<div className="grid grid-cols-[1fr_3fr] p-4 cursor-pointer gap-4 items-center hover:shadow-lg transition-all duration-200 bg-white bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-center">
						<img
							src="/images/BaghChaal.png"
							alt=""
							className="h-64 w-64 rounded-2xl"
						/>
					</div>
					<div className="p-4">
						<div className="text-center font-semibold text-2xl">Bagh Chal</div>
						<div className="text-justify">
							This is a traditional Nepalese strategy game recreated in React
							with dynamic gameplay, turn-based logic, and real-time updates.
							The project ensures smooth interactions using React state
							management, making it an engaging and interactive experience.
						</div>
						<div className="flex justify-end">
							<button
								className="bg-custom-blue text-white px-4 py-2 rounded-xl transition transform hover:scale-125"
								onClick={() => router.push("/board")}
							>
								Play Now
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}

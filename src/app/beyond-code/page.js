"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";
import Image from "next/image";

const paintings = [
	{ link: "/images/cherry.jpg", alt: "cherry blossom painting" },
	{ link: "/images/flower.jpg", alt: "flower painting" },
	{ link: "/images/spring.jpg", alt: "spring painting" },
	{ link: "/images/autumn.jpg", alt: "autumn painting" },
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BeyondCode() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16 m-8">
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="max-w-6xl mx-auto"
			>
				<motion.p
					variants={item}
					className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
				>
					Coding is just one part of who I am. Beyond the screen, I explore
					creativity through art and moments that inspire me. I have a lot to
					give in both technology and creativity, bringing ideas to life in
					unique and meaningful ways.
				</motion.p>

				<motion.div variants={item} className="mb-10">
					<h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
						<FaPaintBrush /> Glimpse of Canvas Creations
					</h2>

					<div className="grid md:grid-cols-4 gap-6">
						{paintings.map((src, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.05 }}
								className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl group"
							>
								<Image
									src={src.link}
									alt={`painting-${index}`}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
									className="object-cover rounded-2xl"
								/>
								<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
									<p className="text-lg">{src.alt}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					variants={item}
					className="text-center my-10 text-gray-400 italic"
				>
					Creativity is intelligence having fun.
				</motion.div>

				<div className="grid md:grid-cols-3 gap-6 mb-16">
					{[
						"Creativity",
						"Consistency",
						"Curiosity",
						"Teamwork",
						"Problem Solving",
						"Headstrong and Adaptability",
					].map((title, i) => (
						<motion.div key={i} variants={item}>
							<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg min-h-[150px]">
								<h3 className="text-xl font-semibold mb-2">{title}</h3>
								<p className="text-gray-400 text-sm">
									{title === "Creativity" &&
										"Painting and designing help me think beyond logic and build unique experiences."}
									{title === "Consistency" &&
										"Whether it's coding or art, I believe consistency builds mastery over time."}
									{title === "Curiosity" &&
										"I love exploring new ideas, technologies, and creative directions."}
									{title === "Teamwork" &&
										"Collaborating with others helps me create better solutions and learn from different perspectives."}
									{title === "Problem Solving" &&
										"I enjoy tackling complex challenges and finding efficient, innovative solutions."}
									{title === "Headstrong and Adaptability" &&
										"I can adjust to new situations and technologies quickly and complete any work I keep my mind into, while maintaining quality work."}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}

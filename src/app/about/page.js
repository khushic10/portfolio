import React from "react";

export default function About() {
	return (
		<div className="m-10 border-custom-brown p-8 border-4 rounded-2xl">
			<h1 className="text-3xl text-center font-semibold text-custom-black font-serif">
				About Me
			</h1>
			<div>
				<p className="m-4 text-justify font-semibold text-gray-800">
					Hello! I am a web developer with a focus on crafting dynamic and
					user-friendly web applications. I am currently studying for a Bachelor
					of Science in Computer Science and Information Technology (BSc CSIT)
					at Bhaktapur Multiple Campus. Alongside my studies, I am working as a
					React developer, where I get to apply my skills in creating innovative
					solutions and impactful digital experiences.
				</p>
				<h4 className="text-center text-custom-orange font-semibold text-xl font-sans m-8">
					Skills
				</h4>
				<div className="flex flex-wrap justify-center gap-4">
					<div className={`bg-custom-blue ${skillclassfirst}`}>
						Tailwind CSS
					</div>
					<div className={`bg-custom-green ${skillclassSecond}`}>React</div>
					<div className={`bg-custom-brown ${skillclassfirst}`}>JavaScript</div>
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
	);
}

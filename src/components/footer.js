const Footer = () => {
	return (
		<footer className="bg-black opacity-90 text-white py-6">
			<div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				{/* Left Section - Logo or Name */}
				<div>
					<div className="text-sm font-semibold mb-2">Khushi Chaudhary</div>
					<div className="hover:text-gray-400 transition fab fa-linkedin text-xl">
						khushichaudhary989@gmail.com
					</div>
				</div>

				{/* Center Section - Navigation Links */}
				<div className="flex space-x-6 mt-4 md:mt-0">
					<a href="/" className="hover:text-gray-400 transition">
						Home
					</a>
					<a href="/about" className="hover:text-gray-400 transition">
						About
					</a>
					<a href="/projects" className="hover:text-gray-400 transition">
						Projects
					</a>
					<a href="/contact" className="hover:text-gray-400 transition">
						Contact
					</a>
				</div>

				{/* Right Section - Social Media Links */}
				<div className="mt-4 md:mt-0">
					<a
						href="https://www.linkedin.com/in/khushi-chaudhary-b17b41217/"
						className="hover:text-gray-400 transition"
					>
						<i className="fab fa-github text-lg">LinkedIn</i>
					</a>
					<div>
						<a
							href="https://github.com/khushic10"
							className="hover:text-gray-400 transition"
						>
							<i className="fab fa-linkedin text-lg">Github</i>
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Section - Copyright */}
			<div className="text-center text-sm text-gray-400 mt-4">
				© {new Date().getFullYear()} khushi chaudhary. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;

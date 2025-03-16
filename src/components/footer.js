const Footer = () => {
	return (
		<footer className="bg-black opacity-90 text-white py-6">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				{/* Left Section - Logo or Name */}
				<div className="text-xl font-semibold">Your Name</div>

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
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a href="#" className="hover:text-gray-400 transition">
						<i className="fab fa-github text-xl"></i>
					</a>
					<a href="#" className="hover:text-gray-400 transition">
						<i className="fab fa-linkedin text-xl"></i>
					</a>
					<a href="#" className="hover:text-gray-400 transition">
						<i className="fab fa-twitter text-xl"></i>
					</a>
				</div>
			</div>

			{/* Bottom Section - Copyright */}
			<div className="text-center text-sm text-gray-400 mt-4">
				© {new Date().getFullYear()} Your Name. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;

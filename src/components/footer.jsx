import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black opacity-90 text-white ">
			<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<h3 className="text-2xl font-semibold text-custom-yellow">
						Khushi Chaudhary
					</h3>
					<p className="text-sm mt-3 text-custom-gray leading-relaxed">
						Frontend Developer specializing in building clean, scalable, and
						user-friendly web applications using modern technologies.
					</p>

					<div className="flex items-center gap-3 mt-5 text-sm">
						<FaEnvelope className="text-custom-orange" />
						<span className="text-custom-creme">
							khushichaudhary989@gmail.com
						</span>
					</div>
				</div>

				<div className="md:mx-auto">
					<h4 className="text-lg font-semibold text-custom-yellow mb-4">
						Quick Links
					</h4>
					<ul className="space-y-3 text-sm">
						<li>
							<a href="/" className="hover:text-custom-orange transition">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-custom-orange transition">
								About
							</a>
						</li>
						<li>
							<a
								href="/projects"
								className="hover:text-custom-orange transition"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="hover:text-custom-orange transition"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div className="md:text-center">
					<h4 className="text-lg font-semibold text-custom-yellow mb-4">
						Connect
					</h4>

					<div className="flex md:justify-center gap-4 text-xl">
						<a
							href="https://www.linkedin.com/in/khushi-chaudhary-b17b41217/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-custom-creme hover:text-custom-orange transition"
						>
							<FaLinkedin />
						</a>

						<a
							href="https://github.com/khushic10"
							target="_blank"
							rel="noopener noreferrer"
							className="text-custom-creme hover:text-custom-orange transition"
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

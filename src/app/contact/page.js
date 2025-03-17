import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function Contact() {
	return (
		<div>
			<Navbar page={"contact"} />
			<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
				<div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						Contact Me
					</h2>
					<form className="space-y-4">
						<div>
							<label className="block text-gray-700 font-medium">Name</label>
							<input
								type="text"
								placeholder="Your Name"
								className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
							/>
						</div>
						<div>
							<label className="block text-gray-700 font-medium">Email</label>
							<input
								type="email"
								placeholder="Your Email"
								className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
							/>
						</div>
						<div>
							<label className="block text-gray-700 font-medium">Message</label>
							<textarea
								rows="4"
								placeholder="Your Message"
								className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

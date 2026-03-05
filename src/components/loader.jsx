"use client";

export default function Loader() {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] h-screen">
			<div className="flex flex-col items-center">
				<div className="w-14 h-14 border-4 border-custom-gold border-t-transparent rounded-full animate-spin mb-4"></div>
				<p className="text-white text-lg tracking-wide">Loading...</p>
			</div>
		</div>
	);
}

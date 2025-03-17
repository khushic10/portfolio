import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				const storedValue = window.localStorage.getItem(key);
				if (storedValue) {
					setState(JSON.parse(storedValue));
				}
			}
		} catch (error) {
			console.error("Error reading from localStorage", error);
		}
	}, [key]); // Runs only when the component mounts

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value;
			setState(valueToStore);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error("Error writing to localStorage", error);
		}
	};

	return [state, setValue];
};

export default useLocalStorage;

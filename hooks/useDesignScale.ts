import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1920;

export function useDesignScale() {
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const updateScale = () => setScale(window.innerWidth / DESIGN_WIDTH);
		updateScale();
		window.addEventListener("resize", updateScale);
		return () => window.removeEventListener("resize", updateScale);
	}, []);

	return scale;
}

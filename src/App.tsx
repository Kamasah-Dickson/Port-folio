import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
// import { motion } from "framer-motion";

export default function App() {
	return (
		<>
			<Home />
		</>
	);
}

// import React from "react";
// import { motion, useViewportScroll } from "framer-motion";

// const ScrollReveal = ({ children }) => {
//   const { scrollY } = useViewportScroll();

//   return (
//     <motion.div
//       style={{
//         opacity: scrollY.interpolate({
//           inputRange: [100, 200],
//           outputRange: [0, 1],
//         }),
//         transition: { duration: 0.5 },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollReveal;

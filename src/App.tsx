import "./index.css";
import { motion } from "framer-motion";

export default function App() {
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
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

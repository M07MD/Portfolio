import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const ContactUs = () => {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;

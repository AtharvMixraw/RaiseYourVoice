"use client";
import { motion } from "framer-motion";
export default function Loader() {
    return (
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="text-white text-4xl font-bold"
      >  
        Lets Make India Better...
      </motion.div>
    );
}
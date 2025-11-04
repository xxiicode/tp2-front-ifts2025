import { NesGamesList } from "../components/NesGamesList";
import { motion } from "framer-motion";

export default function NesGamesPage() {
  return (
    <motion.main
      style={{ background: "#003366", minHeight: "100vh", padding: "30px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
        Catálogo de Juegos NES
      </h1>
      <NesGamesList />
    </motion.main>
  );
}

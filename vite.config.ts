// vite.config.ts
// Este ficheiro configura o Vite para o seu projecto.
// vite.config.ts
// Este ficheiro configura o Vite para o seu projecto.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
// Define a base URL para o seu projecto, o que é crucial para o GitHub Pages.
// A URL deve ser o nome do seu repositório no GitHub.
base: '/cadastro-petshop/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


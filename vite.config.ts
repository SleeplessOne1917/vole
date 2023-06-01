import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: false })],
    server: {
      host: "0.0.0.0",
      port: 1234,
    },
  };
});

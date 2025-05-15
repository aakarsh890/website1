import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port:https://frontend-1asg.onrender.com,
        proxy: {
            "/api": {
                target: "https://social-server-x29q.onrender.com",
                changeOrigin:true,
            },
        },
        open: true
    }
})

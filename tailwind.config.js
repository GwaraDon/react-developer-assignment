/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#3498db",
                secondary: "#2c3e50",
                accent: "#e44d26",
                success: "#27ae60",
                warning: "#f39c12",
                error: "#e74c3c",
                gray: {
                    light: "#f8f9fa",
                    medium: "#666",
                    dark: "#2c3e50",
                },
            },
            fontFamily: {
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};

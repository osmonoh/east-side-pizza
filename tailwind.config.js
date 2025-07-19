/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: "Roboto Mono, monospace"
        },
        extend: {
            height: {
                screen: "100dvh"
            },
            keyframes: {
                blink: {
                    "0%, 100%": { color: "#D6D3D1" },
                    "50%": {
                        color: "#FACC15",
                        "text-shadow": "0 0 1px #FACC15"
                    }
                }
            },
            animation: {
                blink: "blink 3s linear infinite"
            }
        },
        plugins: []
    }
};

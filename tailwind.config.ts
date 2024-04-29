import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    10: '#46a96a',
                },
                gray: {
                    10: '#585858',
                },

            },
            backgroundImage: {
                "forest":"url('/forest.jpg')"
            },
            screens: {
                xs: '400px',
                '3xl': '1680px',
                '4xl': '2200px',
            },
            maxWidth: {
                '10xl': '1512px',
            },
            borderRadius: {
                '5xl': '40px',
            },
        },
    },
    plugins: [],
};
export default config;

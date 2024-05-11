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
                    1:  '#FAFAFA',
                    5:  '#5F5F5F',
                    6:  '#5F5F65',
                    10: '#585858',
                    15: '#41464B',
                    20: '#41464B',
                },
                blue:{
                    75: '#415990',
                },

            },
            fontFamily: {},
            backgroundImage: {
                "forest": "url('/forest.jpg')",
                "hero": "url('/hero-bg.png')",
                "section": "url('/section-bg.jpg')",
            },
            boxShadow: {
                "out": "0px 7px 25px rgb(41 41 41 / 27%);"
            },
            screens: {
                xs: '400px',
                '3xl': '1680px',
                '4xl': '2200px',
            },
        },
    },
    plugins: [],
};
export default config;

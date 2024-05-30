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
                    5 : '#47a500',
                    10: '#46a96a',
                },
                gray: {
                    1:  '#FAFAFA',
                    2:  '#F7F7F7',
                    3:  '#D4D4D4',
                    4:  '#E4E4E4',
                    5:  '#5F5F5F',
                    6:  '#5F5F65',
                    8:  '#B9B9B9',
                    10: '#585858',
                    15: '#41464B',
                    20: '#41464B',
                    30: '#333D36',
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
                "footer-bg": "url('/footer-bg.jpg')",
            },
            boxShadow: {
                "out": "0px 7px 25px rgb(41 41 41 / 27%);",
                "box": "0px 0px 13px 0px rgba(82, 90, 101, 0.12);"
            },
            screens: {

            },
        },
    },
    plugins: [],
};
export default config;

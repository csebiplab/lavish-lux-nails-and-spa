/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class"],
    theme: {
        extend: {
            screens: {
                'xs': '280px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1440px',
                '3xl': '1536px',
                '4xl': '1736px',
                '5xl': '1920px',
            },
            maxWidth: {
                'screen-5xl': '1920px',
            },
            padding: {
                '3xl': '10rem',
                '4xl': '12rem',
                '5xl': '16rem',
            },
            spacing: {
                '285': '285px',
            },
            colors: {
                primary: {
                    DEFAULT: "#C7A43C",
                    50: "#ede5ca",
                    100: "#54042C",
                    200: "#54042C",
                    300: "#54042C",
                    400: "#54042C",
                    500: "#54042C",
                    600: "#54042C",
                    700: "#54042C",
                },
                secondary: {
                    DEFAULT: "#A0153E",
                    50: "#049E43",
                },
                info: {
                    DEFAULT: "#33475B",
                    50: "#89A3BD",
                },
                success: {
                    DEFAULT: "#049E43",
                    50: "#89A3BD",
                },
                dark: {
                    DEFAULT: "#000",
                    50: "#404040",
                    100: "##4A4A4A",
                },
                warning: {
                    DEFAULT: "#FBCC21",
                    50: "#FBCD22",
                },
                danger: {
                    DEFAULT: "#DC0000",
                },
                gray: {
                    DEFAULT: "#D9D9D9",
                },
                'gray-1': "var(--gray-1)",
                'gray-2': "var(--gray-2)",
                'gray-3': "var(--gray-3)",
                'background': "var(--background-color)",
                'foreground': "var(--foreground)",
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'background': 'var(--background-color)',
            }),
            textColor: theme => ({
                ...theme('colors'),
                'foreground': 'var(--foreground)',
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
});

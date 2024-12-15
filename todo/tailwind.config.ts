import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import typography from "@tailwindcss/typography";

const config: Config = { 
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./public/index.html",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    plugins: [
        typography
    ],
};

export default withMT(config);
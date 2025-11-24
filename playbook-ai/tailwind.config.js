/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FDFCF8',
                charcoal: '#1A1A1A',
                gold: '#C5A46D',
                jet: '#111111',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            letterSpacing: {
                widest: '0.2em',
            },
        },
    },
    plugins: [],
}

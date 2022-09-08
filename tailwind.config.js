/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundSize: {
                '44': '11rem'
            },
            backgroundImage: {
                'bitcoin': 'url("https://setlife-solutions.s3.amazonaws.com/images/B+bitcoin.png")'
            },
            colors: {
                'primary': '#00C2D4',
                'primary-alt': 'rgba(0, 194, 212, 0.7)',
                'solid-black': '#000000',
                'solid-white': '#FFFFFF',
                'light-gray': '#F2F2F2'
            },
            minHeight: {
                'custom': '49.56rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

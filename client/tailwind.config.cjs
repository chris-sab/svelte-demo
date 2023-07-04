/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primaryPurple: "#555EAD",
                primaryRed: "#F43F5E",
                primaryGreen: "#558f51",
                primaryBlack: "#1E293B",
                primaryGrey: "#E2E8F0"
            },
            fontFamily: {
                'Poppins': ['Poppins-Regular', 'san-serif'],
                'Glegoo': ['Glegoo-Regular', 'san-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

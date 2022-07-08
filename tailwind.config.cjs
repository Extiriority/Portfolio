/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                bkg:    "#171819",
                muted:  "#C9CBCF",
                accent: "#8A84E2",
                touch:  "#F6C0D0",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            fontFamily: {
               metropolis: ["Metropolis", "sans-serif"]
            },
            fontSize: {
                sm: ["clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)", "1.4"],
                base: ["clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)", "1.5"],
                lg: ["clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)", "1.4"],
                xl: ["clamp(1.40rem, calc(1.32rem + 0.45vw), 1.68rem)", "1.4"],
                "2xl": ["clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)", "1.4"],
                "3xl": ["clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)", "1.2"],
                "4xl": ["clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)", "1.1"],
                "5xl": ["clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)", "1"],
                "6xl": ["clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)", "1"],
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  purge: [
    // 프로젝트에 사용되는 HTML 파일의 경로를 여기에 추가하세요.
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
}


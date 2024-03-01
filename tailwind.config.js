/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'baby_powder': { DEFAULT: '#F5F5EF', 100: '#3c3c25', 200: '#77774b', 300: '#abab78', 400: '#d0d0b4', 500: '#f5f5ef', 600: '#f7f7f2', 700: '#f9f9f6', 800: '#fbfbf9', 900: '#fdfdfc' }, 
        'air_superiority_blue': { DEFAULT: '#58A1C6', 100: '#0f212b', 200: '#1d4255', 300: '#2c6480', 400: '#3a85aa', 500: '#58a1c6', 600: '#79b4d1', 700: '#9bc7dd', 800: '#bcd9e8', 900: '#deecf4' }, 'columbia_blue': { DEFAULT: '#B9CFD7', 100: '#1d2d33', 200: '#3a5a65', 300: '#578698', 400: '#85abb9', 500: '#b9cfd7', 600: '#c6d8de', 700: '#d4e2e6', 800: '#e3ebef', 900: '#f1f5f7' }, 
        'platinum': { DEFAULT: '#DDE4E2', 100: '#28322f', 200: '#50645e', 300: '#79948c', 400: '#abbcb7', 500: '#dde4e2', 600: '#e4e9e8', 700: '#ebefee', 800: '#f1f4f3', 900: '#f8faf9' }, 
        'baby_powder': { DEFAULT: '#F5F5EF', 100: '#3c3c25', 200: '#77774b', 300: '#abab78', 400: '#d0d0b4', 500: '#f5f5ef', 600: '#f7f7f2', 700: '#f9f9f6', 800: '#fbfbf9', 900: '#fdfdfc' }, 
        'honolulu_blue': { DEFAULT: '#1079B3', 100: '#031824', 200: '#063147', 300: '#09496b', 400: '#0c618f', 500: '#1079b3', 600: '#16a0eb', 700: '#50b8f0', 800: '#8bd0f5', 900: '#c5e7fa' }, 
        'paynes_gray': { DEFAULT: '#5F6B73', 100: '#131517', 200: '#262b2e', 300: '#384045', 400: '#4b555c', 500: '#5f6b73', 600: '#7b8993', 700: '#9ca7ae', 800: '#bdc4c9', 900: '#dee2e4' }, 
        'lapis_lazuli': { DEFAULT: '#3B6787', 100: '#0c151b', 200: '#182936', 300: '#233e51', 400: '#2f536c', 500: '#3b6787', 600: '#4f89b2', 700: '#7ba6c5', 800: '#a7c4d8', 900: '#d3e1ec' } }
    },
  },
  plugins: [],
}
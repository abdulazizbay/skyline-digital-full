import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			'blue-main': '#0DA4F5',
    			gray1: '#9C9C9C',
    			gray2: '#1D1E2D80',
    			gray3: '#636363',
				gray4: '#88888880',
				gray5:"#D9D9D9",
    			'black1': '#101010',
				blue5:"#0DA4F51A",
				blue6:"#0DA4F51A",
				blue7:"#489CFFCC",
				blue8:"#009DE5",
				blue9:"#4B87CECC",
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			textShadow: {
    				custom: '0px 7px 50px rgba(13,164,245,1)'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			'20': '20px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			'100': '100px'
    		},
    		screens: {
				sm: {'max': '640px'},
				md: {'max': '768px'},
				lg: {'max': '1024px'},
				xl: {'max': '1200px'},
				'2xl': '1536px',
    		},
    		maxWidth: {
    			'10xl': '1512px'
    		},
    		padding: {
				"30":"30px",
    			'50': '50px',
    			'70': '70px',
    			'100': '100px',
    			'130': '130px',
    			'150': '150px',
    			'200': '200px',
    		},
    		margin: {
				"25":"25px",
				"30":"30px",
    			'50': '50px',
    			'100': '100px',
    			'150': '150px',
    			'200': '200px',
    			'300': '300px'
    		},
    		width: {
    			'50': '50px',
    			'100': '100px',
    			'200': '200px',
    			'250': '250px',
    			'300': '300px',
    			'400': '400px',
    			'650': '650px',
    			'700': '700px'
    		},
    		height: {
    			'50': '50px',
    			'90': '90px',
    			'100': '100px',
    			'300': '300px',
    			'400': '400px',
    			'650': '650px'
    		},
			gap:{
				50: '50px',
			},
			blur: {
				'100': '100px',
				'150': '150px',
				'200': '200px',
				'250': '250px',
			},
    		fontFamily: {
    			Inter: ['Inter', 'sans-serif']
    		},
    		fontSize: {
    			'24': '24px',
    			'38': '38px'
    		},
    		animation: {
    			rotateText: 'rotateText 10s linear infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
				"bg-change": "bgChange 3s ease-in-out ",
    		},
    		keyframes: {
				bgChange: {
					"0%": { backgroundColor: "#0DA4F5" },
					"100%": { backgroundColor: "white " }
				},

				rotateText: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},

    	}
    },
	plugins: [require("tailwindcss-animate")],
};

export default config;

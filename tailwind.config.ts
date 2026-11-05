import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
				'display': ['Jost', 'system-ui', 'sans-serif'],
				'mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
			},
			colors: {
				// Tokens do redesign (src/styles/tokens.css). Sem modificador de opacidade.
				t: {
					paper: 'var(--color-paper)', paper2: 'var(--color-paper-2)', paper3: 'var(--color-paper-3)',
					ink: 'var(--color-ink)', ink2: 'var(--color-ink-2)', muted: 'var(--color-muted)',
					rule: 'var(--color-rule)', rulestrong: 'var(--color-rule-strong)',
					accent: 'var(--color-accent)', accenthover: 'var(--color-accent-hover)', accentink: 'var(--color-accent-ink)', focus: 'var(--color-focus)',
					night: 'var(--color-night)', night2: 'var(--color-night-2)', nightink: 'var(--color-night-ink)', nightmuted: 'var(--color-night-muted)', nightaccent: 'var(--color-night-accent)', nightrule: 'var(--color-night-rule)',
				},
				brand: {
					DEFAULT: '#13a4ec',
					dark: '#088395',
				},
				papel: '#f7f6f2',
				nanquim: '#161a3a',
				projeto: {
					// #1f6feb ficou só no logo; como texto dava 4,29:1 no papel.
					DEFAULT: '#1a5fd6',
					claro: '#6ea8ff',
				},
				linha: '#d9d5c8',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: '#fef3c7',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'fadeIn': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slideUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeIn': 'fadeIn 0.6s ease-out',
				'slideUp': 'slideUp 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-light': 'var(--gradient-light)',
			},
			transitionDuration: {
				micro: 'var(--dur-micro)',
				short: 'var(--dur-short)',
				long: 'var(--dur-long)',
			},
			transitionTimingFunction: {
				out: 'var(--ease-out)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'hero': 'var(--shadow-hero)',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;

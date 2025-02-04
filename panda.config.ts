import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx,astro}",
		"./pages/**/*.{js,jsx,ts,tsx,astro}",
	],

	// Files to exclude
	exclude: [],

	//theme切り替えのカスタム属性を定義
	conditions: {
		light: "[data-theme=light] &",
		dark: "[data-theme=dark] &",
	},

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					// 基本カラー
					primary: {
						default: { value: "{colors.orange.500}" },
						emphasized: { value: "{colors.orange.600}" },
					},
					// 背景色
					bg: {
						default: {
							value: {
								base: "{colors.white}",
								_dark: "{colors.gray.900}",
							},
						},
						subtle: {
							value: {
								base: "{colors.gray.50}",
								_dark: "{colors.gray.800}",
							},
						},
						muted: {
							value: {
								base: "{colors.gray.100}",
								_dark: "{colors.gray.700}",
							},
						},
					},
					// テキストカラー
					text: {
						default: {
							value: {
								base: "{colors.gray.900}",
								_dark: "{colors.gray.100}",
							},
						},
						muted: {
							value: {
								base: "{colors.gray.600}",
								_dark: "{colors.gray.400}",
							},
						},
						subtle: {
							value: {
								base: "{colors.gray.500}",
								_dark: "{colors.gray.500}",
							},
						},
					},
					// アクセントカラー
					accent: {
						default: {
							value: {
								base: "{colors.orange.500}",
								_dark: "{colors.orange.400}",
							},
						},
						emphasized: {
							value: {
								base: "{colors.orange.600}",
								_dark: "{colors.orange.300}",
							},
						},
						muted: {
							value: {
								base: "{colors.orange.100}",
								_dark: "{colors.orange.900}",
							},
						},
					},
					// ボーダーカラー
					border: {
						default: {
							value: {
								base: "{colors.gray.200}",
								_dark: "{colors.gray.700}",
							},
						},
						emphasized: {
							value: {
								base: "{colors.gray.300}",
								_dark: "{colors.gray.600}",
							},
						},
					},
					// リンクカラー
					link: {
						default: {
							value: {
								base: "{colors.orange.600}",
								_dark: "{colors.orange.400}",
							},
						},
						hover: {
							value: {
								base: "{colors.orange.700}",
								_dark: "{colors.orange.300}",
							},
						},
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});

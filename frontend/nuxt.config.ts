// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
			  @use "@/assets/scss/_fonts.scss" as *;
			  @use "@/assets/scss/_functions.scss" as *;
			  @use "@/assets/scss/_normalize.scss" as *;
			  @use "@/assets/scss/_variables.scss" as *;
			`,
				},
			},
		},
	},
	css: ["~/assets/scss/main.scss"],
	modules: ["@nuxtjs/strapi", "@nuxt/image"],
	image: {
		dir: "assets/images",
		strapi: {
			baseURL: "http://localhost:1337",
		},
	},
	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
		cookie: {},
		cookieName: "strapi_jwt",
	},
});

import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.date(),
		updatedAt: z.date(),
		author: z.object({
			name: z.string(),
			image: z.string().optional(),
			bio: z.string().optional(),
		}),

		category: z.enum(["c1", "c2", "c3"]),
		tags: z.array(z.string()).default([]),

		ogImage: z
			.object({
				url: z.string(),
				alt: z.string(),
				width: z.number().default(1200),
				height: z.number().default(630),
			})
			.optional(),

		status: z.enum(["draft", "published", "archived"]).default("draft"),
		featured: z.boolean().default(false),

		canonicalUrl: z.string().url().optional(),

		showToc: z.boolean().default(true),
		tocDepth: z.number().min(1).max(3).default(2),

		relatedPosts: z.array(z.string()).default([]),

		estimatedReadTime: z.number().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};

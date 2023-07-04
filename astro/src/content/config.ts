import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		excerpt: z.string(),
		keywords: z.array(z.string()),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updateDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		cover: z.object({
			image: z.string(),
			cover: z.string().optional(),
		}),
	}),
});

export const collections = { blog };

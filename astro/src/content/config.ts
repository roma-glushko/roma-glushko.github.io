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
			credits: z.string().optional(),
			aspectRatio: z.string().optional().transform(str => str ? str: "3:2"),
		}),
	}),
});


const thoughts = defineCollection({
	schema: z.object({
		title: z.string(),
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
			credits: z.string().optional(),
			aspectRatio: z.string().optional().transform(str => str ? str: "3:2"),
		}),
	})
})

const cv = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		position: z.string(),
		keywords: z.array(z.string()),
	})
})

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		content: z.enum(['standalone', 'teaser']).optional().transform(content => content ?? "teaser"),
		keywords: z.array(z.string()),
	})
})

export const collections = { blog, thoughts, cv, projects };

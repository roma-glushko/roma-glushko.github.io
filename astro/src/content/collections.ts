import { getCollection } from "astro:content"

export const getBlogPosts = async () => {
    return (await getCollection('blog'))
        .sort(
            (a, b) =>  b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
        )
}

export const getThoughts = async () => {
    return (await getCollection('thoughts'))
        .sort(
            (a, b) =>  b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
        )
}

export const getResumes = async () => {
    return (await getCollection('cv'))
        .sort(
            (a, b) =>  b.data.order.valueOf() - a.data.order.valueOf()
        )
}
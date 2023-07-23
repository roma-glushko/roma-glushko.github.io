// inspired by https://github.com/nullhook/gatsby-remark-video/blob/master/index.js
import { visit } from 'unist-util-visit';

// export type VideoOptions = {
//     width: number | string;
//     height: number | string;
//     title: string | undefined;
//     preload: string | undefined;
//     muted: string | undefined;
//     autoplay: boolean;
//     playsinline: boolean;
//     controls: boolean;
//     loop: boolean;
// }

const matchRegExp = new RegExp(
    // Look for a "video" and then possibly ':' and then a space
    `video:?\\s` +
    // Then, optionally find "title" and then possible :
    `(?:title:?\\s"(` +
    // '.*?(?!\\").' is a trick to negative lookbehind (since negative look-behinds have poor node support for now)
    // It allows us to be a able to get "any \"escaped\" quoted value" but lazily to avoid grabbing too much
    `.*?(?!\\\\").)"` +
    // The : is optional much like with 'video', but the title itself is also optional entirely
    `:?\\s)?` +
    // Then grab the video path from the string
    `(.*)`,
    // Make it insensitive
    'i'
);

const renderVideoTag = (url, options) => {
    return `
		<video
			src=${url}
			width="${options.width}"
			height="${options.height}"
			preload="${options.preload}"
			muted="${options.muted}"
			title="${options.title}"
			${options.autoplay ? 'autoplay' : ''}
			${options.playsinline ? 'playsinline' : ''}
			${options.controls ? 'controls' : ''}
			${options.loop ? 'loop' : ''}
		></video>
	`;
};

const RehypeVideo = (options) => {
    const visitor = (node) => {
        const {value} = node;
        const matches = value.match(matchRegExp);

        if (matches) {
            const title = matches[1]; // May be null
            const url = matches[2].trim();

            node.type = 'html';
            node.value = renderVideoTag(url, {
                ...options,
                title: title || url
            });
        }
    }

    return (tree) => {
        visit(tree, 'inlineCode', visitor);

        return tree
    }
}

export default RehypeVideo;

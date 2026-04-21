import { Metadata } from "next";

interface Props {
    params: { slug: string[] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const rawTag = slug?.[0];
    const tag = rawTag === "all" ? undefined : rawTag;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    return {
        title: `Notes filtered by:  ${tag}`,
        description: `Browse notes filtered by \"${tag}\" tag. Find relevant notes quickly.`,
        openGraph: {
            title: `Notes filtered by:  ${tag}`,
            description: `Browse notes filtered by \"${tag}\" tag. Find relevant notes quickly.`,
            url: `${baseUrl}/notes/filter/${tag}`,
            images: [
                {
                    url: "/notehub-og-meta.jpg",
                    width: 1200,
                    height: 600,
                    alt: "image with app preview",
                },
            ],
            type: "article",
        },
    };
}
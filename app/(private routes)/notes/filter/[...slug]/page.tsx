"use client";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
const { slug } = await params;
interface Props {
  params: Promise<{ slug: string[] }>;
}

export default function NotesPage({ params }: Props) {
  const queryClient = new QueryClient();

  const { slug } = params;
  const rawTag = slug?.[0];
  const tag = rawTag === "all" ? undefined : rawTag;

  queryClient.prefetchQuery({
    queryKey: ["note", slug],
    queryFn: () => fetchNotes(tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
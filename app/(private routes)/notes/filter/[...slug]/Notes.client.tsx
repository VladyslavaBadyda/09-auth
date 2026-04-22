"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import { NoteList } from "@/components/NoteList/NoteList";
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchNotes } from "@/lib/api/clientApi";
import type { NoteTag } from "@/types/note";

type NotesClientProps = {
  initialSearch?: string;
  initialTag?: string;
  initialPage?: number;
};

export default function NotesClient({
  initialSearch = "",
  initialTag = "All",
  initialPage = 1,
}: NotesClientProps) {
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);

  const tag = initialTag;

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", search, tag, page],
    queryFn: () =>
      fetchNotes({
        search,
        tag: tag === "All" ? "" : (tag as NoteTag),
        page,
        perPage: 12,
      }),
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <div>
      <SearchBox value={searchInput} onChange={setSearchInput} />

      <Link href="/notes/action/create">Create note</Link>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading notes.</p>}

      {!isLoading && !isError && (
        <>
          <NoteList notes={notes} />

          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrevious={() => setPage((prev) => prev - 1)}
              onNext={() => setPage((prev) => prev + 1)}
            />
          )}
        </>
      )}
    </div>
  );
}
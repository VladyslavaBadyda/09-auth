// Function to fetch notes
export async function fetchNotes(tag?: string) {
    const response = await fetch(`/api/notes?tag=${tag || ''}`);
    if (!response.ok) {
        throw new Error('Failed to fetch notes');
    }
    return response.json();
}

// Function to create a new note
export async function createNote(noteData: any) {
    const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
    });
    if (!response.ok) {
        throw new Error('Failed to create note');
    }
    return response.json();
}

// Function to delete a note
export async function deleteNote(noteId: string) {
    const response = await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete note');
    }
    return response.json();
}

// Function to fetch a note by ID
export async function fetchNoteById(noteId: string) {
    const response = await fetch(`/api/notes/${noteId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch note');
    }
    return response.json();
}
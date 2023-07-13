export interface Rating {
    id: number;
    professor: string;
    course: string;
    quality: number;
    difficulty: number;
    attendance: string;
    textbook: string;
    midterm: string;
    final: string;
    openNotes: string;
    comment: string;
    likes: number;
    dislikes: number;
    date: Date;
}

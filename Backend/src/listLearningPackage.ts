interface Package {
    id: number;
    title: string;
    description?: string | null;
    category: string;
    targetAudience?: string;
    difficulty: number;
}

export const learningPackages: Package[] = [
    { id: 1, title: 'Learn TypeScript', description: 'Master TypeScript basics', category: 'Programming', targetAudience: 'Developers', difficulty: 5 },
    { id: 2, title: 'Learn NodeJs', description: 'Learn server-side JavaScript', category: 'Programming', targetAudience: 'Backend Developers', difficulty: 6 },
    { id: 3, title: 'Learn HTML', description: 'Understand web structures', category: 'Web Development', targetAudience: 'Beginners', difficulty: 3 },
    { id: 4, title: 'Learn Angular', description: 'Build web applications', category: 'Frontend', targetAudience: 'Web Developers', difficulty: 8 }
];


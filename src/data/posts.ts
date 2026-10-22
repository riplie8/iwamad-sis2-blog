export interface Post {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'Arsenal 3-1 Win at Emirates',
      summary: 'A dominant home victory for the Gunners.',
      content: 'Arsenal secured a strong 3-1 win at home with great goals and set-piece dominance.',
      date: '2026-10-18',
    },
    {
      id: 2,
      title: 'Squad Depth Drives Title Push',
      summary: 'Arteta’s rotation keeps the team strong.',
      content: 'Key squad rotations and tactical changes are keeping Arsenal at the top of the table.',
      date: '2026-10-12',
    },
    {
      id: 3,
      title: 'Champions League Night',
      summary: 'Another big European match ahead.',
      content: 'Solid defense and high pressing lead Arsenal through a tough European campaign.',
      date: '2026-10-05',
    },
  ];
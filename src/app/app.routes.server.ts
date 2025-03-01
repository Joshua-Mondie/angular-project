import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'users/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Fetch user data from API at build time
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();

      // Return a list of user IDs for prerendering
      return users.map((user: { id: number }) => ({ id: user.id.toString() }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // Keep this for static pages
  },
];

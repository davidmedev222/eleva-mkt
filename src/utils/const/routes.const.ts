export enum Routes {
  Home = '/',
  Pricing = '/pricing',
  Blog = '/blog',
  Login = '/login'
}

export const LinkRoutes = [
  { id: crypto.randomUUID(), name: 'Pricing', href: Routes.Pricing },
  { id: crypto.randomUUID(), name: 'Blog', href: Routes.Blog }
]

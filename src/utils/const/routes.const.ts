export enum Routes {
  Home = '/',
  Pricing = '/pricing'
}

export const LinkRoutes = [{ id: crypto.randomUUID(), name: 'Pricing', href: Routes.Pricing }]

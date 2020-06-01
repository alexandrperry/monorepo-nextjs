type Routes = {
  [index: string]: string;
};

export const APP_ROUTES: Routes = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT: '/products/[id]',
  ABOUT_US: '/about'
};

export const API_ROUTES: Routes = {
  PRODUCTS: '/products',
  SUBSCRIBE: '/subscribers'
};

export type TScreen = {
  name: ERoutes;
  component: () => JSX.Element;
};

export enum ERoutes {
  Home = 'Home',
}

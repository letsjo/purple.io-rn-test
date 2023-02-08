import About from "../screens/About";
import CustomNavigation from "../navigations/CustomNavigation";

export const BottomTabData = [
  {
    id: 1,
    name: 'STORE',
    component: CustomNavigation,
    activeIcon: 'home-sharp',
    inActiveIcon: 'home-outline',
  },
  {
    id: 2,
    name: 'ABOUT',
    component: About,
    activeIcon: 'person-sharp',
    inActiveIcon: 'person-outline',
  },
];
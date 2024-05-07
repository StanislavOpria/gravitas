import Clients from '../../Clients/Clients';
import Contacts from '../../Contacts/Contacts';
import Main from '../../Main/Main';
import News from '../../News/News';
import NewsPage from '../../NewsPage/NewsPage';
import Partners from '../../Partners/Partners';
import Practices from '../../Practices/Practices';

export const routeList = [
  {
    path: "/news/:id",
    Component: NewsPage,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/clients",
    Component: Clients,
  },
  {
    path: "/contacts",
    Component: Contacts,
  },
  {
    path: "/partners",
    Component: Partners,
  },
  {
    path: "/practices",
    Component: Practices,
  },
  {
    path: "/",
    Component: Main,
  },
  {
    path: "*",
    Component: Main,
  },
];

export default {};

/* eslint-disable */
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Post from './components/posts/index';
import Profile from './components/profile/index';

// ----------------------------------------------------------------------
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/testimonials">
          {/* <DashboardLayout> */}
          <Blog />
          {/* </DashboardLayout> */}
        </Route>
        <Route path="/dashboard">
          <DashboardLayout>
            <Products />
          </DashboardLayout>
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './App.styles'

//comp
import ScrollTop from './hooks/useScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';

// Pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const CareerItemPage = lazy(() => import('./pages/CareerItemPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const AriticleItemPage = lazy(() => import('./pages/ArticleItemPage'));
const ForumPage = lazy(() => import('./pages/ForumPage'));
const ForumItemPage = lazy(() => import('./pages/ForumItemPage'));
const TestsPage = lazy(() => import('./pages/TestsPage'));
const WebinarsPage = lazy(() => import('./pages/WebinarsPage'));
const WebinarsItemPage = lazy(() => import('./pages/WebinarsItemPage'));


const App = () => {
  return (
   <Container>
     <ScrollTop>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/courses" component={CoursePage} />
            <Route exact path="/careers" component={CareersPage} />
            <Route exact path="/careers/1" component={CareerItemPage} />
            <Route exact path="/blogs" component={BlogsPage} />
            <Route exact path="/article/1" component={AriticleItemPage} />
            <Route exact path="/forums" component={ForumPage} />
            <Route exact path="/forums/1" component={ForumItemPage} />
            <Route exact path="/tests" component={TestsPage} />
            <Route exact path="/webinars" component={WebinarsPage} />
            <Route exact path="/webinars/1" component={WebinarsItemPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
     </ScrollTop>
   </Container>
  );
}

export default App;
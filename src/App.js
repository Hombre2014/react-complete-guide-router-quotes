import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';
// import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

const NewQuote = React.lazy(() => import('./pages/NewQuote')); // Lazy loading
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p className='centered'>Loading...</p>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loadTasks } from './actions/task.actions';

import Loading from './views/Loading/Loading';
import NotFound from './views/NotFound/NotFound';
import Layout from './views/Layout/Layout';

const Home = lazy(()=>import('./views/Home/Home'));
const Tasks = lazy(()=>import('./views/Tasks/Tasks'));
const Proyects = lazy(()=>import('./views/Proyects/Proyects'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={ <Loading /> }>
          <Routes>
            <Route path='/' exact element={ <Home /> }/>
            <Route path='/tasks' exact element={ <Tasks /> }/>
            <Route path='/proyects' exact element={ <Proyects /> }/>
            {/* NOT FOUND 404 */}
            <Route path='*' element={ <NotFound /> }/>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

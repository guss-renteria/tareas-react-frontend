import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loadTasks } from './actions/task.actions';

import Loading from './views/Loading/Loading';
import NotFound from './views/NotFound/NotFound';

const Home = lazy(()=>import('./views/Home/Home'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          {/* NOT FOUND 404 */}
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

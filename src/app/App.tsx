import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib";

const App = () => {
  const {toggleTheme, theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

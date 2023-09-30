import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Welcome from './Welcome';
import Day1 from './Day1';
import Day2 from './Day2';

const BaseComponent = () => {

  const { day } = useParams();
  const currentDay = parseInt(day, 10);
  const notValidDay = currentDay <= 0 || currentDay === undefined || !currentDay;  
  
  const prevDay = currentDay-1;
  const nextDay = notValidDay ? 1 : (currentDay+1);

  const [ theme, setTheme ] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const options = [{
    icon: "sunny",
    text: "light"
  }, {
    icon: "moon",
    text: "dark"
  }, {
    icon: "desktop-outline",
    text: "system"
  }];

  useEffect(() => {
    function onWindowMatch() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
        element.classList.add('dark')
      }
      else {
        element.classList.remove('dark')
      }
    }
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme, element.classList, darkQuery.matches])

  darkQuery.addEventListener("change", e => {
    if (!('theme' in localStorage)) {
      if (e.matches) element.classList.add('dark');
      else element.classList.remove('dark');
    }
  })

  const DayContent = () => notValidDay ? <Welcome /> :
    <div>
      <h2 className="text-2xl font-semi-bold">Tag {day}</h2>
      { currentDay === 1 && <Day1 /> }
      { currentDay === 2 && <Day2 /> }
    </div>

  return (
    <section className="min-h-screen pt-16 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-5 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        { options.map(opt =>
          <button 
            key={opt.text} 
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-emerald-700'}`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        )}
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Adventskalender</h1>
          <h2>In nur 24 Tagen zu einem nachhaltigeren Lebensstil</h2>
        </div>
        <br/>
        <br/>
    
        <Routes>
          <Route path="/:day?" element={<DayContent/>} />
        </Routes>

        <div className="flex justify-between top-5 right-10 duration-100">
        <button 
          className='w-8 h-8 leading-9 text-xl rounded-full m-1 dark:bg-emerald-700 bg-black enabled:text-white disabled:dark:bg-slate-800 disabled:bg-gray-100'
          disabled={notValidDay}
        >
          {prevDay >= 0 ? 
            <Link to={prevDay > 0 ? `/${prevDay}` : '/'}>
              <ion-icon name="chevron-back"></ion-icon>
            </Link> :
            <ion-icon name="chevron-back"></ion-icon>
          }
        </button>
      
        <button 
          className='w-8 h-8 leading-9 text-xl rounded-full m-1 dark:bg-emerald-700 bg-black enabled:text-white disabled:dark:bg-slate-800 disabled:bg-gray-100'
          disabled={currentDay >= 24}
        >
          { nextDay <= 24 ? 
            <Link to={`/${nextDay}`}>
              <ion-icon name="chevron-forward"></ion-icon>
            </Link> :
            <ion-icon name="chevron-forward"></ion-icon>
          }
        </button>
      </div>
    </div>
  </section>
  );
}

export default BaseComponent;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Welcome, Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24 } from '../components';

const AdventCalendar = () => {

  const pathName = 'adventcalendar';

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const day = queryParams.get('day');

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

  const scrollToTop = () => window.scrollTo({ top: 0 });

  const DayContent = () => {
    switch (currentDay) {
      case 1: return <Day1 />
      case 2: return <Day2 darkMode={theme === 'dark' || ((theme === 'system') && darkQuery.matches)} />
      case 3: return <Day3 />
      case 4: return <Day4 />
      case 5: return <Day5 />
      case 6: return <Day6 />
      case 7: return <Day7 />
      case 8: return <Day8 />
      case 9: return <Day9 />
      case 10: return <Day10 />
      case 11: return <Day11 />
      case 12: return <Day12 />
      case 13: return <Day13 />
      case 14: return <Day14 />
      case 15: return <Day15 />
      case 16: return <Day16 />
      case 17: return <Day17 />
      case 18: return <Day18 />
      case 19: return <Day19 />
      case 20: return <Day20 />
      case 21: return <Day21 />
      case 22: return <Day22 />
      case 23: return <Day23 />
      case 24: return <Day24 />
      default: return <Welcome />
    }
  }

  var title = 'Adventskalender';
  var subtitle = 'In nur 24 Tagen zu einem nachhaltigeren Lebensstil';

  return (
    <section className="min-h-screen pt-20 dark:text-textDark dark:bg-bgDark-150 duration-100">
      <div className="fixed top-5 right-5 duration-100 dark:bg-bgDark-50 bg-bgLight rounded z-10">
        { options.map(opt =>
          <button 
            key={opt.text} 
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-primary'}`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        )}
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <Link to={`/${pathName}`}>
            <h1 className="text-3xl font-bold">{title}</h1>
            <h5 className="text-lg">{subtitle}</h5>
          </Link>
        </div>
        <br/>
        <br/>
        { notValidDay ? <Welcome /> : <DayContent /> }
        <div className="flex justify-between py-8">
          <button 
            className='w-8 h-8 leading-9 text-xl rounded-full m-1 enabled:text-textDark enabled:dark:text-bgDark-150 dark:bg-secondaryDark bg-secondary disabled:dark:bg-bgDark-100 disabled:bg-bgLight'
            disabled={notValidDay}
            onClick={scrollToTop}
          >
            { prevDay >= 0 ? 
              <Link to={prevDay > 0 ? `/${pathName}?day=${prevDay}` : `/${pathName}`}>
                <ion-icon name="chevron-back" />
              </Link> :
              <ion-icon name="chevron-back" />
            }
          </button>
          <button 
            className='w-8 h-8 leading-9 text-xl rounded-full m-1 enabled:text-textDark enabled:dark:text-bgDark-150 dark:bg-secondaryDark bg-secondary  disabled:dark:bg-bgDark-100 disabled:bg-bgLight'
            disabled={currentDay >= 24}
            onClick={scrollToTop}
          >
            { nextDay <= 24 ? 
              <Link to={`/${pathName}?day=${nextDay}`}>
                <ion-icon name="chevron-forward" />
              </Link> :
              <ion-icon name="chevron-forward" />
            }
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdventCalendar;
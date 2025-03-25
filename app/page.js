'use client'
import { useContext } from 'react';
import headerLoaded from './layout'
// import { HeaderLoadedContext } from './layout';
import MainVideo from './components/MainVideo';

export default function Home() {
  // const headerLoaded = useContext(HeaderLoadedContext);

  return (
    <main>
      <MainVideo headerLoaded={headerLoaded} />
    </main>
  )
}

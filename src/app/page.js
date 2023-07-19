import Head from 'next/head';
import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar">
        <Head>
        </Head>

        <Background />
        <NavBar />
        <HomePage />
    </main>
  )
}

import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar">
      <Background />
      <NavBar />

      <div className="relative">
        <HomePage />
      </div>
    </main>
  )
}

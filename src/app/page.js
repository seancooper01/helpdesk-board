import Board from './components/board';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-4">Helpdesk Tickets Board</h1>
      <Board />
    </main>
  );
}
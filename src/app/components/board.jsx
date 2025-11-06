'use client';

import { useEffect, useState } from 'react';
import StatusMessage from './StatusMessage';

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let isActive = true;
        async function load() {
            try {
                const res = await fetch('api/tickets');
                const data = await res.json();
                if (isActive) setTickets(data);
            } catch (err) {
                if (isActive) setError(err.message || String(err));
            } finally {
                if (isActive) setLoading(false);
            }
        }
        load();
        return () => { ifActive = false; };
    }, []);
    if (loading) return <StatusMessage type='loading' message='Loading tickets...' />;
    if (error)   return <StatusMessage type="error" message={`Error: ${error}`} />;


// Temporary placeholder until I add real components
  return (
    <section className="space-y-2">
      <div className="text-sm text-gray-600">Loaded {tickets.length} tickets.</div>
      <ul className="list-disc pl-5">
        {tickets.slice(0, 5).map(t => (
          <li key={t.id}>
            <strong>{t.title}</strong> — <span className="text-gray-600">{t.status}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-500">(Showing first 5 as a smoke test)</div>
    </section>
  );
}
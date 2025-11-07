'use client';

import { useEffect, useMemo, useState } from 'react';
import StatusMessage from './StatusMessage';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';


export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Controlled filters + search
    const [status, setStatus] = useState("All");
    const [priority, setPriority] = useState('All');
    const [search, setSearch] = useState('');

    //Queue map:
    const [queue, setQueue] = useState({});

    //Fetch once
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
        return () => { isActive = false; };
    }, []);
   
    //Derive visible tickets from filters + search
    const visibleTickets = useMemo(() => {
        const q = search.trim().toLowerCase(); 
        return tickets.filter(t => {
            const okStatus = status === 'All' || t.status === status; 
            const okPriority = priority === 'All' || t.priority === priority; 
            const okSearch = !q || (t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
            return okStatus && okPriority && okSearch;
        });
    }, [tickets, status, priority, search]);

    //Queue handlers
    const addToQueue = (id) => setQueue(prev => ({ ...prev, [id]: true }));
    const removeFromQueue = (id) =>
          setQueue(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
        })
        const clearQueue = () => setQueue({}); 

    if (loading) return <StatusMessage type='loading' message='Loading tickets...' />;
    if (error)   return <StatusMessage type="error" message={`Error: ${error}`} />;

    return (
        <section className='grid gap-4'>
            <div className='flex flex-col sm:flex-row gap-3 sm:items-center sm:justidy-between'>
                <div className='flex flex-wrap gap-3'>
                    <StatusFilter value={search} onChange={setStatus} />
                    <PriorityFilter value={priority} onChange={setPriority} />
                </div>
                <SearchBox value={search} onChange={setSearch} />
            </div>

            {visibleTickets.length === 0 ? (
                <StatusMessage type='info' message='No tickets match your filters.' />
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-2'>
                        <TicketList
                        tickets={visibleTickets}
                        queueMap={queue}
                        onAddToQueue={addToQueue}
                        />
                    </div>
                    <MyQueueSummary
                    items={queue}
                    onRemove={removeFromQueue}
                    onClear={clearQueue}
                    />
                </div>
            )}
        </section>
    );
}

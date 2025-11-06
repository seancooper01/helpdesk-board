'use client';

import TicketCard from "./TicketCard";

export default function TicketList({ tickets, queueMap, onAddToQueue }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map( t => (
                <li key={t.id}>
                    <TicketCard ticket={t} queued={queueMap[t.id]} onAdd={onAddToQueue} />
                </li>
            ))}
        </ul>
    );
}
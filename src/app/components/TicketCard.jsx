'use client';

export default function TicketCard({ ticket, queued, onAdd }) {
    const {id, title, description, priority, status, assignee, updatedAt } = ticket; 
    const disabled = !!queued; 

    return (
        <article className="border rounded p-3 hover:shadow-sm transition">
            <div className='flex flex-swrap items-center justify-between gap-2 mb-1'>
                <h3 className='font-semibold'>{title}</h3>
                <span className='text-xs text-gray-500'>{new Date(updatedAt).toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-700">{description}</p>
            <div className='text-sm flex flex-wrap gap-3 mb-3'>
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indido-200">
                    {status}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                    {priority}
                </span>
                </div>
                <button
                    type="button"
                    className={`px-3 py-1 rounded text-white ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    disabled={disabled}
                    onClick={() => onAdd?.(id)}
                    aria-disabled={disabled}
                    >
                        {disabled ? "Queued" : 'Add to My Queue'}
                    </button>
        </article>
    );
}
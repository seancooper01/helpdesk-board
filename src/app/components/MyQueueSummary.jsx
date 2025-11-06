'use client';

export default function MyQueueSummary ({ items, onRemove, onClear }) {
    const ids = Object.keys(items); 
    const count = ids.length; 

    return (
        <aside className='border rounded p-3 h-fit sticky top-4'>
            <h3 className='font-semibold mb-2'>My Queue ({count})</h3>
            {count === 0 ? (
                <p className="text-sm text-gray-600">No tickets queued.</p>
            ) : ( 
                <ul className="space-y-2 mb-3">
                    {ids.map(id => (
                        <li key={id} className='flex items-center justify-between gap-2'>
                            <span className="truncate">{id}</span>
                            <button 
                            type="button"
                            className="text-xs px-2 py-0.5 border rounded hover:bg-gray-50"
                            onClick={() => onRemove?.(id)} 
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button 
            type="button"
            className="w-full text-sm p-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-60"
            onClick={onClear}
            disabled={count === 0}
            >
                Clear Queue
            </button>
        </aside>
    );
}
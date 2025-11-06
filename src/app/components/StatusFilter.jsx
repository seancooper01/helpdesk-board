'use client';

export default function StatusFilter({ value, onChange }) {
    const options = ["All", "Open", "In Progress", "On Hold", "Resolved"];
    return (
        <label className='text-sm flex items-center gap-2'>
            <span className='font-medium'>Satus:</span>
            <select
                className='border rounded px-2 py-1'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                >
                    {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
        </label>
    );
}


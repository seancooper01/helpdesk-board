'use client';

export default function PriorityFilter({ value, onChange }) {
    const options = ['All', "Low", 'Medium', 'High', "Critical"];
    return (
        <label className='text-sm flex items-center gap-2'>
            <span className='font-medium'>Prioirty:</span>
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
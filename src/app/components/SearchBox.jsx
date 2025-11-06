'use client';

export default function SearchBox({ value, onChange }) {
    return (
        <input
            type='text'
            className='border rounded px-2 py-1 w-full sm:w-64'
            placeholder="Search title or description."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
    );
}
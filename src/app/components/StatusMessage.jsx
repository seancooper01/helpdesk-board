'use client';

export default function StatusMessage({ type = 'info', message = '' }) {
  const color =
    type === 'error'   ? 'text-red-700 bg-red-50 border-red-200' :
    type === 'loading' ? 'text-indigo-700 bg-indigo-50 border-indigo-200' :
                        'text-gray-700 bg-gray-50 border-gray-200';

  return (
    <div className={`border rounded p-3 ${color}`}>
      {message || (type === 'loading' ? 'Loading…' : '—')}
    </div>
  );
}
import React from 'react';

export default function Button({ text, disabled }) {
    return (
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
        >
            {text}
        </button>
    );
}

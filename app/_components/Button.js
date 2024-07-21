"use client";
export default function Button({ text, disabled, onClick }) {
    return (
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
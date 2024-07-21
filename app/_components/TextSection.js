"use client";

export default function TextSection({ texts }) {
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index} className="mb-4">
          {text}
        </p>
      ))}
    </div>
  );
}

"use client";

export default function DonatePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
        <h1 className="text-3xl font-bold mb-4">Donate</h1>
        <p className="text-lg mb-8">Your support helps us continue our mission.</p>
        <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
            Donate Now
        </button>
        </div>
    );
}
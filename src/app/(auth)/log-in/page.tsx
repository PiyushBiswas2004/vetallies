"use client";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="flex flex-col space-y-4 w-full max-w-sm">
            <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
            required
            />
            <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded"
            required
            />
            <button type="submit" className="p-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
            Login
            </button>
        </form>
        </div>
    );
}
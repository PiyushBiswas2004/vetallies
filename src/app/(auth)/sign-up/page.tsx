"use client";

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
            <form className="flex flex-col space-y-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                    required
                />
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
                    Sign Up
                </button>
            </form>
        </div>
    );
}
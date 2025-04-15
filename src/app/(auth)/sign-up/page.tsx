"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/layout/header";   
import Footer from "@/components/layout/footer";
import Head from "next/head";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
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
                <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            Sign up
            </Button>
            <Link href="/log-in">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Log in
            </Button>
            </Link>
            </div>
            </form>
        </div>
        <Footer />
        </div>
        
    );
}
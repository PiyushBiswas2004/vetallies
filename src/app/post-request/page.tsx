"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { PawPrint, Home, Search, DollarSign, Bell, LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostRequest() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
        <h1 className="text-2xl font-bold mb-4">Post a Request</h1>
        <p className="text-lg mb-8">Fill out the form below to post your request.</p>
        <form className="w-full max-w-md space-y-4">
            <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
            </div>
            <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                name="description"
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
            </div>
            <Button
            type="submit"
            className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            >
            Submit Request
            </Button>
        </form>
        </div>
    );
}
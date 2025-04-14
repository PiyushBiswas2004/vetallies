"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { PawPrint, Home, Search, DollarSign, Bell, LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrowsePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Browse Requests</h1>
        <p className="text-lg">Explore various requests from our community.</p>
        </div>
    );
}
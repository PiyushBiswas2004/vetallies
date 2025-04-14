"use client";

import { useState } from "react"
import Link from "next/link"
import { Home, PawPrint, Bell, Search, DollarSign, LogIn, Menu, X } from "lucide-react"
import {Button} from "@/components/ui/button"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <PawPrint className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold ml-2">Stray Haven</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link href="/post-request" className="flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition-colors">
            <PawPrint className="h-4 w-4" />
            <span>Post Request</span>
          </Link>
          <Link href="/browse" className="flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition-colors">
            <Search className="h-4 w-4" />
            <span>Browse Requests</span>
          </Link>
          <Link href="/donate" className="flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition-colors">
            <DollarSign className="h-4 w-4" />
            <span>Donate</span>
          </Link>
          <Link href="/notifications" className="flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition-colors">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-1 hidden md:flex">
            <LogIn className="h-4 w-4" />
            Login
          </Button>

          <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link href="/post-request" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors">
              <PawPrint className="h-4 w-4" />
              <span>Post Request</span>
            </Link>
            <Link href="/browse" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors">
              <Search className="h-4 w-4" />
              <span>Browse Requests</span>
            </Link>
            <Link href="/donate" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Donate</span>
            </Link>
            <Link href="/notifications" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </Link>
            <Button variant="outline" size="sm" className="gap-2 justify-start">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
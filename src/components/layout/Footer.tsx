"use client";

import Link from "next/link"
import { PawPrint, Facebook, Twitter, Instagram, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-6 w-6" />
              <span className="text-xl font-bold text-white">VetAllies</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Connecting animal lovers with strays in need since 2023. Our mission is to ensure every stray finds a loving home.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-teal-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <X className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/post-request" className="opacity-80 hover:opacity-100">
                  Post a Request
                </Link>
              </li>
              <li>
                <Link href="/browse" className="opacity-80 hover:opacity-100">
                  Browse Requests
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/donate" className="opacity-80 hover:opacity-100">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Animal Care Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Emergency Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Partner Organizations
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Volunteer Handbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span>help@strayhaven.org</span>
              </li>
              <li className="opacity-80">
                <p>123 Rescue Lane</p>
                <p>Animal City, AC 12345</p>
              </li>
            </ul>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-100 text-teal-100 hover:bg-teal-800 hover:text-white"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-teal-800 mt-8 pt-8 text-sm opacity-80 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Stray Haven. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/t&c" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
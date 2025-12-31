import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import play from "../assests/playstore.webp";
import app from "../assests/appstore.webp";
import blossend from "../assests/blossend logo.webp";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#f2fbfb] via-[#eefafa] to-[#f7fcfc] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={blossend}
                alt="Blossend Logo"
                width={300}
                height={300}
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              <span className="font-medium">About:</span> OpenMyPro by Blossend
              is a teleservices platform redefining how professionals and
              consumers connect. With instant booking, AI-powered matching, &
              24/7 availability.
            </p>

            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                <Linkedin />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                <Instagram />
              </Link>
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Download</h4>
            <div className="flex flex-col gap-3">
              <Image src={app} alt="App Store" width={160} height={48} />
              <Image src={play} alt="Google Play" width={160} height={48} />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blossend</li>
              <li>Austin, TX</li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                hello@blossend.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2025 Blossend. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

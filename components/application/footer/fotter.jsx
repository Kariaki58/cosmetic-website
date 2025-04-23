"use client";
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/yourstore"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/yourstore"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/yourstore"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://wa.me/yournumber"
    }
  ];

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Skincare", href: "/skincare" },
        { name: "Makeup", href: "/makeup" },
        { name: "Haircare", href: "/haircare" },
        { name: "New Arrivals", href: "/new" },
        { name: "Best Sellers", href: "/bestsellers" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns & Exchanges", href: "/returns" },
        { name: "Track Order", href: "/track" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Ingredients", href: "/ingredients" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-rose-900 to-pink-900 text-pink-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">GlamourGlow</h3>
            <p className="mb-6">Cruelty-free cosmetics crafted with love and science for your radiant beauty.</p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-800 hover:bg-rose-600 transition-colors p-2 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GlamourGlow Cosmetics. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="text-sm hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
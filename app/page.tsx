// app/page.tsx
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Coming Soon!</h1>
        <p className="text-lg mb-8">
          We are working hard to bring you something amazing. Stay tuned for updates!
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a href="#" className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-2 text-xl font-semibold">Subscribe</h2>
          <p className="text-sm opacity-70">Sign up for updates and be the first to know!</p>
        </a>

        <a href="#" className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-2 text-xl font-semibold">Social Media</h2>
          <p className="text-sm opacity-70">Follow us on social media for sneak peeks and announcements.</p>
        </a>

        <a href="#" className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>
          <p className="text-sm opacity-70">Have questions? Reach out to us!</p>
        </a>

        <a href="#" className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-2 text-xl font-semibold">Explore</h2>
          <p className="text-sm opacity-70">Check out our other projects and resources.</p>
        </a>
      </div>

      <div className="mt-16">
        <p className="text-xs opacity-50">
          Powered by{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Next.js
          </a>{' '}
          and deployed with{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </main>
  );
}

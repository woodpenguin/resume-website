import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 w-full text-base">
        <div>
            &copy; {new Date().getFullYear()} Erick. All rights reserved.
        </div>
        <div className="mt-2 space-x-2">
            <a
                href="https://www.linkedin.com/in/erick-orantes-98b820247/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
            >
                LinkedIn
            </a>
            <span>|</span>
            <a
                href="mailto:erickorantes96@gmail.com"
                className="underline hover:text-blue-400"
            >
                Email
            </a>
            <span>|</span>
            <a
                href="https://github.com/woodpenguin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
            >
                GitHub
            </a>
        </div>
    </footer>
      );
}

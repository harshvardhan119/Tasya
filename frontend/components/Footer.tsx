import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060011] text-gray-400 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="font-audiowide text-2xl font-bold tracking-wider text-white mb-4" style={{ textShadow: '0 0 5px #f0f, 0 0 10px #f0f' }}>
            TASYA
          </div>
          <p className="pr-4">The premier marketplace where digital artists and patrons connect, create, and collect.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-white tracking-wider mb-4 text-lg">Marketplace</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Explore</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Artists</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white tracking-wider mb-4 text-lg">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white tracking-wider mb-4 text-lg">Join the Future</h4>
          <p className="mb-4">Get the latest on new artists, drops, and features.</p>
          <div className="flex">
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border-none" />
            <button className="bg-cyan-600 text-black font-bold px-4 py-2 rounded-r-md hover:bg-cyan-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center">
        <p>&copy; {new Date().getFullYear()} Tasya. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Social Icons */}
            <a href="#" aria-label="Twitter"><svg className="h-6 w-6 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
            <a href="#" aria-label="Instagram"><svg className="h-6 w-6 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" aria-label="Discord"><svg className="h-6 w-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8253-.618 1.2292a18.2867 18.2867 0 00-5.4842 0 13.0633 13.0633 0 00-.618-1.2292.0741.0741 0 00-.0785-.0371 19.7913 19.7913 0 00-4.8851 1.5152.069.069 0 00-.0321.0231 20.5335 20.5335 0 00-2.2734 11.5064.069.069 0 00.0321.0231c1.4223.6364 2.9032.9934 4.384 1.1442.0573.0049.1028-.0272.112-.0833-.09-.4853-.1643-.9494-.222-1.4014-.022-.166-.002-.3312.05-.4862a5.9876 5.9876 0 011.632-2.3155.0741.0741 0 01.072-.0049c.25.122.495.249.735.379.06.03.107.094.111.164v.01c-.02.04-.04.08-.06.12-.216.4-.41.815-.582 1.242-.144.36-.21.73-.205 1.106.004.38.08.75.23 1.11.15.365.35.71.59 1.04.24.325.53.635.86 0.92.33.28.7.535 1.1.75.4.22.82.4 1.28.51.46.12.94.18 1.42.18.48 0 .96-.06 1.42-.18.45-.11.87-.29 1.27-.51.4-.215.77-.47 1.1-.75.33-.285.62-.595.86-0.92.24-.33.44-.675.59-1.04.15-.36.22-.73.23-1.11.005-.376-.06-0.746-.205-1.106-.172-.427-.366-.842-.582-1.242-.02-.04-.04-.08-.06-.12v-.01c.004-.07.05-.134.112-.164.24-.13.484-.258.735-.379a.0741.0741 0 01.072.0049 5.9876 5.9876 0 011.632 2.3155c.052.155.072.32.05.4862-.058.452-.132.9161-.222 1.4014a.0741.0741 0 00.112.0833c1.4808-.1508 2.9617-.5078 4.384-1.1442a.069.069 0 00.0321-.0231 20.5335 20.5335 0 00-2.2734-11.5064.069.069 0 00-.0321-.0231z"></path></svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

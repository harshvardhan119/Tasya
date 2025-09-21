import React from 'react';

interface DashboardHeaderProps {
  onLogout: () => void;
  onViewProfile: () => void;
}


const NavIcon: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <button className="relative p-2 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors group" aria-label={label}>
    {children}
    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </span>
  </button>
);

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout , onViewProfile }) => {
  
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0c011e]/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between p-4 h-20">
        <div className="flex items-center gap-4">
          <div className="font-audiowide text-2xl md:text-3xl font-bold tracking-wider text-white" style={{ textShadow: '0 0 5px #f0f, 0 0 10px #f0f' }}>
            TASYA
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
          <div className="w-full max-w-lg relative group">
            <input
              type="search"
              placeholder="Search for art, artists, collections..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-transparent rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/10 focus:border-pink-500/50 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavIcon label="Cloud Sync">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
          </NavIcon>
          <NavIcon label="Upload">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </NavIcon>
           <NavIcon label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
          </NavIcon>
          <NavIcon label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
          </NavIcon>
          <div class="flex gap-4">
  
  <a 
    href="https://tasya-eight.vercel.app" 
    class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
  >
    Explore AI Canvas
  </a>

  
  <a 
    href="https://tasya-7536.vercel.app" 
    class="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out"
  >
    Studio Editor
  </a>
</div>
          <div className="relative group">

            <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 border-2 border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#0c011e] flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
            </button>
            <div className="absolute top-full right-0 mt-3 w-48 bg-[#12022f]/90 backdrop-blur-md border border-pink-500/30 rounded-md shadow-lg py-1 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 transition-all pointer-events-none group-focus-within:pointer-events-auto group-hover:pointer-events-auto z-50">
                <button onClick={onViewProfile} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/30 hover:text-white"> Profile</button>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/30 hover:text-white">Settings</a>
                <button onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/30 hover:text-white">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

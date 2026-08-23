import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          MSA GROUP
        </Link>
        <nav className="flex space-x-6 text-sm font-medium items-center">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About Us</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          
          {/* Ports & Locations Dropdown */}
          <div className="relative group cursor-pointer py-2">
            <span className="hover:text-blue-400">Ports & Countries ▼</span>
            <div className="absolute hidden group-hover:block bg-slate-800 text-white rounded shadow-lg py-2 w-64 left-0">
              <Link href="/ports/douala-cameroon" className="block px-4 py-2 hover:bg-slate-700">Douala (Cameroon)</Link>
              <Link href="/ports/kribi-cameroon" className="block px-4 py-2 hover:bg-slate-700">Kribi (Cameroon)</Link>
              <Link href="/ports/limbe-cameroon" className="block px-4 py-2 hover:bg-slate-700">Limbé (Cameroon)</Link>
              <Link href="/ports/malabo-equatorial-guinea" className="block px-4 py-2 hover:bg-slate-700">Malabo (Equatorial Guinea)</Link>
              <Link href="/ports/bata-equatorial-guinea" className="block px-4 py-2 hover:bg-slate-700">Bata (Equatorial Guinea)</Link>
              <Link href="/ports/port-gentil-gabon" className="block px-4 py-2 hover:bg-slate-700">Port-Gentil (Gabon)</Link>
              <Link href="/ports/pointe-noire-congo" className="block px-4 py-2 hover:bg-slate-700">Pointe-Noire (Congo)</Link>
            </div>
          </div>

          <Link href="/network" className="hover:text-blue-400">Our Network</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
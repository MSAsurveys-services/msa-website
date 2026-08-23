{/* Professional Navigation Bar */}
<nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-20 items-center">
      
      {/* Logo / Brand Name */}
      <a href="/" className="flex items-center space-x-3">
        <img 
          src="/logo.jpg" 
          alt="MSA Surveys & Services Logo" 
          className="h-10 w-auto object-contain"
        />
        <span className="font-extrabold text-xl text-blue-900 tracking-tight">
          MSA <span className="text-blue-600 font-normal text-sm">SURVEYS</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 font-medium text-slate-700">
        <a href="/" className="hover:text-blue-600 transition">Home</a>
        <a href="/about" className="hover:text-blue-600 transition">About</a>
        <a href="/services" className="hover:text-blue-600 transition">Services</a>
        <a href="/ports" className="hover:text-blue-600 transition">Ports</a>
        <a href="/network" className="hover:text-blue-600 transition">MSA Network</a>
        <a href="/gallery" className="hover:text-blue-600 transition">Gallery</a>
        <a href="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition shadow-sm">
          Contact Us
        </a>
      </div>

    </div>
  </div>
</nav>
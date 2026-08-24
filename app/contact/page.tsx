export default function ContactSection() {
  const whatsappNumber = "237622532310"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Operational Headquarters */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Operational Headquarters</h3>
            <p className="text-gray-600 mb-4">
              Get in touch with our team for prompt inspections, surveys, and professional support.
            </p>
            
            <div className="space-y-2 text-gray-700 font-medium">
              <p>
                <span className="font-semibold text-gray-900">Direct Phone:</span><br />
                <a href="tel:+237622532310" className="hover:text-blue-600">+237 622532310</a>
                <span className="text-gray-400 mx-2">/</span>
                <a href="tel:+19432631653" className="hover:text-blue-600">+1 943 263 1653</a>
              </p>
            </div>
          </div>

          {/* Instant Messaging / WhatsApp */}
          <div className="flex flex-col justify-center items-start md:items-center border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Chat</h3>
            <p className="text-gray-600 mb-4 text-sm text-center md:text-left">
              Prefer instant messaging? Reach us directly on WhatsApp.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-lg shadow transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
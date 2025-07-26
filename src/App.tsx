import { ChevronRight, MessageSquare, BarChart3, Target, Star, Users, TrendingUp } from 'lucide-react'

const App = () => {
  const handleStartNow = () => {
    window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank')
  }

  return (
    <div className="min-h-screen bg-[#f1f1f6]">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png" alt="SpyDish Logo" className="h-10" />
            <span className="text-[#4c4c96] text-xl font-bold">SpyDish</span>
          </div>
          <button onClick={handleStartNow} className="bg-[#4c4c96] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#323261] transition-colors">
            Start Now <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#323261] mb-6">Intelligent Restaurant Discovery & Management</h1>
            <p className="text-xl text-gray-600 mb-8">Connect with restaurants, get personalized recommendations, and optimize your dining experience with our AI-powered WhatsApp bot.</p>
            <button onClick={handleStartNow} className="bg-[#4c4c96] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#323261] transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Diners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#323261] mb-12">For Diners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#f1f1f6] hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-[#4c4c96] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
              <p className="text-gray-600">Get personalized restaurant suggestions based on your preferences and past experiences.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#f1f1f6] hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-[#4c4c96] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Featured Menus</h3>
              <p className="text-gray-600">Discover trending dishes and special offers from restaurants near you.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#f1f1f6] hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-[#4c4c96] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Verified Reviews</h3>
              <p className="text-gray-600">Access authentic reviews and ratings from real diners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 bg-[#323261] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">For Restaurants</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
              <BarChart3 className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <p className="text-white/80">Gain insights into competitor pricing and customer preferences.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Marketing Tools</h3>
              <p className="text-white/80">Optimize your campaigns with AI-driven insights and recommendations.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer Insights</h3>
              <p className="text-white/80">Understand your customers better with detailed analytics and heatmaps.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={handleStartNow} className="bg-white text-[#323261] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe to Pro Plan
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#323261] mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-[#f1f1f6]">
              <p className="text-gray-600 mb-4">&quot;SpyDish has transformed how we manage our restaurant. The competitor analysis tools are invaluable for our business.&quot;</p>
              <p className="font-semibold text-[#4c4c96]">- Sarah Chen, Restaurant Owner</p>
            </div>
            <div className="p-6 rounded-xl bg-[#f1f1f6]">
              <p className="text-gray-600 mb-4">&quot;I love how easy it is to discover new restaurants and dishes. The recommendations are always spot-on!&quot;</p>
              <p className="font-semibold text-[#4c4c96]">- Michael Rodriguez, Food Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#323261] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png" alt="SpyDish Logo" className="h-8" />
              <span className="text-lg font-bold">SpyDish</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a href={`mailto:keplerk70@gmail.com`} className="hover:text-gray-300 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-white/60">
            © {new Date().getFullYear()} SpyDish. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

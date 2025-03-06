import React from 'react';
import { ArrowRight, DollarSign, Brain, Wallet, Calendar, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 space-y-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="text-red-600">ANDRE BELLA</span>
          </h1>
          <p className="text-3xl md:text-4xl font-bold">Exposing the Entitlement Mentality</p>
          <p className="text-xl md:text-2xl font-medium text-yellow-500">Earn It or Stay Broke. Your Choice.</p>
          <button className="mt-8 px-8 py-4 bg-red-600 text-white text-xl font-bold uppercase tracking-wider transform hover:scale-105 transition-transform duration-200 flex items-center gap-2 mx-auto">
            Book Now <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Us vs Them Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Us vs. Them: <span className="text-red-600">Pick a Side</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-green-500 rounded-lg">
              <h3 className="text-2xl font-bold text-green-500 mb-4">✓ The Earners</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span>Create their own opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span>Take responsibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span>Build real wealth</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border-2 border-red-500 rounded-lg">
              <h3 className="text-2xl font-bold text-red-500 mb-4">✗ The Entitled</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-500" />
                  <span>Wait for handouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-500" />
                  <span>Blame others</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-500" />
                  <span>Stay broke</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Speaking Topics That Will <span className="text-yellow-500">Change How You See Money</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <Wallet className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">"Your Wallet Is Not a Charity"</h3>
              <p className="text-gray-400">Stop being a financial doormat. Learn how to keep what's yours.</p>
            </div>
            
            <div className="p-8 bg-zinc-900 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <Brain className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">"Entitlement is a Mental Prison"</h3>
              <p className="text-gray-400">Break free from the excuses that keep you broke and powerless.</p>
            </div>
            
            <div className="p-8 bg-zinc-900 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <DollarSign className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">"The Harsh Truth About Money"</h3>
              <p className="text-gray-400">No one owes you anything. Stop expecting, start earning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Face the Truth?</h2>
          <p className="text-xl mb-8">Book Andre for your next event and wake your audience up to reality.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-black text-white text-xl font-bold uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-6 h-6" /> Book Now
            </button>
            <button className="px-8 py-4 bg-white text-black text-xl font-bold uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-6 h-6" /> Contact
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Andre Bella. All rights reserved.</p>
          <p className="text-sm mt-2">Don't click unless you work for your money™</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
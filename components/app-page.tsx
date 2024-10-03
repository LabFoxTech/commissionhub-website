'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const MobileMenu = () => (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
        <Link href="#why-choose-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Why Choose Us</Link>
        <Link href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How it Works</Link>
        <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Download App</Link>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="CommissionHub Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold">CommissionHub</span>
            </div>
            <nav className="hidden md:block justify-end">
              <ul className="flex space-x-6">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link href="#why-choose-us" className="text-gray-600 hover:text-gray-900">Why Choose Us</Link></li>
                <li><Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link></li>
                <li><Link href="#download" className="text-gray-600 hover:text-gray-900">Download App</Link></li>
              </ul>
            </nav>
            <div className="flex items-center md:hidden">
              <button
                className="ml-2 p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && <MobileMenu />}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transparent Commissions, Trustworthy Transactions
              </h1>
              <p className="text-lg mb-6 text-gray-600">
                {"At CommissionHub, we believe in transparency and trust when it comes to buying a home. That's why we've created a platform where buyers and sellers can see everything clearly, especially the commission rates of buyer agents. No hidden fees, no surprise charges—just straightforward, verified information that empowers you to make confident decisions."}
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#353FEC] to-[#C03BD4] text-white px-8 py-3 rounded-full">
                Download CommissionHub Today
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Card className="w-full max-w-md mx-auto overflow-hidden">
                <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/images/property.jpeg)' }}>
                  {/* Background image set above */}
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-sm font-semibold">
                    Available
                  </Badge>
                  <Button size="icon" variant="ghost" className="absolute top-4 right-4 text-white hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <span className="sr-only">Favorite</span>
                  </Button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white mb-1">Crestview Cottage</h3>
                    <p className="text-sm text-white/80">Evergreen Escapes Residence</p>
                  </div>
                  <div className="absolute top-4 right-20 bg-white text-black font-bold px-4 py-2 rounded-full text-2xl">
                    $380K
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="bg-[#FFF8E7] rounded-lg p-3 mb-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B78514]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                      <span className="ml-2 font-semibold text-[#B78514]">{"Buyer's Agency commission"}</span>
                      <span className="ml-auto font-bold text-2xl text-[#B78514]">3%</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="px-3 py-1 bg-white text-black border-gray-300">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> */}
                      3 Bedroom
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 bg-white text-black border-gray-300">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" y1="16" x2="8" y2="16"></line><line x1="14" y1="16" x2="12" y2="16"></line><line x1="11" y1="13" x2="11" y2="16"></line></svg> */}
                      1 Bathroom
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 bg-white text-black border-gray-300">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M10 18V6a4 4 0 0 1 4-4v16"></path><path d="M10 22v-4"></path><path d="M14 22v-4"></path><path d="M18 14v4"></path><path d="M18 22v-4"></path><path d="M22 18h-4"></path><path d="M22 14h-4"></path><path d="M6 18H2"></path><path d="M6 14H2"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M18 2v4"></path><path d="M18 10V6"></path></svg> */}
                      1 Camera
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose CommissionHub Section */}
        <section id="why-choose-us" className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose CommissionHub?</h2>
            <p className="text-center text-gray-600 mb-12">{"It's about finding a place to call home or a space to grow your business"}</p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative">
                  <Image
                    src="/images/client.svg"
                    alt="Family looking at a house"
                    width={500}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{"Know What You're Paying For"}</h3>
                      <p className="text-gray-600">{"Struggle to find ideal With CommissionHub, you can see the commission rates up front before making any decisions. Our platform provides verified commission rates, ensuring you know exactly how much your buyer's agent is earning and how it impacts your transaction online."}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Verified Commission Rates</h3>
                      <p className="text-gray-600">We work closely with agencies and agents to ensure all commission rates are accurate and verified. This means no confusion or last-minute changes - just clear, honest numbers you can trust.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Empowered Home Buyer</h3>
                      <p className="text-gray-600">{"Buying a home is one of the biggest decisions you'll make, and you deserve to know where every dollar goes. Our app makes sure you're in control of the process, from start to finish."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 mb-16">
              Experience unparalleled service and expertise in your real estate journey
            </p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-center gap-10">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3"> {/* Removed h-64 */}
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">Browse Listings</h3>
                <p className="text-gray-500 mt-2">
                  Find your dream home through our user-friendly platform, with all the details you need to make informed decisions.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3"> {/* Removed h-64 */}
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">View Commission Rates</h3>
                <p className="text-gray-500 mt-2">
                  {"View transparent commission rates for your buyer's agent. We ensure these numbers are accurate and updated in real time."}
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-md w-full md:w-1/3"> {/* Removed h-64 */}
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">Work with Confidence</h3>
                <p className="text-gray-500 mt-2">
                  Connect with agents who are committed to transparency and who value your trust. No surprises when it comes to commission fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="relative w-full h-[500px] bg-gradient-to-b from-[#130F0C] to-[#170F09]">
          {/* Content */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-4"> {/* Added md:justify-between */}

            {/* Text Content */}
            <div className="flex flex-col items-start text-left gap-6 md:w-1/2">
              <h1 className="text-5xl font-extrabold text-white">
                Take Control of Your Home-Buying Journey
              </h1>
              <p className="text-lg text-gray-300">
                {"Say goodbye to confusing commission structures and hidden fees. With CommissionHub, you'll always know where your money is going and can make empowered, informed decisions about your real estate transactions."}
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-[#353FEC] to-[#C03BD4] text-white font-semibold py-3 px-6 rounded-full shadow-md"
              >
                Download CommissionHub Today
              </a>
            </div>

          </div>
          {/* iPhone Mockup */}
          <div className="absolute md:w-1/2 items-end justify-center hidden md:flex mt-auto bottom-0 right-0">
            {/* <div className="w-[400px] h-[800px] overflow-hidden"> */}
              <Image
                src="/images/mobile-app.svg"
                alt="iPhone Mockup"
                // layout="responsive" // Adjust layout as needed
                width={400} // Set appropriate width
                height={800} // Set appropriate height
              />
            {/* </div> */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0">&copy; Copyright CommissionHub 2024</p>
            <div>
              <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
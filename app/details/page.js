'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Details() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const agenda = [
    { time: '6:00 PM', title: 'Registration & Welcome', description: 'Check-in, networking, and light refreshments', type: 'networking' },
    { time: '6:30 PM', title: 'Opening Keynote', speaker: 'Dr. Sarah Chen', description: 'The Future of AI: Beyond the Hype', type: 'talk' },
    { time: '7:30 PM', title: 'Panel Discussion', speaker: 'Industry Leaders', description: 'Innovation in the Age of Rapid Change', type: 'panel' },
    { time: '8:30 PM', title: 'Break & Networking', description: 'Refreshments and networking opportunity', type: 'networking' },
    { time: '9:00 PM', title: 'Workshop Sessions', speaker: 'Multiple Speakers', description: 'Choose from hands-on workshops on cutting-edge topics', type: 'workshop' },
    { time: '10:00 PM', title: 'Closing Remarks', speaker: 'Event Organizers', description: 'Summary and future announcements', type: 'talk' },
  ];

  const speakers = [
    { name: 'Dr. Sarah Chen', role: 'AI Researcher', company: 'Tech Corp', bio: 'Leading expert in artificial intelligence with 15+ years of experience.', avatar: '👩‍💼' },
    { name: 'Michael Torres', role: 'Innovation Director', company: 'StartupXYZ', bio: 'Serial entrepreneur and innovation strategist.', avatar: '👨‍💻' },
    { name: 'Dr. Priya Patel', role: 'Tech Futurist', company: 'Future Labs', bio: 'Thought leader in emerging technologies and digital transformation.', avatar: '👩‍🔬' },
    { name: 'James Wilson', role: 'CEO', company: 'NextGen Inc', bio: 'Building the next generation of enterprise solutions.', avatar: '👨‍💼' },
  ];

  const topics = [
    'Artificial Intelligence & Machine Learning',
    'Blockchain & Web3 Technologies',
    'Sustainable Tech Solutions',
    'Cybersecurity & Data Privacy',
    'Cloud Computing & Infrastructure',
    'Human-Centered Design',
  ];

  const faqs = [
    {
      question: 'What should I bring to the event?',
      answer: 'Just bring yourself and a positive attitude! We\'ll provide refreshments, networking materials, and all workshop materials. A notebook and pen might be helpful for taking notes during sessions.'
    },
    {
      question: 'Is parking available at the venue?',
      answer: 'Yes, parking is available at the venue. We also recommend using public transportation or ride-sharing services as parking can fill up quickly.'
    },
    {
      question: 'Can I get a refund if I can\'t attend?',
      answer: 'Full refunds are available up to 7 days before the event. After that, we can transfer your ticket to someone else or provide a 50% credit for future events.'
    },
    {
      question: 'Will the sessions be recorded?',
      answer: 'Keynote sessions will be recorded and made available to attendees after the event. Workshop sessions will not be recorded to encourage active participation.'
    },
    {
      question: 'Are there networking opportunities?',
      answer: 'Absolutely! We\'ve built in multiple networking breaks throughout the evening, plus a dedicated networking session. This is a great opportunity to connect with industry leaders and fellow attendees.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Event Details</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Everything you need to know about Startup Founders Meetup 2026
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">About the Event</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Tech Innovation Summit 2026 is where visionaries connect, ideas flourish, and the future of technology unfolds. 
                Join us for an evening of groundbreaking insights, hands-on workshops, and unparalleled networking opportunities 
                with industry leaders and innovators.
              </p>
              <p>
                Our mission is to bring together the brightest minds in technology to explore emerging trends, share knowledge, 
                and inspire the next generation of innovation. Whether you're a seasoned professional or just starting your journey 
                in tech, this event offers something valuable for everyone.
              </p>
              <p>
                Attendees can expect engaging keynote presentations, interactive panel discussions, hands-on workshops, and multiple 
                networking opportunities. You'll leave with new insights, valuable connections, and actionable strategies to apply 
                in your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda/Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Event Agenda</h2>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>
            
            <div className="space-y-12">
              {agenda.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === 'talk' ? 'bg-purple-100 text-purple-700' :
                          item.type === 'panel' ? 'bg-blue-100 text-blue-700' :
                          item.type === 'workshop' ? 'bg-cyan-100 text-cyan-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.type.toUpperCase()}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">{item.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      {item.speaker && (
                        <p className="text-purple-600 font-semibold mb-2">{item.speaker}</p>
                      )}
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {agenda.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'talk' ? 'bg-purple-100 text-purple-700' :
                    item.type === 'panel' ? 'bg-blue-100 text-blue-700' :
                    item.type === 'workshop' ? 'bg-cyan-100 text-cyan-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-xl font-bold text-gray-900">{item.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.speaker && (
                  <p className="text-purple-600 font-semibold mb-2">{item.speaker}</p>
                )}
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-4">{speaker.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{speaker.role}</p>
                <p className="text-sm text-gray-600 mb-3">{speaker.company}</p>
                <p className="text-sm text-gray-600">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="text-gray-800 font-medium">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Key Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📅 Date & Time</h3>
                  <p className="text-gray-600">December 31, 2026</p>
                  <p className="text-gray-600">6:00 PM - 11:00 PM PST</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📍 Location</h3>
                  <p className="text-gray-600">San Francisco Convention Center</p>
                  <p className="text-gray-600">747 Howard Street, San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">💰 Pricing</h3>
                  <p className="text-gray-600">Early Bird: $99 (until Nov 15)</p>
                  <p className="text-gray-600">General Admission: $149</p>
                  <p className="text-gray-600">VIP: $249 (includes dinner & exclusive access)</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">✨ What's Included</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• All keynote sessions</li>
                    <li>• Access to workshops</li>
                    <li>• Networking sessions</li>
                    <li>• Refreshments & light dinner</li>
                    <li>• Event materials & swag bag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-600 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Secure your spot at Tech Innovation Summit 2026 and be part of an unforgettable experience.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}


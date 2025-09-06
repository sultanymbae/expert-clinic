import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О клинике Expert Clinic
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Expert Clinic — это современный медицинский центр в Бишкеке, специализирующийся на 
              ультразвуковой диагностике, ведении беременности и гинекологических услугах. 
              Мы используем оборудование экспертного класса и предоставляем медицинскую помощь 
              высочайшего качества.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <h3 className="font-semibold text-gray-900">15+ лет</h3>
                </div>
                <p className="text-sm text-gray-600">опыта работы</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <h3 className="font-semibold text-gray-900">10,000+</h3>
                </div>
                <p className="text-sm text-gray-600">довольных пациентов</p>
              </div>
            </div>

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition-colors">
              Записаться на консультацию
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
              alt="Medical clinic interior"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
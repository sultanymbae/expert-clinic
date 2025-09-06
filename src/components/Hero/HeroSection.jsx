import React from 'react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Экспертная медицинская помощь в Бишкеке
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              УЗИ диагностика, ведение беременности и гинекология от опытных специалистов 
              на оборудовании экспертного класса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition-colors">
                Записаться на прием
              </button>
              <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg transition-colors">
                Узнать больше
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 text-center border border-blue-200 bg-white/80 rounded-lg">
                <svg className="w-8 h-8 text-blue-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <p className="text-sm font-medium text-gray-700">15+ лет опыта</p>
              </div>
              <div className="p-6 text-center border border-blue-200 bg-white/80 rounded-lg">
                <svg className="w-8 h-8 text-blue-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p className="text-sm font-medium text-gray-700">Современное оборудование</p>
              </div>
              <div className="p-6 text-center border border-blue-200 bg-white/80 rounded-lg">
                <svg className="w-8 h-8 text-blue-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <p className="text-sm font-medium text-gray-700">10000+ пациентов</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-600/20 rounded-lg transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
              alt="Modern medical equipment"
              className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
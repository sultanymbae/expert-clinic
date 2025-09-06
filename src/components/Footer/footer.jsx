import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Expert Clinic</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Современный медицинский центр в Бишкеке. УЗИ диагностика, 
              ведение беременности и гинекология на оборудовании экспертного класса.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.119 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">УЗИ диагностика</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Ведение беременности</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Гинекология</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Консультации</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Информация</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О клинике</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-white transition-colors">Врачи</a></li>
              <li><a href="#prices" className="text-gray-300 hover:text-white transition-colors">Цены</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-300">г. Бишкек, ул. Медицинская, 123</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-gray-300">+996 (312) 123-456</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span className="text-gray-300">Пн-Пт: 8:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Expert Clinic. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
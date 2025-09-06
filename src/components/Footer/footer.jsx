import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6">Expert Clinic</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Современная медицинская клиника в Бишкеке, специализирующаяся на УЗИ диагностике, 
              ведении беременности и гинекологии. Мы используем оборудование экспертного класса 
              и предоставляем услуги высочайшего качества.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    г. Бишкек, ул. Токтогула 123<br />
                    бизнес-центр "Medical Plaza", 3 этаж
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+996 (312) 123-456</p>
                  <p className="text-gray-400 text-sm">WhatsApp: +996 (555) 123-456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@expertclinic.kg</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Часы работы</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Пн-Пт: 8:00 - 20:00</p>
                  <p className="text-gray-300">Сб: 9:00 - 18:00</p>
                  <p className="text-gray-300">Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-bold mb-3">Быстрые ссылки</h5>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors">
                  Услуги
                </a>
                <a href="#doctors" className="block text-gray-400 hover:text-primary transition-colors">
                  Врачи
                </a>
                <a href="#prices" className="block text-gray-400 hover:text-primary transition-colors">
                  Цены
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Expert Clinic. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Лицензии
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
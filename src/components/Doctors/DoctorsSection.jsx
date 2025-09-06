import React from 'react';

export function DoctorsSection() {
  const doctors = [
    {
      name: "Айжан Кадырова",
      specialty: "Врач УЗИ диагностики",
      experience: "15 лет опыта",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      qualifications: ["Высшая категория", "Эксперт УЗИ", "Кандидат мед. наук"]
    },
    {
      name: "Гульнара Усенова",
      specialty: "Врач-гинеколог",
      experience: "12 лет опыта",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      qualifications: ["Высшая категория", "Акушер-гинеколог", "Специалист по ведению беременности"]
    },
    {
      name: "Жанна Сатыбалдиева",
      specialty: "Врач УЗИ диагностики",
      experience: "10 лет опыта",
      photo: "https://images.unsplash.com/photo-1594824475317-95bb3c4c4aa1?auto=format&fit=crop&w=400&q=80",
      qualifications: ["Первая категория", "УЗИ в гинекологии", "Пренатальная диагностика"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши врачи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Опытные специалисты с высшим медицинским образованием и многолетней практикой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-700 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience}</p>
                <div className="space-y-2">
                  {doctor.qualifications.map((qualification, qualIndex) => (
                    <span key={qualIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      {qualification}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
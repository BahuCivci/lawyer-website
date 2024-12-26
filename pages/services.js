import Link from 'next/link';

export default function Services() {
  const services = [
    { id: 1, title: 'Ceza Hukuku', description: 'Ceza davalarında uzman desteği.', link: '/services/ceza-hukuku' },
    { id: 2, title: 'Aile Hukuku', description: 'Boşanma ve velayet davalarında profesyonel çözümler.', link: '/services/aile-hukuku' },
    { id: 3, title: 'Miras Hukuku', description: 'Miras planlaması ve davalarınız için güvenilir rehberlik.', link: '/services/miras-hukuku' },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link href={service.link} className="text-blue-500 hover:underline">
              Daha Fazla Bilgi
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

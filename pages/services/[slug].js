import { useRouter } from 'next/router';

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const details = {
    'ceza-hukuku': {
      title: 'Ceza Hukuku',
      description: 'Ceza davalarında uzman desteği ile yanınızdayız.',
    },
    'aile-hukuku': {
      title: 'Aile Hukuku',
      description: 'Boşanma, velayet ve diğer aile hukuku konularında destek.',
    },
    'miras-hukuku': {
      title: 'Miras Hukuku',
      description: 'Miras planlaması ve davalar için güvenilir danışmanlık.',
    },
  };

  const service = details[slug];

  if (!service) return <p>Hizmet bulunamadı.</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.description}</p>
    </div>
  );
}
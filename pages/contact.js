import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'İsim gerekli.';
    if (!formData.email) tempErrors.email = 'E-posta gerekli.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Geçerli bir e-posta girin.';
    if (!formData.message) tempErrors.message = 'Mesaj gerekli.';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      setSuccessMessage('Mesajınız başarıyla gönderildi!');
      setErrors({});
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(tempErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">İletişim</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">İsim</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">E-posta</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Mesaj</label>
          <textarea
            className="w-full p-2 border rounded"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Gönder</button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
}
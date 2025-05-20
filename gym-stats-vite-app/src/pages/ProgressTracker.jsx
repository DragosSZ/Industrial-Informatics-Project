import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function ProgressTracker() {
  const [entries, setEntries] = useState([]);
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [weight, setWeight] = useState('');
  const [photos, setPhotos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filterDays, setFilterDays] = useState(0);
  const [zoomPhoto, setZoomPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photos.length > 0 && photos[0] instanceof File) {
      const readers = photos.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then((images) => {
        const newEntry = { date, weight: parseFloat(weight), photos: images };
        const updated = [...entries];
        if (editingIndex !== null) {
          updated[editingIndex] = newEntry;
          setEditingIndex(null);
        } else {
          updated.push(newEntry);
        }
        setEntries(updated);
        setWeight('');
        setDate(today);
        setPhotos([]);
      });
    } else {
      const newEntry = { date, weight: parseFloat(weight), photos };
      if (editingIndex !== null) {
        const updated = [...entries];
        updated[editingIndex] = newEntry;
        setEntries(updated);
        setEditingIndex(null);
      } else {
        setEntries([...entries, newEntry]);
      }
      setWeight('');
      setDate(today);
      setPhotos([]);
    }
  };

  const sortedEntries = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));

  const now = new Date();
  const filteredEntries = sortedEntries.filter(entry => {
    if (filterDays === 0) return true;
    const entryDate = new Date(entry.date);
    const diffTime = now - entryDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= filterDays;
  });

  const data = {
    labels: filteredEntries.map(e => e.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: filteredEntries.map(e => e.weight),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="min-h-screen p-6 text-white bg-neutral-900">
      <h1 className="text-2xl font-bold mb-4">Progress Tracker</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6 bg-neutral-800 p-4 rounded">
        <div>
          <label className="block mb-1 text-sm">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 bg-neutral-700 rounded text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            required
            className="w-full p-2 bg-neutral-700 rounded text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Photos (optional, up to 6)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const selected = Array.from(e.target.files).slice(0, 6);
              setPhotos(selected.length > 0 ? selected : photos);
            }}
            className="w-full p-2 bg-neutral-700 rounded text-white"
          />
        </div>
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          {editingIndex !== null ? 'Update Entry' : 'Add Entry'}
        </button>
      </form>

      <div className="mb-4 flex flex-wrap gap-2">
        {[0, 30, 60, 90, 120, 180, 365].map(days => (
          <button
            key={days}
            onClick={() => setFilterDays(days)}
            className={`px-3 py-1 rounded ${
              filterDays === days ? 'bg-blue-600' : 'bg-gray-700'
            } hover:bg-blue-500 text-sm`}
          >
            {days === 0 ? 'All' : days <= 90 ? `${days} Days` : `${Math.round(days / 30)} Months`}
          </button>
        ))}
      </div>

      <div className="bg-neutral-800 p-4 rounded">
        <Line data={data} />
      </div>

      <ul className="mt-6 space-y-2">
        {entries.map((entry, index) => (
          <li key={index} className="flex flex-col bg-neutral-800 p-2 rounded">
            <div className="flex justify-between items-center">
              <span>{entry.date} - {entry.weight} kg</span>
              <div className="flex gap-2 text-sm">
                <button onClick={() => {
                  setEditingIndex(index);
                  setWeight(entry.weight);
                  setDate(entry.date);
                  setPhotos(entry.photos || []);
                }} className="text-blue-400 hover:underline">Edit</button>
                <button onClick={() => {
                  const updated = entries.filter((_, i) => i !== index);
                  setEntries(updated);
                }} className="text-red-400 hover:underline">Delete</button>
              </div>
            </div>
            {entry.photos?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {entry.photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Check-in"
                    className="w-24 h-24 object-cover rounded cursor-pointer"
                    onClick={() => setZoomPhoto(img)}
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {zoomPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setZoomPhoto(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ×
            </button>
            <img src={zoomPhoto} alt="Zoom" className="max-w-full max-h-[90vh] rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
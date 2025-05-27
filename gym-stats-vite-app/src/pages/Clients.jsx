import { useState } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    age: '',
    height: '',
    startDate: '',
    type: 'online',
    startingWeight: '',
  });
  const [expandedClients, setExpandedClients] = useState([]);
  const [showNewClientForm, setShowNewClientForm] = useState(false);

  const handleAddClient = () => {
    if (!newClient.email || !newClient.password) return;
    const id = Date.now();
    setClients([...clients, { id, ...newClient, checkIns: [], goals: {} }]);
    setNewClient({
      email: '',
      password: '',
      name: '',
      surname: '',
      age: '',
      height: '',
      startDate: '',
      type: 'online',
      startingWeight: '',
    });
  };

  const updateClientGoals = (id, newGoals) => {
    setClients(prev =>
      prev.map(client =>
        client.id === id ? { ...client, goals: newGoals } : client
      )
    );
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-600 text-white p-6 flex flex-col gap-6">

        {/* Glassy Header Section at the top */}
        <div className="w-full max-w-20xl mx-auto px-6 pt-1">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg px-6 py-4 flex items-center justify-start">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mr-auto">
              Trainer Clients
            </h1>
            <button
              onClick={() => setShowNewClientForm(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition duration-200 transform hover:scale-102 shadow-xl ring-1 ring-white/10"
            >
              + Add Client
            </button>
          </div>
        </div>

        {/* Modal for adding new client */}
        {showNewClientForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-neutral-800 p-6 rounded-lg w-full max-w-md space-y-4 text-sm shadow-lg">
              <button
                onClick={() => setShowNewClientForm(false)}
                className="absolute top-2 right-3 text-white text-xl hover:text-red-400"
              >
                ×
              </button>
              <h2 className="text-lg font-semibold">Add New Client</h2>
              <input
                type="email"
                placeholder="Client Email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={newClient.password}
                onChange={(e) => setNewClient({ ...newClient, password: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="First Name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newClient.surname}
                onChange={(e) => setNewClient({ ...newClient, surname: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="number"
                placeholder="Age"
                value={newClient.age}
                onChange={(e) => setNewClient({ ...newClient, age: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="number"
                placeholder="Height (cm)"
                value={newClient.height}
                onChange={(e) => setNewClient({ ...newClient, height: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="number"
                placeholder="Starting Weight (kg)"
                value={newClient.startingWeight}
                onChange={(e) => setNewClient({ ...newClient, startingWeight: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={newClient.startDate}
                onChange={(e) => setNewClient({ ...newClient, startDate: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <select
                value={newClient.type}
                onChange={(e) => setNewClient({ ...newClient, type: e.target.value })}
                className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              >
                <option value="online">Online</option>
                <option value="onsite">Onsite</option>
              </select>
              <button
                onClick={() => { handleAddClient(); setShowNewClientForm(false); }}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Client
              </button>
            </div>
          </div>
        )}

        {/* Client list below header and modal */}
        <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl w-full max-w-6xl p-6 mx-auto space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{client.name} {client.surname}</span>
              <button
                onClick={() =>
                  setExpandedClients(prev =>
                    prev.includes(client.id)
                      ? prev.filter(id => id !== client.id)
                      : [...prev, client.id]
                  )
                }
              >
                {expandedClients.includes(client.id) ? 'Hide' : 'View'}
              </button>
            </div>
            {expandedClients.includes(client.id) && (
              <div className="mt-4 space-y-3">
                <h3 className="text-sm font-medium">Latest Check-Ins</h3>
                {client.checkIns.length === 0 ? (
                  <p className="text-gray-400 text-sm">No check-ins yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {client.checkIns.map((entry, i) => (
                      <li key={i}>
                        <p className="text-sm">{entry.date} - {entry.weight} kg</p>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {entry.photos?.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt="Check-in"
                              className="w-20 h-20 object-cover rounded"
                            />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div>
                  <h4 className="text-sm font-medium mt-4">Meal Goals</h4>
                  {(() => {
                    // Calculate macro grams from kcal if needed
                    const kcal = parseFloat(client.goals.kcal || 0);
                    const proteinG =
                      client.goals.protein !== undefined && client.goals.protein !== ''
                        ? client.goals.protein
                        : kcal
                        ? ((kcal * 0.20) / 4).toFixed(1)
                        : '';
                    const carbsG =
                      client.goals.carbs !== undefined && client.goals.carbs !== ''
                        ? client.goals.carbs
                        : kcal
                        ? ((kcal * 0.50) / 4).toFixed(1)
                        : '';
                    const fatG =
                      client.goals.fat !== undefined && client.goals.fat !== ''
                        ? client.goals.fat
                        : kcal
                        ? ((kcal * 0.30) / 9).toFixed(1)
                        : '';
                    return (
                      <>
                        <div>
                          <label className="block text-sm mb-1">Protein (g)</label>
                          <input
                            type="text"
                            value={proteinG}
                            onChange={(e) =>
                              updateClientGoals(client.id, {
                                ...client.goals,
                                protein: e.target.value,
                              })
                            }
                            className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Carbs (g)</label>
                          <input
                            type="text"
                            value={carbsG}
                            onChange={(e) =>
                              updateClientGoals(client.id, {
                                ...client.goals,
                                carbs: e.target.value,
                              })
                            }
                            className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Fat (g)</label>
                          <input
                            type="text"
                            value={fatG}
                            onChange={(e) =>
                              updateClientGoals(client.id, {
                                ...client.goals,
                                fat: e.target.value,
                              })
                            }
                            className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Estimated Kcal: {(() => {
                            const p = parseFloat(proteinG) || 0;
                            const c = parseFloat(carbsG) || 0;
                            const f = parseFloat(fatG) || 0;
                            return Math.round(p * 4 + c * 4 + f * 9);
                          })()}
                        </p>
                        <button
                          onClick={() => console.log('Saving macros for', client.name)}
                          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl font-semibold transition duration-200 transform hover:scale-102 shadow-xl ring-1 ring-white/10"
                        >
                          Save Macros
                        </button>
                      </>
                    );
                  })()}
                </div>

                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium">Client Info</h4>
                  <div>
                    <label className="block text-sm mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={client.name}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, name: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={client.surname}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, surname: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Age</label>
                    <input
                      type="number"
                      placeholder="Age"
                      value={client.age}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, age: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Height (cm)</label>
                    <input
                      type="number"
                      placeholder="Height"
                      value={client.height}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, height: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Start Date</label>
                    <input
                      type="date"
                      placeholder="Start Date"
                      value={client.startDate}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, startDate: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Starting Weight (kg)</label>
                    <input
                      type="number"
                      placeholder="Starting Weight"
                      value={client.startingWeight}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, startingWeight: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Type</label>
                    <select
                      value={client.type}
                      onChange={(e) =>
                        setClients(prev =>
                          prev.map(c =>
                            c.id === client.id ? { ...c, type: e.target.value } : c
                          )
                        )
                      }
                      className="w-full p-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    >
                      <option value="online">Online</option>
                      <option value="onsite">Onsite</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setClients(prev => prev.filter(c => c.id !== client.id))}
                    className="bg-red-600 mt-4 px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete Client
                  </button>
                </div>
              </div>
            )}
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
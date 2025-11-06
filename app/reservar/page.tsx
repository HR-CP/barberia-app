"use client";
import { useState } from "react";

const servicios = [
  { id: "corte", nombre: "Corte de cabello", duracion: 30 },
  { id: "barba", nombre: "Arreglo de barba", duracion: 20 },
];
const barberos = [
  { id: "alex", nombre: "Alex" },
  { id: "leo", nombre: "Leo" },
];

export default function ReservarPage() {
  const [servicio, setServicio] = useState(servicios[0].id);
  const [barbero, setBarbero] = useState(barberos[0].id);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [ok, setOk] = useState(false);

  const sName = servicios.find((s) => s.id === servicio)?.nombre ?? "";
  const bName = barberos.find((b) => b.id === barbero)?.nombre ?? "";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOk(true);
  }

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold">Reservar cita</h1>

      {!ok && (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Servicio</label>
            <select
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            >
              {servicios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nombre} · {s.duracion} min
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Barbero</label>
            <select
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
              value={barbero}
              onChange={(e) => setBarbero(e.target.value)}
            >
              {barberos.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Día</label>
              <input
                type="date"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Hora</label>
              <input
                type="time"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Continuar
          </button>
        </form>
      )}

      {ok && (
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="font-medium mb-2">Resumen</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <div>Servicio: {sName}</div>
            <div>Barbero: {bName}</div>
            <div>Fecha: {fecha}</div>
            <div>Hora: {hora}</div>
          </div>
        </div>
      )}
    </div>
  );
}

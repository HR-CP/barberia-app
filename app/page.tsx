"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const servicios = [
    { id: "corte", nombre: "Corte de cabello", duracion: 30 },
    { id: "barba", nombre: "Arreglo de barba", duracion: 20 },
    { id: "corte-barba", nombre: "Corte + Barba", duracion: 50 },
  ];
  const barberos = [
    { id: "alex", nombre: "Alex" },
    { id: "leo", nombre: "Leo" },
  ];

  const [servicio, setServicio] = useState(servicios[0].id);
  const [barbero, setBarbero] = useState(barberos[0].id);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const sName = servicios.find((s) => s.id === servicio)?.nombre ?? "";
  const bName = barberos.find((b) => b.id === barbero)?.nombre ?? "";

  function confirmar(e: React.FormEvent) {
    e.preventDefault();
    setConfirmado(true);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Barber: tu corte, a tu hora</h1>
        <p className="text-gray-600 max-w-2xl">
          Diseño claro: blanco predominante con detalles sutiles azul y rojo tipo faro.
        </p>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-5">
          <h2 className="text-lg font-semibold mb-4">Reservar</h2>
          <form onSubmit={confirmar} className="space-y-4">
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
              Confirmar
            </button>
          </form>
        </div>

        <div className="rounded-lg border border-gray-200 p-5 bg-white">
          <h2 className="text-lg font-semibold mb-4">Resumen</h2>
          {!confirmado && <p className="text-gray-600 text-sm">Completa el formulario y confirma.</p>}
          {confirmado && (
            <div className="space-y-2 text-sm text-gray-800">
              <div><span className="font-medium">Servicio:</span> {sName}</div>
              <div><span className="font-medium">Barbero:</span> {bName}</div>
              <div><span className="font-medium">Fecha:</span> {fecha}</div>
              <div><span className="font-medium">Hora:</span> {hora}</div>
              <p className="mt-3 text-green-700">
                Reserva registrada en esta vista (sin guardado permanente). Luego podemos activarlo.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="mt-10 h-1 w-full bg-gradient-to-r from-red-600 via-white to-blue-700 rounded" />

      <section className="mt-8 text-sm text-gray-600">
        <p>
          ¿Quieres que esto guarde “de verdad”? Cuando quieras, lo conectamos a una base de datos o pagos Nequi.
        </p>
        <p className="mt-2">
          <Link href="/reservar" className="text-blue-700 hover:underline">
            También puedes abrir la página de “Reservar” separada
          </Link>
          , si la tienes creada.
        </p>
      </section>
    </main>
  );
}

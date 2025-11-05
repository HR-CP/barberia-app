import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold">Tu corte, a tu hora</h1>
      <p className="text-gray-600 max-w-2xl">
        Reserva tu cita con nuestros barberos. Blanco como base, acentos azules y rojos sutiles.
      </p>
      <div className="flex gap-3">
        <Link
          href="/reservar"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
        >
          Reservar ahora
        </Link>
      </div>
    </section>
  );
}

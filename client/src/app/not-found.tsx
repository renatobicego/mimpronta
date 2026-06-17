import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full h-screen text-negro">
      <h1 className="title-size">404: No encontrada</h1>
      <p className="paragraph-size">No pudimos encontrar la ruta requerida</p>
      <Link href="/" className="font-title btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}

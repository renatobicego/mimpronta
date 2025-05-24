import Link from "next/link";

 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center text-negro'>
      <h2>404: No encontrada</h2>
      <p>No pudimos encontrar la ruta requerida</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  )
}
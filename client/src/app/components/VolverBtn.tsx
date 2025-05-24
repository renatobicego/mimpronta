"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const VolverBtn = () => {
  const router = useRouter();
  return (
    <button onClick={router.back} className="flex items-center gap-2 mb-4">
      <Image
        alt="Volver icono"
        className="rotate-180 mt-0.5"
        width={20}
        height={20}
        src={"/icons/chevronB.png"}
      />
      Volver
    </button>
  );
};

export default VolverBtn;

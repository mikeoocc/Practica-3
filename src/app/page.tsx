'use client'

import { useRouter } from "next/navigation";
import "./page.css"


export default function Home() {

  const router = useRouter()

  return (
    <div className="contenedorPrincipal">
      <div className="contenedorInterior">
        <h1>iMusic</h1>
          <div className="contenedorEnlaces">
            <h2 onClick={() => router.push("/albums")}>Búsca álbumes por artista</h2>
            <h2 onClick={() => router.push("/favoritos")}>Mira tus álbumes favoritos!</h2>
        </div>
      </div>
    </div>
  );
}

"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useAdmin } from "../adminContext";
import FormPost from "./[...formMode]/Form/FormPost";

const AdminValidation = ({children} : {children: React.ReactNode}) => {
    const { isAdmin, setAdmin } = useAdmin();
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
  
    useEffect(() => {
        // Redirect to home if not an admin and localStorage isAdmin is false
        if (typeof window !== "undefined") {
            const storedAdmin = localStorage.getItem('isAdmin');
            const isAdminFromStorage = storedAdmin ? JSON.parse(storedAdmin) : false;
          
            if (!isAdminFromStorage && storedAdmin !== null) {
              router.push('/')
            }
        }
      }, [isAdmin, router]);

    const handleLogin = () => {
        // Replace this with your actual authentication logic
        const correctPassword = process.env.NEXT_PUBLIC_BLOG_PASSWORD; // Change this to your actual password
   
        if (password === correctPassword) {
            setAdmin(true);
        } else {
        // Redirect back if the password is incorrect
            router.push('/');
        }
    };

    if (!isAdmin) {
        return (
            <div className="pt-28 size-section h-screen flex items-center flex-col gap-4 justify-start">
                <h4 className="phrase-size font-semibold mt-[20vh]">Panel de Administrador Blog</h4>
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn-primary-sm" onClick={handleLogin}>Ingresar</button>
            </div>
        );
    }else{
        return children
    }

}

export default AdminValidation
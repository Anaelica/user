import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
      <div className="bg-gray-100 text-black h-screen flex items-center justify-center">
      <div className="bg-white w-4xl h-137.5 font-bold overflow-hidden flex">
        {/* Imagem da Esquerda do Layout */}
        <div className="w-1/2">
          <img
            src="public/page-login.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fomrulario de Login do usuario  */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-sm flex flex-col items-center">            
            {/* Logo */}
            <img
              src="https://i.pinimg.com/1200x/79/a4/a6/79a4a63184f7efbc6c148ad552e60a75.jpg"
              alt="Logo"
              className="w-16 h-16  object-cover"
            />

            {/* Texto */}
            <h1 className="text-gray-900 font-bold m-6">
              <span className="text-lg">
                Seja Bem-Vindo!
              </span>

              <span className="text-base text-gray-800 ml-2 font-bold">
                Entre na sua conta.
              </span>
            </h1>

            {/* Formulário */}
            <form className="w-full flex flex-col gap-1">

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-800">
                  Email
                </label>
                <div className="relative text-gray-800">
                  <img
                    src="https://i.pinimg.com/1200x/6a/b2/87/6ab287f4d66184c47016de318390d9ec.jpg"
                    alt=""
                    className="w-8 h-8 object-cover absolute left-1 top-1/2 -translate-y-1/2 rounded-full"
                  />

                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className=" w-full h-12 rounded-lg pl-10 outline-none text-black/80 placeholder:text-base border-2 border-gray-400/40 focus:border-blue-900/50 transition"
                  />
                </div>

                <div className="relative text-gray-800">
                  <label className="text-sm text-gray-800">
                  Senha
                </label>
                  <FaLock className="absolute left-3 top-14 -translate-y-1/2 text-blue-700 text-lg" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="*********"
                    className=" w-full h-12 rounded-lg mt-2 pl-10 outline-none text-gray-800 placeholder:text-sm border-2 border-gray-400/40 focus:border-blue-900/50 transition"
                  />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="
                        absolute
                        right-3
                        top-14
                        -translate-y-1/2
                        text-gray-600
                      "
                    >
                      {showPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>
              </div>
                          
            </form> 
             
            <div className="flex items-center gap-3 w-full mt-6 mb-4  ">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500 font-medium">
                OU
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Sessão de botões pra login */}
            <div className="flex items-center gap-4">
              <div className="w-8 cursor-pointer">
                <img src="https://i.pinimg.com/1200x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg" alt="" />
              </div>
              <div className="w-10 cursor-pointer">
                <img src="https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg" alt="" />
              </div>
              <div className="w-10 cursor-pointer">
                <img src="https://i.pinimg.com/1200x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg" alt="" />
              </div>
            </div>

            {/* sessão para se cadrastar */}
            <div className="flex items-center mt-3">
              <span className="text-gray-800 text-sm">
                Não tem uma conta ? 
              </span>
              <a className="pl-2 text-blue-800 text-sm"
              href="">Cadastre-se</a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
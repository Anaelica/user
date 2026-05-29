export default function App() {
  return (
      <div className="bg-white text-black h-screen flex items-center justify-center">
      <div className="text-4xl bg-amber-300 w-4xl min-h-96 font-bold overflow-hidden flex">
        {/* Imagem da Esquerda do Layout */}
        <div className="w-1/2">
          <img
            src="https://i.pinimg.com/736x/6c/65/d0/6c65d089cb8f789ea8690812ee2484db.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fomrulario de Login do usuario  */}
        <div className="w-1/2 bg-red-800 flex items-center justify-center p-10">
  
          <div className="w-full max-w-sm flex flex-col items-center gap-6">
            
            {/* Logo */}
            <img
              src="https://i.pinimg.com/1200x/79/a4/a6/79a4a63184f7efbc6c148ad552e60a75.jpg"
              alt="Logo"
              className="w-16 h-16  object-cover"
            />

            {/* Texto */}
            <h1 className="text-white font-bold">
              <span className="text-lg">
                Seja Bem-Vindo!
              </span>

              <span className="text-base text-gray-100 ml-2 font-bold">
                Entre na sua conta.
              </span>
            </h1>

            {/* Formulário */}
            <form className="w-full flex flex-col gap-4">
              
            
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}
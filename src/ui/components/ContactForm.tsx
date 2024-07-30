export default function ContactForm(){
  return(
    <form className="space-y-6 p-6 w-5/6 mx-auto rounded-lg ">
      {/* Nombre */}
      <div className="flex items-center space-x-4">
        <label htmlFor="name" className="w-1/3 text-center font-semibold text-text-primary">Nombre:</label>
        <input
          id="name"
          type="text"
          placeholder="Ingresa tu nombre"
          className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
        />
      </div>

      {/* Mensaje */}
      <div className="flex items-start space-x-4">
        <label htmlFor="message" className="w-1/3 text-center font-semibold text-text-primary">Mensaje:</label>
        <textarea
          id="message"
          placeholder="Escribe tu mensaje"
          rows={4}
          spellCheck="false"
          className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
        />
      </div>

      {/* Celular */}
      <div className="flex items-center space-x-4">
        <label htmlFor="phone" className="w-1/3 text-center font-semibold text-text-primary ">Celular:</label>
        <input
          id="phone"
          type="tel"
          placeholder="Ingresa tu número de celular"
          className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
        />
      </div>

      <div className="flex justify-center p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out">
        <button
          type="submit"
          className="bg-button text-button-text py-2 px-4 rounded-lg hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-text-primary "
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

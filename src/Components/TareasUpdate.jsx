const TareasUpdate = ({
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  handleGuardar,
  handleCancelar,
}) => {
  return (
    <div className="max-w-xl mx-auto">
      <form className="bg-slate-300 grid grid-cols-1 gap-3 p-5 rounded-md border-2 border-slate-100">
        <label>Modificar Título: </label>
        <input
          className="p-1 rounded-md"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <label>Modificar descripción: </label>
        <textarea className="p-1 rounded-md"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <div className="flex gap-4">
          <button
            className="bg-green-700 rounded-md hover:bg-green-300 hover:text-black text-white font-bold px-2 py-1"
            onClick={handleGuardar}
          >
            Guardar
          </button>
          <button
            className="bg-red-700 rounded-md hover:bg-red-300 hover:text-black text-white font-bold px-2 py-1"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TareasUpdate;

import TareasList from "./components/TareasList";
import TareasForm from "./components/TareasForm";

const App = () => {
  return (
    <main className="h-screen p-3 bg-slate-950">
      <div className="container mx-auto p-2">
        <TareasForm />
        <TareasList />
      </div>
    </main>
  );
};

export default App;

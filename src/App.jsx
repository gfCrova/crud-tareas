import TareasList from "./components/TareasList";
import TareasForm from "./components/TareasForm";

const App = () => {
  return (
    <main className="p-3">
      <div className="container mx-auto p-2">
        <TareasForm />
        <TareasList />
      </div>
    </main>
  );
};

export default App;

import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initionState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 5, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initionState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id != counterId);
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handeleReset = () => setCounters(initionState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handeleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;

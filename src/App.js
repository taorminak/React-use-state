import styles from "./App.css";
import Tariff from "./components/Tariff/Tariff";
import tariffs from "./components/tariffs.json";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.App}>
      {tariffs.map((item) => (
        <Tariff
          item={item}
          key={item.id}
          color={item.color}
          title={item.title}
          price={item.price}
          description={item.description}
          details={item.details}
          setCount={setCount}
          isBoolean={item.id == count ? true : false}
        />
      ))}
    </div>
  );
}

export default App;

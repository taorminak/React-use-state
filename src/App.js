import styles from "./App.css";
import Tariff from "./components/Tariff/Tariff";
import tariffs from "./components/tariffs.json";


function App() {
  return (
    <div className={styles.App}>
      {tariffs.map((tariff, index) => (
        <Tariff key={index}  
        color={tariff.color}
          title={tariff.title}
          price={tariff.price}
          description={tariff.description}
          details={tariff.details}
        />
      ))}
    </div>
  );
}

export default App;

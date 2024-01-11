import './App.css';
import Film from './Film.jsx';
import obrazek1 from './img/obr1.jpg';
import obrazek2 from './img/obr2.jpg';
import obrazek3 from './img/obr3.jpg';
import obrazek4 from './img/obr4.jpg';
import obrazek5 from './img/obr5.jpg';
import obrazek6 from './img/obr6.jpg';



const filmy = [ 
  {nr: 1, obrazek: obrazek1, nazwa: "AKADEMIA PANA KLEKSA", typ: "familijny/przygodowy/fantasy", premiera: true, studyjny: true, godziny: ["15:30", "11:10"]},
  {nr: 2, obrazek: obrazek2, nazwa: "AKADEMIA PANA KLEKSA", typ: "familijny/przygodowy/fantasy", premiera: false, studyjny: false,  godziny: ["13:30", "14:20"]},
  {nr: 3, obrazek: obrazek3, nazwa: "AKADEMIA PANA KLEKSA", typ: "familijny/przygodowy/fantasy", premiera: true, studyjny: false, godziny: ["11:30"]},
  {nr: 4, obrazek: obrazek4, nazwa: "AKADEMIA PANA KLEKSA", typ: "familijny/przygodowy/fantasy", premiera: false, studyjny: true, godziny: ["12:30", "13:10"]},
  {nr: 5, obrazek: obrazek5, nazwa: "AKADEMIA PANA KLEKSA", typ: "familijny/przygodowy/fantasy", premiera: false, studyjny: true, godziny: ["12:30", "13:10"]},
  {nr: 6, obrazek: obrazek6, nazwa: "Pięć Koszmarnych Nocy", typ: "familijny/przygodowy/fantasy", premiera: true, studyjny: true, godziny: ["19:30", "22:10"]}
]


function App() {
  return (
    <div className="App">
      {filmy.map((f)=>(<Film key={f.obrazek} obraz={f.obrazek} nazwa={f.nazwa} typ={f.typ} premiera={f.premiera} godziny={f.godziny} studyjny={f.studyjny}/>))}
    </div>
  );
}

export default App;

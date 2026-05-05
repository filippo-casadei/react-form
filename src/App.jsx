
import { useState } from 'react';
import './App.css'

function App() {

    const [titolo, setTitolo] = useState("");
    const [contenuto, setContenuto] = useState("");

    const [articoli, setArticoli] = useState([]);
    function aggiungiArticolo() {

        const nuovoArticolo = {
            id: crypto.randomUUID(),
            titolo: titolo,
            contenuto: contenuto
        };

        const nuovaLista = [...articoli, nuovoArticolo];

        setArticoli(nuovaLista);

        setTitolo("");
        setContenuto("");
    }



    let contenutoDaMostrare = "";
    if (articoli.length === 0) {
        contenutoDaMostrare = <p>Nessun articolo ancora presente</p>;
    } else {
        contenutoDaMostrare = articoli.map(function (articolo) {

            return (
                <div key={articolo.id} className="card p-3 mb-3">

                    <h3>{articolo.titolo}</h3>

                    <p>{articolo.contenuto}</p>

                </div>
            );

        });
    }


    return (
        <>

            <div className="container mt-4">

                <h1 className="mb-4">Blog Articoli</h1>

                <div className="card p-3 mb-4">

                    <h4>Inserisci nuovo articolo</h4>

                    <div className="mb-3">
                        <label className="form-label">Titolo</label>
                        <input
                            className="form-control"
                            value={titolo}
                            onChange={function (event) {
                                setTitolo(event.target.value)
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contenuto</label>
                        <textarea
                            className="form-control"
                            value={contenuto}
                            onChange={function (event) {
                                setContenuto(event.target.value)
                            }}
                        ></textarea>
                    </div>

                    <button className="btn btn-primary"
                        onClick={aggiungiArticolo}>
                        Aggiungi articolo
                    </button>

                </div>

                <div>
                    <h4>Articoli pubblicati</h4>

                    {contenutoDaMostrare}
                </div>

            </div>

        </>
    );
};

export default App

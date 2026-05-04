
import { useState } from 'react';
import './App.css'

function App() {
    return (
        <>

            const [titolo, setTitolo] = useState("");
            const [contenuto, setContenuto] = useState("");

            <div className="container mt-4">

                <h1 className="mb-4">Blog Articoli</h1>

                <div className="card p-3 mb-4">

                    <h4>Inserisci nuovo articolo</h4>

                    <div className="mb-3">
                        <label className="form-label">Titolo</label>
                        <input className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contenuto</label>
                        <textarea className="form-control"></textarea>
                    </div>

                    <button className="btn btn-primary">
                        Aggiungi articolo
                    </button>

                </div>

                <div>
                    <h4>Articoli pubblicati</h4>

                    <p>Nessun articolo ancora presente</p>
                </div>

            </div>

        </>
    );
};

export default App

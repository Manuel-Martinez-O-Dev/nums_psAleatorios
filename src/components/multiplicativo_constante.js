import React, { useState } from 'react';

const AlgoritmoMultiplicativoConstante = () => {
  const [semilla, setSemilla] = useState('');
  const [constante, setConstante] = useState('');
  const [num, setNum] = useState('');
  const [digito, setDigito] = useState(4);
  const [resultados, setResultados] = useState([]);

  const algMultConst = (semilla, constante, num, digito) => {
    let sem = semilla;
    let fijo = constante;
    const resultadosTemp = [];

    for (let m = 0; m < num; m++) {
      let calculo = fijo * sem;
      let producto = calculo.toString();
      let inicio;
      let medio = [];

      if ((producto.length % 2) === 0 && (digito % 2) === 0) {
        inicio = (producto.length / 2) - (digito / 2);
      } else if ((producto.length % 2) !== 0 && (digito % 2) === 0) {
        inicio = Math.floor(producto.length / 2) - (digito / 2);
      } else if ((producto.length % 2) !== 0 && (digito % 2) !== 0) {
        inicio = Math.floor(producto.length / 2) - Math.floor(digito / 2);
      } else {
        inicio = (producto.length / 2) - Math.floor(digito / 2 + 1);
      }

      for (let i = inicio; i < (inicio + digito); i++) {
        medio.push(producto[i]);
      }

      let medioInt = parseInt(medio.join(''));
      let resultado = medioInt / (10 ** digito);

      resultadosTemp.push({
        iteracion: m + 1,
        producto: producto,
        resultado: resultado.toFixed(4),
      });

      sem = medioInt;
    }

    setResultados(resultadosTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const s = parseInt(semilla);
    const c = parseInt(constante);
    const n = parseInt(num);
    const d = parseInt(digito) || 4;

    algMultConst(s, c, n, d);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo Multiplicativo Constante</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="semilla">Semilla: </label>
        <input
          type="number"
          id="semilla"
          value={semilla}
          onChange={(e) => setSemilla(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="constante">Constante: </label>
        <input
          type="number"
          id="constante"
          value={constante}
          onChange={(e) => setConstante(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="num">Cantidad de números: </label>
        <input
          type="number"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="digito">Número de dígitos (opcional, por defecto 4): </label>
        <input
          type="number"
          id="digito"
          value={digito}
          onChange={(e) => setDigito(e.target.value)}
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <input
          type="submit"
          value="Generar"
          style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
        />
      </form>
      <table style={{ width: '60%', borderCollapse: 'collapse', margin: '20px 0', boxShadow: '0 2px 3px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Iteración</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Producto</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((res, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.iteracion}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.producto}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlgoritmoMultiplicativoConstante;

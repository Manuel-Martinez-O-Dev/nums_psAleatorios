import React, { useState } from 'react';

const AlgoritmoCuadradosMedios = () => {
  const [semilla, setSemilla] = useState('');
  const [num, setNum] = useState('');
  const [digito, setDigito] = useState(4);
  const [resultados, setResultados] = useState([]);

  const alCuMe = (semilla, num, digito) => {
    let sem = semilla;
    const resultadosTemp = [];
    
    for (let m = 0; m < num; m++) {
      let calculo = sem ** 2;
      let cuadrado = calculo.toString();
      let inicio;
      let medio = [];

      if ((cuadrado.length % 2) === 0 && (digito % 2) === 0) {
        inicio = (cuadrado.length / 2) - (digito / 2);
      } else if ((cuadrado.length % 2) !== 0 && (digito % 2) === 0) {
        inicio = Math.floor(cuadrado.length / 2) - (digito / 2);
      } else if ((cuadrado.length % 2) !== 0 && (digito % 2) !== 0) {
        inicio = Math.floor(cuadrado.length / 2) - Math.floor(digito / 2);
      } else {
        inicio = (cuadrado.length / 2) - Math.floor(digito / 2 + 1);
      }

      for (let i = inicio; i < (inicio + digito); i++) {
        medio.push(cuadrado[i]);
      }

      let medioInt = parseInt(medio.join(''));
      let resultado = medioInt / (10 ** digito);

      resultadosTemp.push({
        iteracion: m + 1,
        valorCuadrado: cuadrado,
        resultado: resultado.toFixed(4),
      });

      sem = medioInt;
    }

    setResultados(resultadosTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sem = parseInt(semilla);
    const n = parseInt(num);
    const d = parseInt(digito) || 4;

    alCuMe(sem, n, d);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo de Cuadrados Medios</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="semilla">Semilla: </label>
        <input
          type="number"
          id="semilla"
          value={semilla}
          onChange={(e) => setSemilla(e.target.value)}
          required
          style={{ padding: '5px', width: '100px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="num">Cantidad de números: </label>
        <input
          type="number"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
          style={{ padding: '5px', width: '100px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="digito">Número de dígitos (opcional, por defecto 4): </label>
        <input
          type="number"
          id="digito"
          value={digito}
          onChange={(e) => setDigito(e.target.value)}
          style={{ padding: '5px', width: '100px', marginRight: '10px' }}
        /><br /><br />
        <input
          type="submit"
          value="Generar"
          style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
        />
      </form>
      <table style={{ width: '50%', borderCollapse: 'collapse', margin: '20px 0', boxShadow: '0 2px 3px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Iteración</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Valor Cuadrado</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((res, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.iteracion}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.valorCuadrado}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlgoritmoCuadradosMedios;

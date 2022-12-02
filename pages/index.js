import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React,{useState,useEffect} from "react";

const Index = () => {
  return (
    <div className="container">

      <Head>
        <title>Fechas Importantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <ul>
          <li>
            <a href="index.js">
            </a>
          </li>
        </ul>
      </nav>
      

      <main>
        
        <div className="barraSuperior">
          Próximas actividades
        </div>
        
        <table>
          <tr>
            <td>BAIN081</td><td>Cálculo</td><td>Prueba</td><td>10/11/22</td>
          </tr>
        </table>

        <table>
          <thead>
            <tr>
              <th>Código</th><th>Asignatura</th><th>Tipo</th><th>Fecha</th>
            </tr>
          </thead>
          <tr>
            <td>BAIN081</td><td>Cálculo</td><td>Prueba</td><td>10/11/22</td>
          </tr>
          <tr>
            <td>BAIN075</td><td>Física</td><td>Prueba</td><td>18/12/22</td>
          </tr>
        </table>
      </main>
      
      <footer>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
          No clickear rick
        </a>
      </footer>
    </div>
  );
};

export default Index;

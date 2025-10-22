'use client';

import { useState } from 'react';

export default function Calculadora() {
  const [display, setDisplay] = useState('0');
  const [operacao, setOperacao] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);
  const [aguardandoOperando, setAguardandoOperando] = useState(false);

  const formatarResultado = (numero) => {
    if (Number.isInteger(numero)) {
      return String(numero);
    }
    return numero.toFixed(2);
  };

  const calcular = (valor1, operador, valor2) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '×':
        return num1 * num2;
      case '÷':
        if (num2 === 0) {
          throw new Error('Divisão por zero');
        }
        return num1 / num2;
      default:
        return num2;
    }
  };

  const inserirNumero = (numero) => {
    if (aguardandoOperando) {
      setDisplay(String(numero));
      setAguardandoOperando(false);
    } else {
      setDisplay(display === '0' ? String(numero) : display + numero);
    }
  };

  const inserirDecimal = () => {
    if (aguardandoOperando) {
      setDisplay('0.');
      setAguardandoOperando(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const executarOperacao = (proximoOperador) => {
    const valorAtual = parseFloat(display);

    if (valorAnterior === null) {
      setValorAnterior(valorAtual);
    } else if (operacao) {
      try {
        const resultado = calcular(valorAnterior, operacao, valorAtual);
        setDisplay(formatarResultado(resultado));
        setValorAnterior(resultado);
      } catch (error) {
        setDisplay('Erro');
        setValorAnterior(null);
        setOperacao(null);
        setAguardandoOperando(true);
        return;
      }
    }

    setAguardandoOperando(true);
    setOperacao(proximoOperador);
  };

  const calcularResultado = () => {
    const valorAtual = parseFloat(display);

    if (valorAnterior !== null && operacao) {
      try {
        const resultado = calcular(valorAnterior, operacao, valorAtual);
        setDisplay(formatarResultado(resultado));
        setValorAnterior(null);
        setOperacao(null);
        setAguardandoOperando(true);
      } catch (error) {
        setDisplay('Erro');
        setValorAnterior(null);
        setOperacao(null);
        setAguardandoOperando(true);
      }
    }
  };

  const limpar = () => {
    setDisplay('0');
    setOperacao(null);
    setValorAnterior(null);
    setAguardandoOperando(false);
  };

  const apagar = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex justify-center items-center gap-8 w-full">
        {/* Redes Sociais */}
        <div className="p-6 w-full max-w-xs">
          <h2 className="text-xl font-semibold text-center text-white mb-6">
            Redes Sociais
          </h2>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/pedrocastanha.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://github.com/PedroCastanha-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-oliveira-castanha-a5797b38b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://pedrocastanha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Portfólio
            </a>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-sm rounded-3xl shadow-2xl p-6 w-full max-w-sm">
          <div className="bg-gray-100/50 text-gray-900 p-6 rounded-2xl mb-6 text-right border border-gray-200/50">
            <div className="text-5xl font-light min-h-[3rem] break-all">
              {display}
            </div>
          </div>

          {/* Botões */}
          <div className="grid grid-cols-4 gap-3">
            {/* Primeira linha */}
            <button
              onClick={limpar}
              className="bg-green-300 hover:bg-gray-400 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              C
            </button>
            <button
              onClick={apagar}
              className="bg-red-400 hover:bg-gray-400 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              ⌫
            </button>
            <button
              onClick={() => executarOperacao('÷')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              ÷
            </button>
            <button
              onClick={() => executarOperacao('×')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              ×
            </button>

            {/* Segunda linha */}
            <button
              onClick={() => inserirNumero(7)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              7
            </button>
            <button
              onClick={() => inserirNumero(8)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              8
            </button>
            <button
              onClick={() => inserirNumero(9)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              9
            </button>
            <button
              onClick={() => executarOperacao('-')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              −
            </button>

            {/* Terceira linha */}
            <button
              onClick={() => inserirNumero(4)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              4
            </button>
            <button
              onClick={() => inserirNumero(5)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              5
            </button>
            <button
              onClick={() => inserirNumero(6)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              6
            </button>
            <button
              onClick={() => executarOperacao('+')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              +
            </button>

            {/* Quarta linha */}
            <button
              onClick={() => inserirNumero(1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              1
            </button>
            <button
              onClick={() => inserirNumero(2)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              2
            </button>
            <button
              onClick={() => inserirNumero(3)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              3
            </button>
            <button
              onClick={calcularResultado}
              className="bg-orange-500 hover:bg-orange-600 text-white text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95 row-span-2"
            >
              =
            </button>

            {/* Quinta linha */}
            <button
              onClick={() => inserirNumero(0)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95 col-span-2"
            >
              0
            </button>
            <button
              onClick={inserirDecimal}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-normal py-4 px-4 rounded-lg transition-colors active:scale-95"
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import es from './es.json';
import en from './en.json';

const TranslationContext = createContext();

const translations = { es, en };

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detecta el idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = ['es', 'en'].includes(browserLang) ? browserLang : 'es';
    
    // Si hay idioma guardado, lo usa
    const savedLang = localStorage.getItem('language') || defaultLang;
    setLang(savedLang);
    setMounted(true);
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <TranslationContext.Provider value={{ lang, t, changeLang, mounted }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation debe usarse dentro de TranslationProvider');
  }
  return context;
}
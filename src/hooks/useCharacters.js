import { useCallback, useEffect, useState } from 'react';
const API = 'https://rickandmortyapi.com/api/character';
export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    let timedOut = false;
    setLoading(true); setError(null);
    const timer = setTimeout(() => { timedOut = true; controller.abort(); }, 15000);
    async function load() {
      try {
        const response = await fetch(`${API}?page=${page}`, { signal: controller.signal });
        if (!response.ok) throw new Error(`La API respondió con código ${response.status}.`);
        const data = await response.json();
        if (!Array.isArray(data.results) || !data.info) throw new Error('La respuesta de la API no es válida.');
        if (active) { setCharacters(data.results); setPages(data.info.pages); }
      } catch (e) {
        if (active) setError(timedOut ? 'La solicitud tardó demasiado. Revisa tu conexión e inténtalo de nuevo.' : e.name === 'AbortError' ? 'Solicitud cancelada.' : 'No se pudieron cargar los personajes. Revisa tu conexión e inténtalo de nuevo.');
      } finally { clearTimeout(timer); if (active) setLoading(false); }
    }
    load();
    return () => { active = false; clearTimeout(timer); controller.abort(); };
  }, [page, refreshKey]);
  const retry = useCallback(() => setRefreshKey(value => value + 1), []);
  const next = useCallback(() => { if (!loading && page < pages) { setLoading(true); setPage(value => value + 1); } }, [loading, page, pages]);
  const previous = useCallback(() => { if (!loading && page > 1) { setLoading(true); setPage(value => value - 1); } }, [loading, page]);
  return { characters, loading, error, page, pages, retry, next, previous };
}

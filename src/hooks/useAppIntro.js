import { useEffect, useState } from 'react';
export default function useAppIntro() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setReady(true), 1600); return () => clearTimeout(timer); }, []);
  return ready;
}

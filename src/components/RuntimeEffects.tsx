// components/RuntimeEffects.tsx
'use client';
import { useEffect } from 'react';
import AOS from 'aos';

export default function RuntimeEffects() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return null;
}

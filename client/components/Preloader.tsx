// components/Preloader.tsx
import React, { useEffect, useState } from "react";
import myLogo from "/favicon.png"; // your logo path

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or remove if you want it to disappear when page loads)
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-teal-600 preloader-fade">
  <img src={myLogo} alt="Logo" className="w-32 h-32 animate-bounce" />
</div>
  );
}

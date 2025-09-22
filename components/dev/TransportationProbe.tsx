// components/dev/TransportationProbe.tsx
"use client";

export default function TransportationProbe() {
  // Rango típico de los íconos (ajusta si tu font empieza en otro lugar)
  const codes = Array.from({ length: 0x100 }, (_, i) => 0xe900 + i); // E900..E9FF

  return (
    <div className="grid grid-cols-8 gap-4 p-6">
        <p style={{ fontFamily: "Transportation", fontSize: 40 }}>A B C</p>

      {codes.map((c) => {
        const code = String.fromCharCode(c);
        return (
          <div
            key={c}
            className="p-4 border rounded text-center flex flex-col items-center"
          >
            <i
              className="text-4xl text-gray-700"
              data-ico-transportation={code}
            />
            <div className="mt-2 text-xs text-gray-600">
              {"\\u" + c.toString(16)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

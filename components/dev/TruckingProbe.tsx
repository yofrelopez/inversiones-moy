// components/dev/TruckingProbe.tsx
export default function TruckingProbe() {
  const codes = Array.from({ length: 0x100 }, (_, i) => 0xe900 + i); // E900..E9FF
  return (
    <div className="grid grid-cols-8 gap-4 p-6">
      {codes.map(c => {
        const code = String.fromCharCode(c);
        return (
          <div key={c} className="p-4 border rounded text-center">
            <i className="text-4xl" data-ico-trucking={code} />
            <div className="mt-2 text-xs text-gray-600">{"\\u" + c.toString(16)}</div>
          </div>
        );
      })}
    </div>
  );
}

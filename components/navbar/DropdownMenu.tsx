// components/navbar/DropdownMenu.tsx
"use client";

import Link from "next/link";
import { NavItem } from "./navItems";
import { usePathname } from "next/navigation";

interface DropdownMenuProps {
  items: NavItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  const pathname = usePathname();

  return (
    <div className="absolute left-0 top-full mt-3 w-64 bg-white shadow-lg ring-1 ring-black/5 z-50">
      <ul className="flex flex-col divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-5 py-3 text-sm transition-colors ${
                pathname === item.href
                  ? "text-moyblue font-semibold bg-gray-50 border-l-4 border-yellow-400"
                  : "text-gray-700 hover:text-moyblue hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

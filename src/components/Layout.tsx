import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-bgPage text-textMain font-sans">
      <nav className="bg-bgSurface border-b border-borderSubtle py-4 px-8 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight">網路學系 Portal</Link>
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <Link to="/categories" className="hover:text-btnPrimary">四大分類</Link>
            <Link to="/guide/newbie" className="hover:text-btnPrimary">新人導覽</Link>
            <Link to="/guide/org" className="hover:text-btnPrimary">組織導覽</Link>
            <Link to="/strategy-map" className="hover:text-btnPrimary">策略地圖</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-8">{children}</main>
    </div>
  );
};

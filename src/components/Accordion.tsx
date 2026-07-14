import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-borderSubtle rounded-xl bg-bgSurface overflow-hidden mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-bgTabs transition-colors"
      >
        <span className="font-bold text-textMain">{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-textMuted" /> : <ChevronDown size={20} className="text-textMuted" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-sm text-textBody leading-relaxed border-t border-borderSubtle bg-bgPage/30">
          {children}
        </div>
      )}
    </div>
  );
};
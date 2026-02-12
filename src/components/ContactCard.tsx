import { Contact } from "../data/site-data";

export const ContactCard = ({ contact }: { contact: Contact }) => {
  // Teams Deep Link 組成
  const teamsUrl = `https://teams.microsoft.com/l/chat/0/0?users=${contact.email}`;

  return (
    <div className="bg-bgSurface border border-borderSubtle p-5 rounded-lg shadow-sm">
      <div className="text-lg font-bold mb-1">{contact.name}</div>
      <div className="text-textMuted text-sm mb-3">{contact.role}</div>
      <p className="text-textBody text-sm mb-4">協助：{contact.support}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {contact.tags.map(t => (
          <span key={t} className="text-[10px] bg-bgTabs px-2 py-0.5 rounded text-textMuted">#{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href={`mailto:${contact.email}`} className="text-center text-xs py-2 bg-bgTabs hover:bg-tabHover rounded">Email</a>
        <a href={teamsUrl} target="_blank" rel="noopener noreferrer" className="text-center text-xs py-2 bg-bgTabs hover:bg-tabHover rounded">Teams</a>
      </div>
    </div>
  );
};
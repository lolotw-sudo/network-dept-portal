export const Chip = ({ label, url }: { label: string; url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-1 bg-chipBg border border-chipBorder rounded-full text-sm text-textBody hover:bg-chipHover transition-colors"
    >
      {/* TODO: 未來可根據 label 映射具體的 TIS 查詢參數 */}
      {label}
    </a>
  );
};
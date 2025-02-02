// Layout Component
export default function PageLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow">{children}</div>
  );
}

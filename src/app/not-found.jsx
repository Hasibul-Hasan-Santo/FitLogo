import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center space-y-4 px-4 text-center">
      <h1 className="text-6xl font-black text-[#a3e635]">404</h1>
      <h2 className="text-2xl font-bold uppercase tracking-wider">Page Not Found</h2>
      <p className="text-zinc-400 text-sm max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-[#a3e635] text-black text-xs font-bold px-6 py-3 rounded-lg hover:bg-[#bef264] transition-colors uppercase tracking-wide mt-4"
      >
        Back to Home
      </Link>
    </main>
  );
}
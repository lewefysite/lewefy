export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutralwhite text-neutralblack">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Página não encontrada</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-brandprimary text-white rounded hover:bg-brandsecondary transition"
      >
        Voltar para o início
      </a>
    </div>
  );
}

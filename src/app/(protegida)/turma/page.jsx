import Link from 'next/link';

export default function TurmasPage() {
    return (
        <main className="card">
            <h1>Turma</h1>
            <Link href="/turma/docente" className="btn">
                Docente
            </Link>
            <Link href="/turma/instrutor" className="btn">
                Instrutor
            </Link>
        </main>
    );
}
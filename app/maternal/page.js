import dynamic from 'next/dynamic';

const ComunidadInfantil = dynamic(() => import('@/components/sections/ComunidadInfantil'), { ssr: true });

export const metadata = { title: 'Comunidad Infantil — Instituto Piaget' };

export default function Page() {
  return <ComunidadInfantil />;
}

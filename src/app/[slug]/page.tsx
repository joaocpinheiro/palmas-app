import HeroApart from '@/components/HeroApart'

interface AptoProps {
  params: {
    slug: string
  }
}

export default async function AptoPage({ params }: AptoProps) {
  const apto = params.slug

  return (
    <main className="h-screen bg-white ">
      <HeroApart />
    </main>
  )
}

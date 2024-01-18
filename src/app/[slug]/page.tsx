interface AptoProps {
  params: {
    slug: string
  }
}

export default async function AptoPage({ params }: AptoProps) {
  const apto = params.slug

  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      {apto}
    </main>
  )
}

import Image from 'next/image'
import { useRouter } from 'next/router'

export default function MainMenu() {
  const router = useRouter()

  return (
    <div className="absolute right-[3%] top-[3%]">
      <Image
        src={'/logo/logo.png'}
        className="rounded-full"
        height={48}
        width={48}
        alt="Logo"
        onClick={() => router.push('https://www.vorkov.com')}
      />
    </div>
  )
}

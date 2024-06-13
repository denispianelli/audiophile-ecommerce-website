import Link from 'next/link';

export default function DesktopNav() {
  const nav = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'headphones',
      link: '/headphones',
    },
    {
      name: 'speakers',
      link: '/speakers',
    },
    {
      name: 'earphones',
      link: '/earphones',
    },
  ];
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:gap-6 lg:text-[13px] lg:font-bold lg:uppercase lg:tracking-[2px] lg:text-white">
      {nav.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className="transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

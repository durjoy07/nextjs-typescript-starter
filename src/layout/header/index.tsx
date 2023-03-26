import Container from '@components/container';
import Link from 'next/link';
import { IHeader } from './interface';

export default function Header({ logo, menuItems }: IHeader) {
  return (
    <header role="presentation" className="bg-black">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-4xl text-white">
            <Link href={'/'}>{logo}</Link>
          </h1>
          {menuItems.length > 0 && (
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
                {menuItems.map(({ label, href }, index) => (
                  <li key={index}>
                    <Link
                      className="inline-flex items-end py-[38px] text-base font-bold text-white transition hover:text-primary"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
}

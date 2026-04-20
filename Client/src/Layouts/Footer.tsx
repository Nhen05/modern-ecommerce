
const footerLinks = [
  {
    title: 'Resources',
    links: [
      { name: 'Flowbite', href: 'https://flowbite.com/' },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
    ],
  },
  {
    title: 'Follow us',
    links: [
      { name: 'Github', href: 'https://github.com/themesberg/flowbite' },
      { name: 'Discord', href: 'https://discord.gg/4eeurUVvTy' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Facebook page',
    href: '#',
    icon: (
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Discord community',
    href: '#',
    icon: (
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
      </svg>
    ),
  },
  // Bạn có thể thêm Twitter, Github, Dribbble tương tự ở đây...
];

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7 me-3"
                alt="FlowBite Logo"
              />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  {section.title}
                </h2>
                <ul className="text-body font-medium">
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-body hover:text-heading ms-5 first:ms-0 sm:first:ms-5"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
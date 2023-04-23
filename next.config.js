/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://brandlogovector.com/wp-content/uploads/2021/03/Boston-University-Logo-Icon.png',
      'https://w1.pngwing.com/pngs/80/795/png-transparent-school-logo-boston-university-school-academic-degree-postdoctoral-researcher-language-school-collegexpress-text.png'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

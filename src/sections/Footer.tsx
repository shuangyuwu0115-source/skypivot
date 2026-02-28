import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterProps {
  language?: 'zh' | 'en';
}

export function Footer({ language = 'zh' }: FooterProps) {
  const t = {
    zh: {
      tagline: '让每一次旅行都物超所值',
      about: '关于我们',
      contact: '联系我们',
      privacy: '隐私政策',
      terms: '服务条款',
      partners: '合作伙伴',
      help: '帮助中心',
      newsletter: '订阅优惠资讯',
      emailPlaceholder: '输入您的邮箱',
      subscribe: '订阅',
      rights: '版权所有'
    },
    en: {
      tagline: 'Make every trip worth it',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      partners: 'Partners',
      help: 'Help Center',
      newsletter: 'Subscribe to Deals',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved'
    }
  }[language];

  const links = [
    { label: t.about, href: '#' },
    { label: t.contact, href: '#' },
    { label: t.privacy, href: '#' },
    { label: t.terms, href: '#' },
    { label: t.partners, href: '#' },
    { label: t.help, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SkyPivot</span>
            </div>
            <p className="text-slate-400 mb-6">{t.tagline}</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">
                <span className="text-lg">📧</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">
                <span className="text-lg">💬</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">
                <span className="text-lg">📱</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.newsletter}</h4>
            <div className="flex gap-2">
              <Input 
                placeholder={t.emailPlaceholder} 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button className="bg-sky-500 hover:bg-sky-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© 2024 SkyPivot. {t.rights}.</p>
        </div>
      </div>
    </footer>
  );
}

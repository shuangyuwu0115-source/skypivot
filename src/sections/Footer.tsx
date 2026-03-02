import { useState } from 'react';
import { PrivacyPolicy } from './PrivacyPolicy';

interface FooterProps {
  language?: 'zh' | 'en';
}

export function Footer({ language = 'zh' }: FooterProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const t = {
    zh: {
      tagline: '让每一次旅行都物超所值',
      about: '关于我们',
      privacy: '隐私政策',
      contact: 'support@skypivot.co',
      rights: '版权所有'
    },
    en: {
      tagline: 'Make every trip worth it',
      about: 'About Us',
      privacy: 'Privacy Policy',
      contact: 'support@skypivot.co',
      rights: 'All rights reserved'
    }
  }[language];

  return (
    <>
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 品牌信息 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SkyPivot</span>
              <span className="text-slate-400 text-sm ml-2">{t.tagline}</span>
            </div>

            {/* 链接 */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t.about}
              </a>
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {t.privacy}
              </button>
              <a 
                href={`mailto:${t.contact}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {t.contact}
              </a>
            </div>

            {/* 版权 */}
            <p className="text-slate-500 text-sm">
              © 2024 SkyPivot. {t.rights}.
            </p>
          </div>
        </div>
      </footer>

      {/* 隐私政策弹窗 */}
      <PrivacyPolicy 
        open={privacyOpen} 
        onOpenChange={setPrivacyOpen} 
        language={language}
      />
    </>
  );
}

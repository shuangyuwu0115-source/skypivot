import { useTranslation } from 'react-i18next'
import { Plane, Mail, Github, Twitter, Globe } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import i18n from '@/i18n'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">{t('brand')}</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">{t('footer.description')}</p>
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <Select value={i18n.language} onValueChange={changeLanguage}>
                <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.flights')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.hotels')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.cars')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.trains')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">使用指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright', { year: currentYear })}</p>
          <p className="mt-2">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}

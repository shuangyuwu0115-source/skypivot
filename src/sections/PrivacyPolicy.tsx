import { X, Shield, AlertTriangle, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language?: 'zh' | 'en';
}

export function PrivacyPolicy({ open, onOpenChange, language = 'zh' }: PrivacyPolicyProps) {
  const t = {
    zh: {
      title: '隐私政策与免责声明',
      lastUpdated: '最后更新：2024年12月',
      sections: [
        {
          title: '一、联盟营销披露',
          icon: <Shield className="w-5 h-5 text-sky-500" />,
          content: `SkyPivot（以下简称"我们"或"本站"）是一个旅行比价平台，与 Booking.com、携程（Ctrip）、Expedia、Agoda、Hertz 等多家旅行服务商建立了联盟合作关系。

当您通过本网站提供的链接访问第三方平台并完成预订时，我们可能会获得一定比例的佣金。这一佣金由服务提供商支付，不会影响您支付的最终价格——您支付的金额与各平台直接预订完全相同。

我们的使命是帮助用户找到最优惠的旅行选择，佣金收入用于维持网站的正常运营和持续改进。`
        },
        {
          title: '二、价格信息声明',
          icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
          content: `本网站显示的价格信息来源于各平台的公开数据，我们尽力确保信息的准确性和时效性。但由于以下原因，实际价格可能有所不同：

• 各平台价格实时变动，抓取数据可能存在延迟
• 促销活动和折扣可能随时调整
• 货币汇率波动影响最终价格
• 不同用户可能看到不同的个性化价格

因此，显示价格仅供参考，实际预订价格请以第三方平台的结算页面为准。我们不对价格差异或信息滞后承担任何责任。`
        },
        {
          title: '三、第三方服务声明',
          icon: <ExternalLink className="w-5 h-5 text-green-500" />,
          content: `本网站仅作为信息展示和比价平台，所有实际的预订、支付、售后服务均由第三方平台直接提供。我们并不参与实际交易过程。

对于以下情况，请直接联系相应的服务提供商：
• 预订确认、退改签政策
• 航班延误、酒店入住问题
• 退款申请和售后服务
• 发票开具和积分累积

各平台的服务条款和隐私政策适用于您的实际预订行为。`
        },
        {
          title: '四、责任限制',
          icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
          content: `您理解并同意，使用本网站的风险由您自行承担。在适用法律允许的最大范围内，SkyPivot 不对以下情况承担责任：

• 因使用或无法使用本网站信息而导致的任何直接或间接损失
• 行程变更、航班取消、酒店超售等旅行服务问题
• 第三方平台的系统故障、数据错误或服务中断
• 因网络延迟、技术故障导致的信息显示错误

我们建议用户在做出预订决定前，直接访问相关平台确认最新价格和条款。`
        },
        {
          title: '五、隐私保护',
          icon: <Shield className="w-5 h-5 text-purple-500" />,
          content: `我们重视您的隐私保护。本网站使用 Cookies 来改善用户体验和分析网站流量。我们不会收集或存储您的个人预订信息（如信用卡号、身份证号等），所有预订操作均在第三方平台完成。

如需了解更多信息，请联系：support@skypivot.co`
        }
      ],
      close: '关闭'
    },
    en: {
      title: 'Privacy Policy & Disclaimer',
      lastUpdated: 'Last Updated: December 2024',
      sections: [
        {
          title: '1. Affiliate Disclosure',
          icon: <Shield className="w-5 h-5 text-sky-500" />,
          content: `SkyPivot ("we" or "this site") is a travel comparison platform with affiliate partnerships with Booking.com, Ctrip, Expedia, Agoda, Hertz, and other travel service providers.

When you visit third-party platforms through links provided on our website and complete a booking, we may earn a commission. This commission is paid by the service provider and does NOT affect the final price you pay—the amount is exactly the same as booking directly with the platform.

Our mission is to help users find the best travel deals. Commission income is used to maintain normal website operations and continuous improvements.`
        },
        {
          title: '2. Price Information Disclaimer',
          icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
          content: `Price information displayed on this website is sourced from public data of various platforms. We strive to ensure accuracy and timeliness, but actual prices may differ due to:

• Real-time price changes on platforms, with possible data delay
• Promotional activities and discounts subject to change
• Currency exchange rate fluctuations
• Personalized pricing for different users

Therefore, displayed prices are for reference only. Actual booking prices are subject to the checkout page of third-party platforms. We are not responsible for price discrepancies or information delays.`
        },
        {
          title: '3. Third-Party Services',
          icon: <ExternalLink className="w-5 h-5 text-green-500" />,
          content: `This website serves only as an information display and comparison platform. All actual booking, payment, and after-sales services are directly provided by third-party platforms. We do not participate in actual transactions.

Please contact the respective service provider directly for:
• Booking confirmation, cancellation and change policies
• Flight delays, hotel check-in issues
• Refund applications and after-sales service
• Invoice issuance and loyalty points

Each platform's terms of service and privacy policy apply to your actual booking.`
        },
        {
          title: '4. Limitation of Liability',
          icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
          content: `You understand and agree that using this website is at your own risk. To the maximum extent permitted by applicable law, SkyPivot is not liable for:

• Any direct or indirect losses resulting from use or inability to use website information
• Travel service issues such as itinerary changes, flight cancellations, hotel overbooking
• Third-party platform system failures, data errors, or service interruptions
• Information display errors due to network delays or technical failures

We recommend users confirm the latest prices and terms directly on relevant platforms before making booking decisions.`
        },
        {
          title: '5. Privacy Protection',
          icon: <Shield className="w-5 h-5 text-purple-500" />,
          content: `We value your privacy. This website uses Cookies to improve user experience and analyze website traffic. We do not collect or store your personal booking information (such as credit card numbers, ID numbers, etc.). All booking operations are completed on third-party platforms.

For more information, please contact: support@skypivot.co`
        }
      ],
      close: 'Close'
    }
  }[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Shield className="w-6 h-6 text-sky-500" />
            {t.title}
          </DialogTitle>
          <p className="text-sm text-slate-400 mt-1">{t.lastUpdated}</p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {t.sections.map((section, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                {section.icon}
                {section.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onOpenChange(false)}
            className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

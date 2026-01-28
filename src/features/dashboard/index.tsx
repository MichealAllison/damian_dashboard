import {
  ChevronDown,
  Wallet,
  CreditCard,
  TrendingUp,
  PiggyBank,
  Shield,
  Calendar,
} from "lucide-react"

// Cash account items
const cashItems = [
  {
    title: "Cash Reserve",
    icon: Wallet,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    amount: "$10,000.00",
  },
  {
    title: "Checking",
    icon: CreditCard,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    amount: "$5,000.00",
  },
]

// Investing account items
const investingItems = [
  {
    title: "General Investing",
    subtitle: "Individual taxable",
    icon: TrendingUp,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    amount: "$5,000.00",
  },
  {
    title: "Retirement",
    subtitle: "Joint taxable",
    icon: PiggyBank,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    amount: "$10,000.00",
  },
  {
    title: "Safety Net",
    subtitle: "Joint taxable",
    icon: Shield,
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    amount: "$20,000.00",
  },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Good morning, Alex
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            Transfer or rollover
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Deposit
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column - Accounts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cash Section */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Cash</h2>
            <div className="space-y-4">
              {cashItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <span className="font-medium text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Investing Section */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Investing</h2>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
              >
                See performance
              </a>
            </div>
            <div className="space-y-4">
              {investingItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Stats */}
        <div className="space-y-6">
          {/* Net Worth Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Net worth</h3>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total net worth</span>
                <span className="font-medium text-gray-900">$30,000.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Betterment balance</span>
                <span className="font-medium text-gray-900">$23,000.00</span>
              </div>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700 hover:underline"
              >
                See breakdown
              </a>
            </div>
          </div>

          {/* Investment Performance Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                Investment performance
              </h3>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total earned</span>
                <span className="font-medium text-gray-900">$2,00.0000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Dividends earned</span>
                <span className="font-medium text-gray-900">$150.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Tax losses harvested
                </span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  Turn on
                </span>
              </div>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700 hover:underline"
              >
                See detail
              </a>
            </div>
          </div>

          {/* Scheduled Transactions Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                Scheduled transactions
              </h3>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
              >
                See detail
              </a>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">
                Setting a recurring transaction can make it easier to save by
                putting it on autopilot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
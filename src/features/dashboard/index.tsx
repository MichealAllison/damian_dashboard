"use client"

import { Button } from "@/src/components/ui/button"
import {
  ChevronDown,
  Calendar,
  CalendarSyncIcon,
} from "lucide-react"

// Get greeting based on time of day
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

// Cash account items
const cashItems = [
  {
    title: "Cash Reserve",
    image: 'cash',
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    amount: "$10,000.00",
  },
  {
    title: "Checking",
    image: 'checking',
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
    image: 'investing',
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    amount: "$5,000.00",
  },
  {
    title: "Retirement",
    subtitle: "Joint taxable",
    image: 'retirement',
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    amount: "$10,000.00",
  },
  {
    title: "Safety Net",
    subtitle: "Joint taxable",
    image: 'safety',
    iconBg: "bg-blue-500/50",
    iconColor: "text-white",
    amount: "$20,000.00",
  },
]

const Dashboard = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-6 min-h-full">
      {/* Header */}
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-lg lg:text-2xl font-semibold text-gray-900">
          {getGreeting()}, Mazi
        </h1>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <Button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50">
            Transfer or rollover
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="rounded-md bg-[#000B4E] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-[#0012AA]">
            Deposit
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column - Accounts */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Cash Section */}
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Cash</h2>
            <div className="space-y-4">
              {cashItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between border-t py-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}
                    >
                      <img
                      src={`/images/${item.image}.png`}
                      alt={item.title}
                      className="h-5 w-5"
                      />
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
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Investing</h2>
              <a
                href="/plan"
                className="text-sm text-[#000B4E] hover:text-[#0012AA] hover:underline"
              >
                See performance
              </a>
            </div>
            <div className="space-y-4">
              {investingItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between border-t py-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}
                    >
                      <img
                        src={`/images/${item.image}.png`}
                        alt={item.title}
                        className="h-5 w-5"
                      />
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
        <div className="space-y-4">
          {/* Net Worth Card */}
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-sm">
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
                className="mt-2 inline-block text-sm text-[#000B4E] hover:text-[#0012AA] hover:underline"
              >
                See breakdown
              </a>
            </div>
             {/* Investment Performance Card */}
          <div className="mt-6 border-t pt-6">
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
                <span className="text-sm text-[#000B4E] hover:underline cursor-pointer">
                  Turn on
                </span>
              </div>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-[#000B4E] hover:text-[#0012AA] hover:underline"
              >
                See detail
              </a>
            </div>
          </div>
          </div>

        

          {/* Scheduled Transactions Card */}
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                Scheduled transactions
              </h3>
              <a
                href="#"
                className="text-sm text-[#000B4E] hover:text-[#0012AA] hover:underline"
              >
                See detail
              </a>
            </div>
            <div className="flex items-start gap-3 border-t py-4 ">
              <div className="flex h-10 w-10 p-3 items-center justify-center rounded-lg bg-purple-100">
                <CalendarSyncIcon className="h-5 w-5 text-purple-600" />
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
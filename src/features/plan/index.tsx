"use client"

import { useState } from "react"

// Tabs for the plan page
const tabs = [
  { title: "Overview", isActive: true },
  { title: "Activity", isActive: false },
  { title: "Distributions", isActive: false },
  { title: "Loans", isActive: false },
  { title: "Compliance", isActive: false },
]

// Stats cards data
const statsCards = [
  {
    title: "Total plan balance",
    value: "$825,558.40",
    subtitle: "Last updated today",
  },
  {
    title: "Year-to-date contributions",
    value: "$101,320.58",
    subtitle: "Last updated today",
  },
  {
    title: "Total earnings",
    value: "$25,522.06",
    subtitle: "Last updated today",
  },
]

// Contribution sources data
const contributionSources = [
  {
    source: "Traditional contributions",
    abbr: "TC",
    weight: 74.5,
    value: "$74,500.00",
    color: "bg-blue-600",
    type: "employee",
  },
  {
    source: "Roth contributions",
    abbr: "RC",
    weight: 3.7,
    value: "$3,700.58",
    color: "bg-orange-500",
    type: "employee",
  },
  {
    source: "Traditional 401(k) rollover",
    abbr: "TR",
    weight: 0.0,
    value: "$0.00",
    color: "bg-gray-300",
    type: "employee",
  },
  {
    source: "Roth 401(k) rollover",
    abbr: "RR",
    weight: 0.0,
    value: "$0.00",
    color: "bg-gray-300",
    type: "employee",
  },
  {
    source: "Employer match",
    abbr: "EM",
    weight: 21.8,
    value: "$21,800.00",
    color: "bg-[#E07702]",
    type: "employer",
  },
  {
    source: "QNEC",
    abbr: "QN",
    weight: 1.0,
    value: "$0.00",
    color: "bg-gray-300",
    type: "employer",
  },
  {
    source: "QMAC",
    abbr: "QM",
    weight: 0.0,
    value: "$0.00",
    color: "bg-gray-300",
    type: "employer",
  },
]

const Plan = () => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  // Calculate totals from contribution data
  const employeeTotal = contributionSources
    .filter((item) => item.type === "employee")
    .reduce((sum, item) => sum + item.weight, 0)
  
  const employerTotal = contributionSources
    .filter((item) => item.type === "employer")
    .reduce((sum, item) => sum + item.weight, 0)

  const total = employeeTotal + employerTotal
  const employeePercent = Math.round((employeeTotal / total) * 100)
  const employerPercent = Math.round((employerTotal / total) * 100)

  // SVG calculations
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const employeeLength = (employeePercent / 100) * circumference
  const employerLength = (employerPercent / 100) * circumference

  return (
    <div className="bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Plan</h1>
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              className={`pb-3 text-sm font-medium transition-colors ${
                tab.isActive
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        {statsCards.map((card) => (
          <div 
            key={card.title} 
            className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="text-sm text-gray-500 mb-1">{card.title}</p>
            <p className="text-3xl font-semibold text-gray-900 mb-1">
              {card.value}
            </p>
            <p className="text-xs text-gray-400">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Year-to-date contributions by source */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Year-to-date contributions by source
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Donut Chart */}
          <div className="flex flex-col items-center justify-center lg:w-56 shrink-0">
            <div className="relative w-56 h-40">
              {/* SVG Donut Chart */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="5"
                />
                {/* Employee segment (Blue) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={hoveredSegment === "employee" ? "#1D4ED8" : "#2563EB"}
                  strokeWidth={hoveredSegment === "employee" ? "7" : "5"}
                  strokeDasharray={`${employeeLength} ${circumference}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                  className="cursor-pointer transition-all duration-300"
                  style={{ 
                    opacity: hoveredSegment && hoveredSegment !== "employee" ? 0.5 : 1,
                  }}
                  onMouseEnter={() => setHoveredSegment("employee")}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
                {/* Employer segment (Orange) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={hoveredSegment === "employer" ? "#C2410C" : "#EA580C"}
                  strokeWidth={hoveredSegment === "employer" ? "7" : "5"}
                  strokeDasharray={`${employerLength} ${circumference}`}
                  strokeDashoffset={`${-employeeLength}`}
                  transform="rotate(-90 50 50)"
                  className="cursor-pointer transition-all duration-300"
                  style={{ 
                    opacity: hoveredSegment && hoveredSegment !== "employer" ? 0.5 : 1,
                  }}
                  onMouseEnter={() => setHoveredSegment("employer")}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                {hoveredRow !== null && contributionSources.find(item => item.source === hoveredRow) ? (
                  // Show specific source when hovering on table row
                  (() => {
                    const hoveredItem = contributionSources.find(item => item.source === hoveredRow)!
                    return (
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-[#1e1e1e]">
                          {hoveredItem.weight}%
                        </span>
                        <span className="text-sm font-semibold text-[#1e1e1e]/70">
                          {hoveredItem.abbr}
                        </span>
                      </div>
                    )
                  })()
                ) : (
                  // Default: show employer/employee split
                  <>
                    <div 
                      className={`border-r pr-2 items-center justify-center flex flex-col cursor-pointer transition-opacity duration-300 ${
                        hoveredSegment && hoveredSegment !== "employer" ? "opacity-50" : "opacity-100"
                      }`}
                      onMouseEnter={() => setHoveredSegment("employer")}
                      onMouseLeave={() => setHoveredSegment(null)}
                    >
                      <span className="text-base flex flex-col font-semibold text-[#1e1e1e]/70">{employerPercent}%</span>
                      <span className="text-[10px] flex flex-col font-semibold text-[#1e1e1e]/70">Employer</span>
                    </div>
                    <div 
                      className={`pl-2 items-center justify-center flex flex-col cursor-pointer transition-opacity duration-300 ${
                        hoveredSegment && hoveredSegment !== "employee" ? "opacity-50" : "opacity-100"
                      }`}
                      onMouseEnter={() => setHoveredSegment("employee")}
                      onMouseLeave={() => setHoveredSegment(null)}
                    >
                      <span className="text-base flex flex-col font-semibold text-[#1e1e1e]/70">{employeePercent}%</span>
                      <span className="text-[10px] flex flex-col font-semibold text-[#1e1e1e]/70">Employee</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-sm font-medium text-gray-500 pb-3">
                    Sources
                  </th>
                  <th className="text-left text-sm font-medium text-gray-500 pb-3">
                    Current weight
                  </th>
                  <th className="text-right text-sm font-medium text-gray-500 pb-3">
                    YTD value
                  </th>
                </tr>
              </thead>
              <tbody>
                {contributionSources.map((item) => (
                  <tr 
                    key={item.source} 
                    className={`border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                      hoveredRow === item.source ? "bg-gray-50" : ""
                    } ${
                      hoveredSegment && item.type !== hoveredSegment ? "opacity-50" : "opacity-100"
                    }`}
                    onMouseEnter={() => {
                      setHoveredRow(item.source)
                      setHoveredSegment(item.type)
                    }}
                    onMouseLeave={() => {
                      setHoveredRow(null)
                      setHoveredSegment(null)
                    }}
                  >
                    <td className="py-3 text-sm text-gray-700">{item.source}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all duration-300`}
                            style={{ 
                              width: `${item.weight}%`,
                              transform: hoveredRow === item.source ? "scaleY(1.5)" : "scaleY(1)",
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {item.weight.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-right text-sm text-gray-700">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
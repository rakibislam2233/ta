"use client"

import MainLayout from "@/components/layout/MainLayout"
import { Eye, EyeOff, ArrowDown, ArrowUp, RefreshCw, Calendar, Filter, TrendingUp, TrendingDown, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function WalletPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  const transactions = [
    {
      id: 1,
      type: "gift",
      from: "@Davide_R",
      description: "Gift from @Davide_R",
      detail: "Live Stream",
      amount: 50.0,
      status: "Completed",
      time: "Today, 10:45 AM",
      color: "bg-green-500",
    },
    {
      id: 2,
      type: "withdrawal",
      from: "Chase Bank",
      description: "Withdrawal to Chase Bank",
      detail: "**** 4829",
      amount: -500.0,
      status: "Processed",
      time: "Yesterday, 4:20 PM",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "job",
      from: "CreativeAgency",
      description: "Graphic Design Job",
      detail: "Video Post",
      amount: 1200.0,
      status: "Completed",
      time: "Oct 24, 2:15 PM",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "gift",
      from: "@Sarah_S",
      description: "Gift from @Sarah_S",
      detail: "Comment Gift",
      amount: 15.0,
      status: "Pending Release",
      time: "Oct 23, 8:30 AM",
      color: "bg-yellow-500",
    },
  ]

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#9419e6] to-[#7a14c4] rounded-2xl p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-white/90 text-sm font-medium">AVAILABLE BALANCE</span>
            </div>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {balanceVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl font-bold text-white">
              {balanceVisible ? "$24,593.00" : "••••••"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Button className="bg-white/20 hover:bg-white/30 text-white rounded-lg h-12 font-semibold">
              <ArrowDown className="h-5 w-5 mr-2" />
              Deposit
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white rounded-lg h-12 font-semibold">
              <ArrowUp className="h-5 w-5 mr-2" />
              Withdraw
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white rounded-lg h-12 font-semibold">
              <RefreshCw className="h-5 w-5 mr-2" />
              History
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-[#4a3c53]/30">
          {["Overview", "Transactions", "Deposit", "Withdraw", "Payment Methods"].map((tab, index) => (
            <button
              key={tab}
              className={`pb-4 px-2 border-b-2 transition-colors ${
                index === 0
                  ? "border-[#9419e6] text-white font-semibold"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Earned</p>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-white">$8,430.50</p>
          </div>
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Spent</p>
              <TrendingDown className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-white">$1,240.00</p>
          </div>
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Gifts Received</p>
              <Gift className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-white">450 Gifts</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold text-lg">Recent Transactions</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
              >
                <Calendar className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
              >
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center gap-4 p-4 bg-[#2a2330] rounded-lg hover:bg-[#332840] transition-colors"
              >
                <div className={`w-12 h-12 rounded-full ${transaction.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-semibold text-sm">
                    {transaction.from.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold mb-1">{transaction.description}</p>
                  <p className="text-gray-400 text-sm">{transaction.detail}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-bold mb-1 ${
                      transaction.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-xs">{transaction.time}</p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      transaction.status === "Completed" || transaction.status === "Processed"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-orange-500/20 text-orange-500"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-[#9419e6] hover:underline font-medium">View All History</button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


"use client"

import { StatsCard } from "@/components/admin/stats-card"
import { ShoppingBag, Users, DollarSign, Activity } from "lucide-react"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const performanceData = [
    { name: "Jan", value: 35 },
    { name: "Feb", value: 65 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 70 },
    { name: "May", value: 50 },
    { name: "Jun", value: 60 },
    { name: "Jul", value: 40 },
    { name: "Aug", value: 45 },
    { name: "Sep", value: 80 },
    { name: "Oct", value: 50 },
    { name: "Nov", value: 60 },
    { name: "Dec", value: 70 },
]

const conversionData = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 30 },
]

const COLORS = ["#ff6b00", "#e5e7eb"]

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Dashboard
                </h1>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Orders"
                    value="13,647"
                    icon={ShoppingBag}
                    trend="2.3%"
                    trendUp={true}
                    description="Last Week"
                />
                <StatsCard
                    title="New Leads"
                    value="9,526"
                    icon={Users}
                    trend="8.1%"
                    trendUp={true}
                    description="Last Month"
                />
                <StatsCard
                    title="Deals"
                    value="976"
                    icon={Activity}
                    trend="0.3%"
                    trendUp={false}
                    description="Last Month"
                />
                <StatsCard
                    title="Booked Revenue"
                    value="$123.6k"
                    icon={DollarSign}
                    trend="10.6%"
                    trendUp={false}
                    description="Last Month"
                />
                <StatsCard
                    title="Status do Sistema"
                    value="Online"
                    icon={Activity}
                    trend="Normal"
                    trendUp={true}
                    description="Modo Manutenção: OFF"
                />
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Performance Chart */}
                <Card className="col-span-2 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={performanceData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "#6b7280", fontSize: 12 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "#6b7280", fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                                        cursor={{ fill: "#f3f4f6" }}
                                    />
                                    <Bar
                                        dataKey="value"
                                        fill="#ff6b00"
                                        radius={[4, 4, 0, 0]}
                                        barSize={20}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Conversions Chart */}
                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Conversions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={conversionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {conversionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-[#ff6b00]" />
                                    <span>Completed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-gray-200" />
                                    <span>Pending</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

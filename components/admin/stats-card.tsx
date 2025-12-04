import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
    title: string
    value: string
    icon: LucideIcon
    trend?: string
    trendUp?: boolean
    description?: string
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp, description }: StatsCardProps) {
    return (
        <Card className="border-none shadow-sm">
            <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6b00]/10">
                        <Icon className="h-6 w-6 text-[#ff6b00]" />
                    </div>
                    {trend && (
                        <div className={`flex items-center text-sm font-medium ${trendUp ? "text-green-600" : "text-red-600"}`}>
                            {trend}
                            <span className="ml-1 text-xs text-muted-foreground">
                                {description}
                            </span>
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <h3 className="text-sm font-medium text-muted-foreground">
                        {title}
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                        {value}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CourseCardProps {
    title: string
    description: string
    price: string
    rating: number
    image: string
    slug: string
    tag?: string
}

export function CourseCard({ title, description, price, rating, image, slug, tag }: CourseCardProps) {
    return (
        <Card className="bg-white dark:bg-dark-200 border-none shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {tag && (
                    <Badge className="absolute top-3 right-3 bg-primary text-dark-500 font-bold hover:bg-primary">
                        {tag}
                    </Badge>
                )}
            </div>

            <CardContent className="p-6 flex-grow space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < rating ? "text-primary fill-primary" : "text-gray-300"}`}
                            />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">({rating}.0)</span>
                    </div>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> 20h
                    </span>
                </div>

                <h3 className="text-xl font-bold text-dark-500 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-white/5">
                    <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image src="https://github.com/shadcn.png" alt="Instrutor" fill />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Mike Oliveira</span>
                </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{price}</span>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-dark-500 font-semibold">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar
                </Button>
            </CardFooter>
        </Card>
    )
}

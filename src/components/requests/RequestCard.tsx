import Image from "next/image"
import { Clock, MapPin, ArrowRight } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

interface RequestCardProps {
  title: string
  location: string
  description: string
  image: string
  type: "Adoption" | "Medical Aid" | "Emergency"
  postedTime: string
}

export function RequestCard({ title, location, description, image, type, postedTime }: RequestCardProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Adoption":
        return "bg-teal-600"
      case "Medical Aid":
        return "bg-rose-600"
      case "Emergency":
        return "bg-amber-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        <Badge className={`absolute top-2 right-2 ${getBadgeColor(type)}`}>{type}</Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> {postedTime}
        </div>
        <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
          Details <ArrowRight className="h-3 w-3 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

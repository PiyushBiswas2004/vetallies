"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Clock, ArrowRight, PawPrint } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components//layout/header"
import Footer from "@/components/layout/footer"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for requests
const requests = [
  {
    id: 1,
    title: "Luna needs a home",
    type: "adoption",
    location: "Downtown Area",
    description: "Friendly female cat, approximately 2 years old, vaccinated and spayed.",
    postedAt: "2 days ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Max needs surgery",
    type: "medical",
    location: "Westside Park",
    description: "Young dog with a broken leg needs surgery. Already in foster care but needs funds.",
    postedAt: "1 day ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Puppies need rescue",
    type: "emergency",
    location: "Industrial District",
    description: "5 puppies found abandoned in a box. Need immediate foster or rescue.",
    postedAt: "5 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Oliver seeks quiet home",
    type: "adoption",
    location: "Eastside",
    description: "Senior cat needs a peaceful retirement home. Good with other calm pets.",
    postedAt: "3 days ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Bella needs medical care",
    type: "medical",
    location: "North Hills",
    description: "Stray cat with eye infection needs medical attention and temporary foster.",
    postedAt: "12 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Charlie needs a foster",
    type: "adoption",
    location: "South Bay",
    description: "Friendly male dog, good with kids and other pets. Owner moving and can't take him.",
    postedAt: "4 days ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Injured bird found",
    type: "emergency",
    location: "City Park",
    description: "Small bird with injured wing found in the park. Needs immediate care.",
    postedAt: "3 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Daisy needs medication",
    type: "medical",
    location: "West End",
    description: "Senior dog needs ongoing medication for heart condition. Looking for sponsors.",
    postedAt: "2 days ago",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BrowseRequestsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Filter requests based on active tab and search query
  const filteredRequests = requests.filter((request) => {
    // Filter by type
    if (activeTab !== "all" && request.type !== activeTab) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !request.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "adoption":
        return "bg-teal-600"
      case "medical":
        return "bg-rose-600"
      case "emergency":
        return "bg-amber-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
    <Header />
    {/* Main content */}
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Help Requests</h1>
          <p className="text-muted-foreground">Find animals in need of your help and support</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Link href="/post-request" className="flex items-center gap-1">
            <PawPrint className="h-4 w-4" />
            Post a Request
          </Link>
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar with filters */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-lg border p-4 sticky top-20">
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                {showFilters ? "Hide" : "Show"}
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="space-y-4">
                <h3 className="font-medium">Request Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-adoption" />
                    <Label htmlFor="type-adoption">Adoption</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-medical" />
                    <Label htmlFor="type-medical">Medical Aid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-emergency" />
                    <Label htmlFor="type-emergency">Emergency</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Animal Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="animal-cat" />
                    <Label htmlFor="animal-cat">Cats</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="animal-dog" />
                    <Label htmlFor="animal-dog">Dogs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="animal-other" />
                    <Label htmlFor="animal-other">Other Animals</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Location</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="downtown">Downtown</SelectItem>
                    <SelectItem value="north">North Area</SelectItem>
                    <SelectItem value="east">East Side</SelectItem>
                    <SelectItem value="west">West Side</SelectItem>
                    <SelectItem value="south">South Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Date Posted</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="date-today" />
                    <Label htmlFor="date-today">Today</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="date-week" />
                    <Label htmlFor="date-week">This Week</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="date-month" />
                    <Label htmlFor="date-month">This Month</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Search and filter bar */}
          <div className="bg-white rounded-lg border p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by keyword, location, or description"
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="sm:w-auto gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>

          {/* Tabs for filtering */}
          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="all">All Requests</TabsTrigger>
              <TabsTrigger value="adoption">Adoption</TabsTrigger>
              <TabsTrigger value="medical">Medical Aid</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredRequests.length} of {requests.length} requests
            </p>
          </div>

          {/* Request cards */}
          {filteredRequests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRequests.map((request) => (
                <Card key={request.id} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={request.image || "/placeholder.svg"}
                      alt={request.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getBadgeColor(request.type)}`}>
                      {request.type.charAt(0).toUpperCase() + request.type.slice(1)}
                    </Badge>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{request.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {request.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm">{request.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> Posted {request.postedAt}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0"
                    >
                      Details <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/20 rounded-lg">
              <p className="text-muted-foreground mb-2">No requests match your search criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setActiveTab("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredRequests.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-teal-50">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

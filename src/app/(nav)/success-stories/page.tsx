"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Search, ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components//layout/header"
import Footer from "@/components/layout/footer"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample success stories data
const successStories = [
  {
    id: 1,
    title: "Buddy's New Beginning",
    description:
      "I found Buddy through Stray Haven after he was rescued from the streets. He was scared and malnourished, but with love and care, he's now the happiest dog. Thank you Stray Haven for bringing us together!",
    outcome: "Adopted after 3 weeks",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Sarah M.",
      role: "Adopter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
    category: "adoption",
  },
  {
    id: 2,
    title: "The Miracle Litter",
    description:
      "We found a litter of 4 kittens abandoned in a park. Through Stray Haven, we raised funds for their care and found loving homes for all of them within a month. The platform made coordination so easy!",
    outcome: "All kittens adopted",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Michael J.",
      role: "Volunteer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
    category: "rescue",
  },
  {
    id: 3,
    title: "Max's Recovery Journey",
    description:
      "Max was hit by a car and needed emergency surgery. Thanks to the generous donations from the Stray Haven community, we were able to cover his medical expenses. He's now fully recovered and living his best life!",
    outcome: "Fully recovered",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Dr. Emily R.",
      role: "Veterinarian",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
    category: "medical",
  },
  {
    id: 4,
    title: "Luna's Second Chance",
    description:
      "Luna was found abandoned in a box outside a shelter. She was severely malnourished and scared of humans. After months of rehabilitation and patience, she's now a loving companion who enjoys cuddles and playtime.",
    outcome: "Adopted after 4 months",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Jessica T.",
      role: "Foster Parent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
    category: "adoption",
  },
  {
    id: 5,
    title: "Charlie's Transformation",
    description:
      "Charlie was rescued from a hoarding situation. He had never known love or proper care. With patience, training, and lots of love, he's now a confident and happy dog who loves to play fetch and go on adventures.",
    outcome: "Adopted after 2 months",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Mark S.",
      role: "Adopter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
    category: "adoption",
  },
  {
    id: 6,
    title: "Saving the Stranded Puppies",
    description:
      "A litter of puppies was found stranded after a flood. Through the quick response of our emergency team and the support of the community, we were able to rescue all 6 puppies and provide them with medical care and shelter.",
    outcome: "All puppies rescued",
    image: "/placeholder.svg?height=300&width=300",
    person: {
      name: "Rescue Team",
      role: "Emergency Response",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
    category: "rescue",
  },
]

export default function SuccessStoriesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter stories based on active tab and search query
  const filteredStories = successStories.filter((story) => {
    // Filter by category
    if (activeTab !== "all" && story.category !== activeTab) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !story.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !story.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  // Featured stories
  const featuredStories = successStories.filter((story) => story.featured)

  return (
    <div className="flex min-h-screen flex-col">
    <Header />
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every day, animals find loving homes through Stray Haven. Here are some heartwarming success stories that
          inspire our work.
        </p>
      </div>

      {/* Featured Stories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="w-full md:w-3/5 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={story.person.avatar || "/placeholder.svg"} alt={story.person.name} />
                      <AvatarFallback>
                        {story.person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{story.person.name}</p>
                      <p className="text-xs text-muted-foreground">{story.person.role}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">"{story.description}"</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-teal-600">{story.outcome}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search success stories"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Stories</TabsTrigger>
              <TabsTrigger value="adoption">Adoptions</TabsTrigger>
              <TabsTrigger value="rescue">Rescues</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* All Success Stories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Success Stories</h2>
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-teal-600">
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    By {story.person.name} ({story.person.role})
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm line-clamp-3">{story.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-teal-600">
                    <CheckCircle className="h-3 w-3" /> {story.outcome}
                  </div>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">No stories found</p>
            <p className="text-muted-foreground mb-4">
              We couldn't find any success stories matching your search criteria.
            </p>
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
      </div>

      {/* Share Your Story CTA */}
      <div className="mt-16 bg-teal-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have a Success Story to Share?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Did you adopt a pet through Stray Haven? Or perhaps you helped rescue an animal in need? We'd love to hear
          your story and share it with our community.
        </p>
        <Button className="bg-teal-600 hover:bg-teal-700">Share Your Story</Button>
      </div>

      {/* Pagination */}
      {filteredStories.length > 0 && (
        <div className="flex justify-center mt-12">
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
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  )
}

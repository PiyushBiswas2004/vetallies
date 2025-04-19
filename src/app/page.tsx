"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  PawPrint,
  Bell,
  Search,
  DollarSign,
  LogIn,
  Menu,
  X,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function HomePage() {
  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
              Helping strays find homes since 2023
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Every paw matters.
              <br />
              <span className="text-teal-600">Help a stray today.</span>
            </h1>
            <p className="mb-8 max-w-[700px] text-muted-foreground md:text-xl">
              VatAllies connects animal lovers with strays in need. Post help requests, find animals to adopt, or
              donate to save a life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/post-request">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Post a Help Request
              </Button>              
              </Link>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                View Urgent Cases
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-200 opacity-50 blur-xl"></div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-teal-200 opacity-50 blur-xl"></div>
          <div className="absolute bottom-12 right-12 h-16 w-16 rounded-full bg-teal-300 opacity-30 blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-amber-100 opacity-40 blur-xl"></div>
        </section>

        {/* Notification Alert */}
        <section className="bg-amber-50 py-3">
          <div className="container">
            <div className="flex items-center justify-center gap-2 text-sm text-amber-800">
              <Bell className="h-4 w-4" />
              <p>
                <strong>Urgent:</strong> 5 puppies found in Downtown area need emergency foster care.{" "}
                <Link href="#" className="underline font-medium">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Recent Help Requests */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Recent Help Requests</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These animals need your help right now. Browse through recent requests or filter by type of assistance
                needed.
              </p>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mx-auto flex justify-center">
                <TabsTrigger value="all">All Requests</TabsTrigger>
                <TabsTrigger value="adoption">Adoption</TabsTrigger>
                <TabsTrigger value="medical">Medical Aid</TabsTrigger>
                <TabsTrigger value="emergency">Emergency</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Request Card 1 */}
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Stray cat" fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-teal-600">Adoption</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Luna needs a home</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Downtown Area
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">Friendly female cat, approximately 2 years old, vaccinated and spayed.</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> Posted 2 days ago
                  </div>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    Details <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Request Card 2 */}
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Injured dog" fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-rose-600">Medical Aid</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Max needs surgery</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Westside Park
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">
                    Young dog with a broken leg needs surgery. Already in foster care but needs funds.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> Posted 1 day ago
                  </div>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    Details <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Request Card 3 */}
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Stray puppies"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-600">Emergency</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Puppies need rescue</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Industrial District
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">5 puppies found abandoned in a box. Need immediate foster or rescue.</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> Posted 5 hours ago
                  </div>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    Details <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Request Card 4 */}
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Senior cat" fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-teal-600">Adoption</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Oliver seeks quiet home</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Eastside
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">Senior cat needs a peaceful retirement home. Good with other calm pets.</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> Posted 3 days ago
                  </div>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    Details <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                View All Requests
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-teal-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Helping a stray animal is easy with Stray Haven. Follow these simple steps to make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PawPrint className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Post</h3>
                <p className="text-muted-foreground">
                  Create a help request with details about the animal and the type of assistance needed.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-muted-foreground">
                  Connect with volunteers, donors, or adopters who can provide the help you need.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rescue</h3>
                <p className="text-muted-foreground">
                  Complete the rescue mission and share the success story to inspire others.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/post-request">
              <Button className="bg-teal-600 hover:bg-teal-700">Post a Help Request</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every day, animals find loving homes through Stray Haven. Here are some heartwarming success stories.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Story 1 */}
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Rescued dog with new family"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-3/5 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah M.</p>
                        <p className="text-xs text-muted-foreground">Adopter</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Buddy's New Beginning</h3>
                    <p className="text-muted-foreground mb-4">
                      "I found Buddy through Stray Haven after he was rescued from the streets. He was scared and
                      malnourished, but with love and care, he's now the happiest dog. Thank you Stray Haven for
                      bringing us together!"
                    </p>
                    <div className="flex items-center gap-1 text-amber-500">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span className="text-sm text-teal-600">Adopted after 3 weeks</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Story 2 */}
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Rescued kittens"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-3/5 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael J.</p>
                        <p className="text-xs text-muted-foreground">Volunteer</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Miracle Litter</h3>
                    <p className="text-muted-foreground mb-4">
                      "We found a litter of 4 kittens abandoned in a park. Through Stray Haven, we raised funds for
                      their care and found loving homes for all of them within a month. The platform made coordination
                      so easy!"
                    </p>
                    <div className="flex items-center gap-1 text-amber-500">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span className="text-sm text-teal-600">All kittens adopted</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Read More Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 bg-white text-teal-800">
                  Make a Difference
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Your Donation Saves Lives</h2>
                <p className="text-muted-foreground mb-6">
                  Every donation helps us rescue more animals in need. Your contribution provides food, shelter, medical
                  care, and helps us find forever homes for strays.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">100% Transparent</h4>
                      <p className="text-sm text-muted-foreground">
                        We publish monthly reports showing how every dollar is spent.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Direct Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Your donation goes directly to animal care and rescue operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Tax Deductible</h4>
                      <p className="text-sm text-muted-foreground">
                        All donations are tax-deductible as we are a registered non-profit.
                      </p>
                    </div>
                  </div>
                </div>

                
                <Link href="/donate">
                <Button className="bg-teal-600 hover:bg-teal-700">Donate Now</Button>
                </Link>
              </div>

              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>Make a Donation</CardTitle>
                  <CardDescription>Choose an amount or enter a custom value</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                    >
                      $10
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                      >
                      $25
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                      >
                      $50
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                      >
                      $100
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                      >
                      $250
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                      >
                      Custom
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Proceed to Payment</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer & Partner Sign-up */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're an individual who wants to volunteer or an organization looking to partner with us, we'd
                love to have you join our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Volunteer */}
              <Card>
                <CardHeader>
                  <CardTitle>Become a Volunteer</CardTitle>
                  <CardDescription>
                    Help with animal rescue, transportation, fostering, or event organization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="volunteer-name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="volunteer-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volunteer-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="volunteer-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volunteer-phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="volunteer-phone" placeholder="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volunteer-interest" className="text-sm font-medium">
                      Areas of Interest
                    </label>
                    <select
                      id="volunteer-interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select an option</option>
                      <option value="rescue">Animal Rescue</option>
                      <option value="transport">Transportation</option>
                      <option value="fostering">Fostering</option>
                      <option value="events">Event Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Submit Application</Button>
                </CardFooter>
              </Card>

              {/* Partner */}
              <Card>
                <CardHeader>
                  <CardTitle>Become a Partner</CardTitle>
                  <CardDescription>
                    Partner with us as a veterinary clinic, pet supply store, or other animal welfare organization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="partner-org" className="text-sm font-medium">
                      Organization Name
                    </label>
                    <Input id="partner-org" placeholder="Organization name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="partner-contact" className="text-sm font-medium">
                      Contact Person
                    </label>
                    <Input id="partner-contact" placeholder="Contact person's name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="partner-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="partner-email" type="email" placeholder="contact@organization.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="partner-type" className="text-sm font-medium">
                      Organization Type
                    </label>
                    <select
                      id="partner-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select an option</option>
                      <option value="vet">Veterinary Clinic</option>
                      <option value="petstore">Pet Supply Store</option>
                      <option value="shelter">Animal Shelter</option>
                      <option value="ngo">Non-profit Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Request Partnership</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of animal lovers who are already making a difference in the lives of stray animals. Every
              action counts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/post-request">
              <Button size="lg" variant="outline" className="border-white text-teal-600 hover:bg-teal-700">
                Post a Help Request
              </Button>
              </Link>
              <Link href="/browse-requests">
              <Button size="lg" variant="outline" className="border-white text-teal-600 hover:bg-teal-700">
                Browse Requests
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
  )
}

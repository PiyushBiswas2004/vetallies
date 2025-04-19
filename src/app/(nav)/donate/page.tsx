"use client"
import { useState } from "react"
import { Heart, Shield, CheckCircle, CreditCard, DollarSign } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components//layout/footer"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function DonatePage() {

  const [donationAmount,setDonationAmount] = useState<string>("25")
    const [donationType, setDonationType] = useState<string>("one-time")
    const [paymentMethod, setPaymentMethod] = useState<string>("card")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Donation Saves Lives</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every donation helps us rescue more animals in need. Your contribution provides food, shelter, medical care,
          and helps us find forever homes for strays.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Donation Form */}
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Choose an amount and payment method</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Donation Type */}
            <div className="space-y-3">
              <Label>Donation Type</Label>
              <Tabs defaultValue="one-time" onValueChange={setDonationType} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                </TabsList>
              </Tabs>
              {donationType === "monthly" && (
                <p className="text-sm text-muted-foreground">
                  Monthly donations provide consistent support for our ongoing rescue operations.
                </p>
              )}
            </div>

            {/* Donation Amount */}
            <div className="space-y-3">
              <Label>Donation Amount</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant={donationAmount === "10" ? "default" : "outline"}
                  className={
                    donationAmount === "10"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("10")}
                >
                  $10
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "25" ? "default" : "outline"}
                  className={
                    donationAmount === "25"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("25")}
                >
                  $25
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "50" ? "default" : "outline"}
                  className={
                    donationAmount === "50"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("50")}
                >
                  $50
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "100" ? "default" : "outline"}
                  className={
                    donationAmount === "100"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("100")}
                >
                  $100
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "250" ? "default" : "outline"}
                  className={
                    donationAmount === "250"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("250")}
                >
                  $250
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "custom" ? "default" : "outline"}
                  className={
                    donationAmount === "custom"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-200 hover:bg-teal-50 hover:border-teal-300"
                  }
                  onClick={() => setDonationAmount("custom")}
                >
                  Custom
                </Button>
              </div>

              {donationAmount === "custom" && (
                <div className="mt-3">
                  <Label htmlFor="custom-amount">Enter Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="custom-amount" placeholder="Enter amount" className="pl-9" />
                  </div>
                </div>
              )}
            </div>

            <Separator />

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-medium">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
            </div>

            <Separator />

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="font-medium">Payment Method</h3>
              <RadioGroup defaultValue="card" onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=16&width=16" alt="PayPal" width={16} height={16} />
                    PayPal
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="newsletter" className="mt-1" />
              <Label htmlFor="newsletter" className="text-sm font-normal">
                Sign me up for the newsletter to receive updates about rescued animals and upcoming events
              </Label>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              {donationType === "one-time" ? "Donate" : "Start Monthly Donation"}{" "}
              {donationAmount !== "custom" && `$${donationAmount}`}
            </Button>
          </CardFooter>
        </Card>

        {/* Impact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
              <CardDescription>See how your donation helps animals in need</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Goal: $10,000</span>
                  <span>$7,250 raised</span>
                </div>
                <Progress value={72.5} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground">72.5% of our monthly goal reached</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-teal-600 mb-2">142</p>
                  <p className="text-sm text-muted-foreground">Animals rescued this month</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-teal-600 mb-2">87</p>
                  <p className="text-sm text-muted-foreground">Animals adopted this month</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">What Your Donation Provides</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Heart className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">$25 provides</p>
                      <p className="text-sm text-muted-foreground">Food and basic care for one animal for a week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">$50 provides</p>
                      <p className="text-sm text-muted-foreground">Vaccinations and preventative medications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">$100 provides</p>
                      <p className="text-sm text-muted-foreground">Spay/neuter surgery and microchipping</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Donation Transparency</CardTitle>
              <CardDescription>How we use your donations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Animal Care & Medical</span>
                  <span className="font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-muted" />

                <div className="flex items-center justify-between">
                  <span>Rescue Operations</span>
                  <span className="font-medium">20%</span>
                </div>
                <Progress value={20} className="h-2 bg-muted" />

                <div className="flex items-center justify-between">
                  <span>Education & Outreach</span>
                  <span className="font-medium">15%</span>
                </div>
                <Progress value={15} className="h-2 bg-muted" />

                <div className="flex items-center justify-between">
                  <span>Administrative Costs</span>
                  <span className="font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2 bg-muted" />

                <p className="text-sm text-muted-foreground mt-4">
                  We're committed to transparency. 95% of all donations go directly to animal care, rescue operations,
                  and community education.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Donors Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground mb-4">
                "I've been donating monthly for a year now. It's amazing to see the updates about animals that have been
                helped through these donations."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="font-medium text-teal-600">JD</span>
                </div>
                <div>
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Monthly Donor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground mb-4">
                "After adopting my cat from VetAllies, I decided to give back. The transparency about how funds are
                used made me confident in my donation."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="font-medium text-teal-600">MS</span>
                </div>
                <div>
                  <p className="font-medium">Michael Smith</p>
                  <p className="text-xs text-muted-foreground">Adopter & Donor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground mb-4">
                "I can't adopt right now, but donating helps me feel like I'm still making a difference in these
                animals' lives. The impact reports are great."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="font-medium text-teal-600">AJ</span>
                </div>
                <div>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-xs text-muted-foreground">One-time Donor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

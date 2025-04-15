"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PawPrint, MapPin, Camera, Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function PostRequestPage() {
  const router = useRouter()
  const [requestType, setRequestType] = useState("adoption")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/request-submitted")
    }, 1500)
  }

  return (
    <div className="container py-10 max-w-3xl">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex items-center gap-2 mb-6">
        <PawPrint className="h-6 w-6 text-teal-600" />
        <h1 className="text-3xl font-bold">Post a Help Request</h1>
      </div>

      <p className="text-muted-foreground mb-8">
        Fill out the form below to create a help request for a stray animal. Provide as much detail as possible to help
        potential rescuers or adopters.
      </p>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Animal Information</CardTitle>
            <CardDescription>Tell us about the animal that needs help</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="animal-type">Animal Type</Label>
              <RadioGroup defaultValue="cat" id="animal-type" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cat" id="cat" />
                  <Label htmlFor="cat">Cat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dog" id="dog" />
                  <Label htmlFor="dog">Dog</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other-animal" />
                  <Label htmlFor="other-animal">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="animal-name">Name (if known)</Label>
              <Input id="animal-name" placeholder="Animal's name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Approximate Age</Label>
                <Input id="age" placeholder="e.g., 2 years" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender (if known)</Label>
                <RadioGroup defaultValue="unknown" id="gender" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unknown" id="unknown" />
                    <Label htmlFor="unknown">Unknown</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the animal's appearance, behavior, and any special needs"
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Upload Photos</Label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Camera className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop photos here or click to browse</p>
                <Button type="button" variant="outline" size="sm" className="gap-1">
                  <Upload className="h-4 w-4" />
                  Upload Photos
                </Button>
              </div>
            </div>
          </CardContent>

          <Separator />

          <CardHeader>
            <CardTitle>Request Details</CardTitle>
            <CardDescription>Specify what kind of help is needed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="request-type">Request Type</Label>
              <RadioGroup
                defaultValue="adoption"
                id="request-type"
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                onValueChange={setRequestType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="adoption" id="adoption" />
                  <Label htmlFor="adoption">Adoption</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medical" id="medical" />
                  <Label htmlFor="medical">Medical Aid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="emergency" id="emergency" />
                  <Label htmlFor="emergency">Emergency Rescue</Label>
                </div>
              </RadioGroup>
            </div>

            {requestType === "medical" && (
              <div className="space-y-2">
                <Label htmlFor="medical-needs">Medical Needs</Label>
                <Textarea
                  id="medical-needs"
                  placeholder="Describe the medical condition and what kind of help is needed"
                  className="min-h-[100px]"
                />
              </div>
            )}

            {requestType === "emergency" && (
              <div className="space-y-2 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-medium">Emergency Rescue</p>
                <p className="text-sm text-amber-700">
                  For urgent situations where an animal is in immediate danger. Our team will prioritize these requests.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex gap-2">
                <Input id="location" placeholder="Where is the animal located?" className="flex-1" />
                <Button type="button" variant="outline" size="icon" className="shrink-0">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Enter an address or use the map pin to share your location
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea
                id="additional-info"
                placeholder="Any other details that might help potential rescuers or adopters"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>

          <Separator />

          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How can potential helpers reach you?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="(123) 456-7890" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <Link href="/terms" className="text-teal-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-teal-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-end">
            <Button type="button" variant="outline" onClick={() => router.push("/")}>
              Cancel
            </Button>
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

import { Shield, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"

export function DonationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Donation Info */}
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

            <Button className="bg-teal-600 hover:bg-teal-700">Donate Now</Button>
          </div>

          {/* Donation Form */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Make a Donation</CardTitle>
              <CardDescription>Choose an amount or enter a custom value</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
                  $10
                </Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
                  $25
                </Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
                  $50
                </Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
                  $100
                </Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
                  $250
                </Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-50 hover:border-teal-300">
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
  )
}
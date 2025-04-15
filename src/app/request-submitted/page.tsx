"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function RequestSubmittedPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-teal-100 p-4 rounded-full">
            <CheckCircle className="h-12 w-12 text-teal-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>

        <p className="text-muted-foreground mb-6">
          Thank you for submitting your help request. Our team will review it shortly and connect you with potential
          helpers.
        </p>

        <p className="text-muted-foreground mb-8">
          You will be redirected to the home page in {countdown} seconds, or you can click the button below.
        </p>

        <div className="flex flex-col gap-4">
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/browse-requests">Browse Other Requests</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

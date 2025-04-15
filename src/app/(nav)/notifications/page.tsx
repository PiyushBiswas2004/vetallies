"use client"

import { useState } from "react"
import { Bell, Clock, MapPin, PawPrint, Heart, AlertTriangle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "emergency",
    title: "Emergency: Puppies found in Downtown",
    description: "5 puppies found abandoned in Downtown area need emergency foster care.",
    location: "Downtown Area",
    time: "2 hours ago",
    isRead: false,
  },
  {
    id: 2,
    type: "request",
    title: "Your request has been approved",
    description:
      "Your help request for 'Luna needs a home' has been approved and is now visible to potential adopters.",
    time: "Yesterday",
    isRead: true,
  },
  {
    id: 3,
    type: "donation",
    title: "Thank you for your donation!",
    description: "Your donation of $50 will help provide food and care for animals in need.",
    time: "2 days ago",
    isRead: true,
  },
  {
    id: 4,
    type: "emergency",
    title: "Emergency: Injured cat found",
    description: "Injured cat found in Westside Park needs immediate medical attention.",
    location: "Westside Park",
    time: "3 days ago",
    isRead: true,
  },
  {
    id: 5,
    type: "event",
    title: "Upcoming Adoption Event",
    description: "Join us this Saturday for our monthly adoption event at City Park from 10am to 4pm.",
    location: "City Park",
    time: "4 days ago",
    isRead: false,
  },
  {
    id: 6,
    type: "request",
    title: "New message about your request",
    description: "Sarah has sent you a message about your help request 'Max needs surgery'.",
    time: "5 days ago",
    isRead: false,
  },
  {
    id: 7,
    type: "success",
    title: "Success Story: Charlie found a home!",
    description: "Charlie, the dog you helped rescue last month, has been adopted by a loving family.",
    time: "1 week ago",
    isRead: true,
  },
  {
    id: 8,
    type: "donation",
    title: "Monthly Donation Processed",
    description: "Your monthly donation of $25 has been processed. Thank you for your continued support!",
    time: "1 week ago",
    isRead: true,
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [notificationsList, setNotificationsList] = useState(notifications)

  // Filter notifications based on active tab
  const filteredNotifications = notificationsList.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.isRead
    return notification.type === activeTab
  })

  // Mark all as read
  const markAllAsRead = () => {
    setNotificationsList(
      notificationsList.map((notification) => ({
        ...notification,
        isRead: true,
      })),
    )
  }

  // Mark a single notification as read
  const markAsRead = (id: number) => {
    setNotificationsList(
      notificationsList.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification,
      ),
    )
  }

  // Get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "emergency":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "request":
        return <PawPrint className="h-5 w-5 text-teal-600" />
      case "donation":
        return <Heart className="h-5 w-5 text-rose-500" />
      case "event":
        return <Bell className="h-5 w-5 text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on emergencies, requests, and events</p>
        </div>
        <Button variant="outline" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar with filters and settings */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "all" ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                  onClick={() => setActiveTab("all")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  All Notifications
                </Button>
                <Button
                  variant={activeTab === "unread" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "unread" ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                  onClick={() => setActiveTab("unread")}
                >
                  <Badge className="mr-2 h-2 w-2 rounded-full bg-teal-600" />
                  Unread
                </Button>
                <Button
                  variant={activeTab === "emergency" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "emergency" ? "bg-amber-600 hover:bg-amber-700" : ""}`}
                  onClick={() => setActiveTab("emergency")}
                >
                  <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                  Emergencies
                </Button>
                <Button
                  variant={activeTab === "request" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "request" ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                  onClick={() => setActiveTab("request")}
                >
                  <PawPrint className="mr-2 h-4 w-4 text-teal-600" />
                  Requests
                </Button>
                <Button
                  variant={activeTab === "donation" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "donation" ? "bg-rose-600 hover:bg-rose-700" : ""}`}
                  onClick={() => setActiveTab("donation")}
                >
                  <Heart className="mr-2 h-4 w-4 text-rose-500" />
                  Donations
                </Button>
                <Button
                  variant={activeTab === "event" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "event" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  onClick={() => setActiveTab("event")}
                >
                  <Bell className="mr-2 h-4 w-4 text-blue-500" />
                  Events
                </Button>
                <Button
                  variant={activeTab === "success" ? "default" : "outline"}
                  className={`w-full justify-start ${activeTab === "success" ? "bg-green-600 hover:bg-green-700" : ""}`}
                  onClick={() => setActiveTab("success")}
                >
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emergency-alerts">Emergency Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts for emergency rescues</p>
                </div>
                <Switch id="emergency-alerts" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="request-updates">Request Updates</Label>
                  <p className="text-sm text-muted-foreground">Updates about your help requests</p>
                </div>
                <Switch id="request-updates" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="donation-receipts">Donation Receipts</Label>
                  <p className="text-sm text-muted-foreground">Receipts for your donations</p>
                </div>
                <Switch id="donation-receipts" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="event-notifications">Event Notifications</Label>
                  <p className="text-sm text-muted-foreground">Updates about upcoming events</p>
                </div>
                <Switch id="event-notifications" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="success-stories">Success Stories</Label>
                  <p className="text-sm text-muted-foreground">Stories about successful adoptions</p>
                </div>
                <Switch id="success-stories" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications list */}
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Your Notifications</CardTitle>
                <Badge variant="outline" className="bg-teal-50 text-teal-700">
                  {notificationsList.filter((n) => !n.isRead).length} Unread
                </Badge>
              </div>
              <CardDescription>
                {filteredNotifications.length} {activeTab === "all" ? "total" : activeTab} notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredNotifications.length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${notification.isRead ? "bg-white" : "bg-teal-50 border-teal-200"}`}
                    >
                      <div className="flex gap-4">
                        <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className={`font-medium ${notification.isRead ? "" : "text-teal-800"}`}>
                              {notification.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {notification.time}
                              </span>
                              {!notification.isRead && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Mark as read
                                </Button>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                          {notification.location && (
                            <div className="flex items-center mt-2 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" /> {notification.location}
                            </div>
                          )}
                          {notification.type === "emergency" && (
                            <Button size="sm" className="mt-3 bg-amber-600 hover:bg-amber-700 text-white">
                              View Details
                            </Button>
                          )}
                          {notification.type === "request" && (
                            <Button size="sm" className="mt-3 bg-teal-600 hover:bg-teal-700 text-white">
                              View Request
                            </Button>
                          )}
                          {notification.type === "event" && (
                            <Button size="sm" variant="outline" className="mt-3">
                              Add to Calendar
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No notifications</h3>
                  <p className="text-muted-foreground mb-4">
                    You don't have any {activeTab !== "all" ? activeTab : ""} notifications at the moment.
                  </p>
                  {activeTab !== "all" && (
                    <Button variant="outline" onClick={() => setActiveTab("all")}>
                      View All Notifications
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
            {filteredNotifications.length > 0 && (
              <CardFooter className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

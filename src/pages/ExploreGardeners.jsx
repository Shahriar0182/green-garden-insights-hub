
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data for gardeners
const gardeners = [
  {
    id: 1,
    name: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80",
    status: "Active",
    experience: "5 years",
    age: 34,
    gender: "Female",
    tipCount: 32,
    specialty: "Organic Vegetables",
  },
  {
    id: 2,
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80",
    status: "Active",
    experience: "8 years",
    age: 42,
    gender: "Male",
    tipCount: 47,
    specialty: "Fruit Trees",
  },
  {
    id: 3,
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "10 years",
    age: 38,
    gender: "Female",
    tipCount: 63,
    specialty: "Indoor Plants",
  },
  {
    id: 4,
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    status: "Active",
    experience: "6 years",
    age: 31,
    gender: "Male",
    tipCount: 28,
    specialty: "Hydroponics",
  },
  {
    id: 5,
    name: "Emma Davis",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "4 years",
    age: 29,
    gender: "Female",
    tipCount: 21,
    specialty: "Succulents",
  },
  {
    id: 6,
    name: "Robert Kim",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "7 years",
    age: 36,
    gender: "Male",
    tipCount: 39,
    specialty: "Japanese Gardens",
  },
  {
    id: 7,
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    status: "Inactive",
    experience: "3 years",
    age: 27,
    gender: "Non-binary",
    tipCount: 15,
    specialty: "Urban Gardening",
  },
  {
    id: 8,
    name: "Jessica Lee",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    status: "Inactive",
    experience: "9 years",
    age: 41,
    gender: "Female",
    tipCount: 52,
    specialty: "Medicinal Herbs",
  },
  {
    id: 9,
    name: "David Martinez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "12 years",
    age: 45,
    gender: "Male",
    tipCount: 78,
    specialty: "Permaculture",
  },
  {
    id: 10,
    name: "Olivia Williams",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    status: "Active",
    experience: "6 years",
    age: 33,
    gender: "Female",
    tipCount: 41,
    specialty: "Native Plants",
  },
];

// Only show active gardeners
const activeGardeners = gardeners.filter(gardener => gardener.status === "Active");

const ExploreGardeners = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Gardeners</h1>
      <p className="text-muted-foreground mb-8">
        Connect with our community of experienced gardening enthusiasts who share their knowledge and passion
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeGardeners.map((gardener) => (
          <Card key={gardener.id} className="overflow-hidden hover-grow">
            <CardHeader className="p-0">
              <div className="relative h-48">
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {gardener.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{gardener.name}</h3>
                <p className="text-primary font-medium">{gardener.specialty}</p>
                <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{gardener.age}, {gardener.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="h-4 w-4 text-muted-foreground" />
                    <span>{gardener.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Leaf className="h-4 w-4 text-muted-foreground" />
                    <span>{gardener.tipCount} tips shared</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;

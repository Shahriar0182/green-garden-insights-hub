
import React from "react";
import BannerSlider from "@/components/BannerSlider";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ThumbsUp, 
  Users, 
  Leaf, 
  ArrowRight,
  Badge,
  Calendar
} from "lucide-react";

// Sample data for featured gardeners
const featuredGardeners = [
  {
    id: 1,
    name: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80",
    status: "Active",
    experience: "5 years",
    tipCount: 32,
  },
  {
    id: 2,
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80",
    status: "Active",
    experience: "8 years",
    tipCount: 47,
  },
  {
    id: 3,
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "10 years",
    tipCount: 63,
  },
  {
    id: 4,
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    status: "Active",
    experience: "6 years",
    tipCount: 28,
  },
  {
    id: 5,
    name: "Emma Davis",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "4 years",
    tipCount: 21,
  },
  {
    id: 6,
    name: "Robert Kim",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    status: "Active",
    experience: "7 years",
    tipCount: 39,
  },
];

// Sample data for trending tips
const trendingTips = [
  {
    id: 1,
    title: "Growing Herbs in Small Spaces",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    difficulty: "Easy",
    likes: 245,
  },
  {
    id: 2,
    title: "Composting 101: Getting Started",
    category: "Composting",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    difficulty: "Medium",
    likes: 198,
  },
  {
    id: 3,
    title: "Vertical Gardening for Urban Homes",
    category: "Vertical Gardening",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    difficulty: "Medium",
    likes: 176,
  },
  {
    id: 4,
    title: "Natural Pest Control Methods",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1623210383368-4256663f88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    difficulty: "Easy",
    likes: 154,
  },
  {
    id: 5,
    title: "Growing Tomatoes from Seeds",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1592921031553-a87675efe427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    difficulty: "Medium",
    likes: 132,
  },
  {
    id: 6,
    title: "Indoor Plant Lighting Guide",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    difficulty: "Hard",
    likes: 121,
  },
];

// Difficulty color mapping
const difficultyColor = {
  Easy: "bg-emerald-500",
  Medium: "bg-amber-500",
  Hard: "bg-rose-500",
};

const Home = () => {
  return (
    <div>
      {/* Banner/Slider Section */}
      <BannerSlider />

      {/* Featured Gardeners Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">
              <Users className="w-6 h-6" />
              Featured Gardeners
            </h2>
            <Link to="/explore-gardeners">
              <Button variant="outline">
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {featuredGardeners.map((gardener) => (
              <Card key={gardener.id} className="overflow-hidden hover-grow">
                <div className="relative h-48">
                  <img
                    src={gardener.image}
                    alt={gardener.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                      {gardener.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{gardener.name}</h3>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Badge className="mr-2" />
                      <span>Experience: {gardener.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 mr-2" />
                      <span>{gardener.tipCount} tips shared</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Trending Tips Section */}
      <section className="py-12 px-4 md:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">
              <ThumbsUp className="w-6 h-6" />
              Top Trending Tips
            </h2>
            <Link to="/browse-tips">
              <Button variant="outline">
                Browse All <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {trendingTips.map((tip) => (
              <Card key={tip.id} className="overflow-hidden hover-grow">
                <div className="relative h-48">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`${
                      difficultyColor[tip.difficulty]
                    } px-2 py-1 rounded-full text-xs font-medium text-white`}>
                      {tip.difficulty}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {tip.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{tip.title}</h3>
                  <div className="flex justify-between items-center">
                    <Link to={`/tip-details/${tip.id}`}>
                      <Button variant="outline" size="sm">
                        See Details
                      </Button>
                    </Link>
                    <div className="flex items-center text-muted-foreground">
                      <ThumbsUp size={16} className="mr-1" />
                      <span>{tip.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Gardening Tips Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">
            <Calendar className="w-6 h-6" />
            Seasonal Gardening Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {["Spring", "Summer", "Fall", "Winter"].map((season) => (
              <Card key={season} className="hover-grow">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className={`p-4 rounded-full mb-4 ${
                    season === "Spring" ? "bg-green-100 dark:bg-green-900" :
                    season === "Summer" ? "bg-amber-100 dark:bg-amber-900" :
                    season === "Fall" ? "bg-orange-100 dark:bg-orange-900" :
                    "bg-blue-100 dark:bg-blue-900"
                  }`}>
                    <Leaf className={`w-8 h-8 ${
                      season === "Spring" ? "text-green-600 dark:text-green-400" :
                      season === "Summer" ? "text-amber-600 dark:text-amber-400" :
                      season === "Fall" ? "text-orange-600 dark:text-orange-400" :
                      "text-blue-600 dark:text-blue-400"
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{season} Gardening</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {`Discover the best practices for your garden during ${season.toLowerCase()}.`}
                  </p>
                  <Button variant="outline" className="mt-auto">Explore Tips</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 md:py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Join Our Growing Community</h2>
              <p className="text-lg mb-6">
                Connect with fellow garden enthusiasts, share your experiences, and learn
                from others. GreenGarden is more than just a platform—it's a thriving
                community of people passionate about plants and sustainable gardening.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Sign Up Today</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                  alt="Garden community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">1,200+</div>
                <div className="text-sm text-muted-foreground">Active gardeners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

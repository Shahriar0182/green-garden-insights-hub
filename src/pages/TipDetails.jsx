
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ThumbsUp, 
  Calendar, 
  User, 
  Tag, 
  BarChart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

// Sample tip data (in a real app, this would come from your API)
const tipsData = [
  {
    id: '1',
    title: "Growing Herbs in Small Spaces",
    plantType: "Herbs (Basil, Mint, Parsley)",
    difficultyLevel: "Easy",
    description: `
    <p>Growing herbs in small spaces is not only possible but highly rewarding! Here's my complete guide to maximizing your herb production in minimal space.</p>
    
    <h3>Step 1: Choose the Right Containers</h3>
    <p>For small spaces, I recommend using vertical planters, hanging baskets, or wall-mounted systems. Even small pots on a windowsill can yield impressive results. Ensure all containers have proper drainage holes.</p>
    
    <h3>Step 2: Select Your Herbs Wisely</h3>
    <p>Some herbs that grow well in small spaces include basil, chives, cilantro, mint, oregano, parsley, rosemary, and thyme. Consider which herbs you use most often in cooking.</p>
    
    <h3>Step 3: Provide Adequate Sunlight</h3>
    <p>Most herbs need at least 6 hours of direct sunlight daily. Place them near a south-facing window if possible. If natural light is limited, consider LED grow lights.</p>
    
    <h3>Step 4: Water Properly</h3>
    <p>The key is consistent moisture without overwatering. I check soil moisture by inserting my finger about an inch into the soil - if it's dry, it's time to water.</p>
    
    <h3>Step 5: Harvesting</h3>
    <p>Regular pruning encourages bushier growth. Harvest herbs in the morning when their essential oils are most concentrated. Never remove more than one-third of the plant at once.</p>
    
    <h3>Common Issues</h3>
    <ul>
      <li>Yellowing leaves often indicate overwatering</li>
      <li>Leggy growth means insufficient light</li>
      <li>Brown leaf tips may suggest under-watering or low humidity</li>
    </ul>
    
    <p>With these simple steps, you can enjoy fresh herbs year-round, even in the smallest apartment!</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Plant Care",
    availability: "Public",
    userEmail: "maria@example.com",
    userName: "Maria Rodriguez",
    userImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80",
    createdAt: "2023-10-15",
    totalLikes: 45,
  },
  {
    id: '2',
    title: "Composting 101: Getting Started",
    plantType: "N/A - Composting",
    difficultyLevel: "Medium",
    description: `
    <p>Composting is one of the best ways to reduce waste and create rich, nutritious soil for your plants. Here's my comprehensive guide for beginners!</p>
    
    <h3>Why Compost?</h3>
    <p>Composting reduces landfill waste, lowers your carbon footprint, and creates amazing nutrient-rich soil for your plants - all for free!</p>
    
    <h3>Step 1: Choose Your Composting Method</h3>
    <p>For beginners, I recommend either a simple heap, a homemade bin from wooden pallets, or a store-bought tumbler. Each has pros and cons depending on your space and needs.</p>
    
    <h3>Step 2: Understand Green vs. Brown Materials</h3>
    <ul>
      <li><strong>Green materials</strong> (nitrogen-rich): Vegetable scraps, coffee grounds, fresh grass clippings</li>
      <li><strong>Brown materials</strong> (carbon-rich): Dry leaves, cardboard, newspaper, wood chips</li>
    </ul>
    <p>The ideal ratio is roughly 3 parts brown to 1 part green materials.</p>
    
    <h3>Step 3: What to Add and What to Avoid</h3>
    <p><strong>Good for compost:</strong> Fruit/vegetable scraps, eggshells, coffee grounds, tea bags, yard trimmings, paper products</p>
    <p><strong>Avoid:</strong> Meat, dairy, oils, pet waste, diseased plants, weeds with seeds</p>
    
    <h3>Step 4: Maintain Your Compost</h3>
    <p>Turn your pile every few weeks to aerate it. Keep it as damp as a wrung-out sponge. In the right conditions, you'll have finished compost in 2-6 months.</p>
    
    <h3>Troubleshooting</h3>
    <ul>
      <li>Bad odor: Too wet or too much green material</li>
      <li>Not decomposing: Too dry or too much brown material</li>
      <li>Attracting pests: Improper materials or poor coverage</li>
    </ul>
    
    <p>With these tips, you'll be creating "black gold" for your garden in no time!</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Composting",
    availability: "Public",
    userEmail: "james@example.com",
    userName: "James Wilson",
    userImage: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80",
    createdAt: "2023-09-20",
    totalLikes: 198,
  },
];

const TipDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [tip, setTip] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Simulate API request to get tip details
  React.useEffect(() => {
    const fetchTip = async () => {
      try {
        // In a real app, you would fetch from your API
        const foundTip = tipsData.find((t) => t.id === id);
        
        // Add a small delay to simulate API call
        setTimeout(() => {
          if (foundTip) {
            setTip(foundTip);
            setLikeCount(foundTip.totalLikes);
          } else {
            toast({
              title: "Error",
              description: "Tip not found!",
              variant: "destructive",
            });
          }
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching tip:", error);
        toast({
          title: "Error",
          description: "Failed to load tip details",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchTip();
  }, [id, toast]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
      toast({
        title: "Success!",
        description: "You liked this garden tip",
      });
    } else {
      setLikeCount((prev) => prev - 1);
      setHasLiked(false);
      toast({
        description: "Like removed",
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!tip) {
    return (
      <div className="container py-8">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Tip Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The garden tip you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/browse-tips">Browse Tips</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Button asChild variant="outline" className="mb-6">
        <Link to="/browse-tips">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tips
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {tip.category}
                </Badge>
                <Badge className={`${
                  tip.difficultyLevel === "Easy" 
                    ? "bg-emerald-500" 
                    : tip.difficultyLevel === "Medium"
                    ? "bg-amber-500"
                    : "bg-rose-500"
                } text-white`}>
                  {tip.difficultyLevel}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{tip.title}</h1>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  {tip.userImage ? (
                    <img
                      src={tip.userImage}
                      alt={tip.userName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <User size={16} />
                    </div>
                  )}
                  <span className="text-muted-foreground">By {tip.userName}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span>{tip.createdAt}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Tag size={16} className="mr-1" />
                    <span>{tip.plantType}</span>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none dark:prose-invert mt-6" 
                dangerouslySetInnerHTML={{ __html: tip.description }}>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-20 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Like this tip?</h3>
                  <Button 
                    variant={hasLiked ? "default" : "outline"}
                    size="sm"
                    className="gap-2"
                    onClick={handleLike}
                  >
                    <ThumbsUp size={18} />
                    <span>{hasLiked ? "Liked" : "Like"}</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-2">
                    <ThumbsUp size={18} className="text-muted-foreground" />
                    <span className="font-medium">{likeCount}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {likeCount === 1 ? "person likes this" : "people like this"}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart size={18} />
                  Difficulty Breakdown
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Easy</span>
                      <span className="text-muted-foreground">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Medium</span>
                      <span className="text-muted-foreground">50%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Hard</span>
                      <span className="text-muted-foreground">20%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Based on our user community ratings
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Tips</h3>
                <div className="space-y-4">
                  {tipsData
                    .filter(t => t.id !== tip.id)
                    .slice(0, 2)
                    .map(relatedTip => (
                      <div key={relatedTip.id} className="flex gap-3">
                        <img
                          src={relatedTip.imageUrl}
                          alt={relatedTip.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <Link 
                            to={`/tip-details/${relatedTip.id}`}
                            className="font-medium hover:text-primary line-clamp-2"
                          >
                            {relatedTip.title}
                          </Link>
                          <div className="text-xs text-muted-foreground mt-1">
                            {relatedTip.category}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import useAuth from "@/hooks/useAuth";

// Sample tip data (in a real app, this would come from your API)
const tipsData = [
  {
    id: '1',
    title: "Growing Herbs in Small Spaces",
    plantType: "Herbs (Basil, Mint, Parsley)",
    difficultyLevel: "Easy",
    description: "Growing herbs in small spaces is not only possible but highly rewarding! Here's my complete guide to maximizing your herb production in minimal space.",
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    category: "Plant Care",
    availability: "Public",
    userEmail: "maria@example.com",
    userName: "Maria Rodriguez",
  },
  {
    id: '2',
    title: "Composting 101: Getting Started",
    plantType: "N/A - Composting",
    difficultyLevel: "Medium",
    description: "Composting is one of the best ways to reduce waste and create rich, nutritious soil for your plants. Here's my comprehensive guide for beginners!",
    imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a",
    category: "Composting",
    availability: "Public",
    userEmail: "james@example.com",
    userName: "James Wilson",
  },
];

const UpdateTip = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const difficultyLevel = watch("difficultyLevel");
  const category = watch("category");
  const availability = watch("availability");

  // Categories for gardening tips
  const categories = [
    "Plant Care",
    "Composting",
    "Vertical Gardening",
    "Indoor Plants",
    "Outdoor Gardening",
    "Hydroponics",
    "Organic Gardening",
    "DIY Projects",
    "Pest Control",
    "Seasonal Tips",
  ];

  // Simulate API request to get tip details
  useEffect(() => {
    const fetchTip = async () => {
      try {
        // In a real app, you would fetch from your API
        const foundTip = tipsData.find((t) => t.id === id);
        
        // Simulate API delay
        setTimeout(() => {
          if (foundTip) {
            // Populate form with existing data
            setValue("title", foundTip.title);
            setValue("plantType", foundTip.plantType);
            setValue("difficultyLevel", foundTip.difficultyLevel);
            setValue("description", foundTip.description);
            setValue("imageUrl", foundTip.imageUrl);
            setValue("category", foundTip.category);
            setValue("availability", foundTip.availability);
            setValue("userEmail", foundTip.userEmail);
            setValue("userName", foundTip.userName);
          } else {
            toast({
              title: "Error",
              description: "Tip not found!",
              variant: "destructive",
            });
            navigate("/my-tips");
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
        navigate("/my-tips");
      }
    };

    fetchTip();
  }, [id, setValue, navigate, toast]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // In a real app, you would call your API to update the data
      console.log("Updating tip data:", data);
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your garden tip has been updated successfully.",
      });
      
      // Navigate back to the my tips page
      navigate("/my-tips");
    } catch (error) {
      console.error("Error updating tip:", error);
      toast({
        title: "Error",
        description: "Failed to update your garden tip. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Update Garden Tip</h1>
      <p className="text-muted-foreground mb-8">
        Edit your gardening tip information
      </p>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Edit Tip Details</CardTitle>
              <CardDescription>
                Make changes to your garden tip information below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., How I Grow Tomatoes Indoors"
                  {...register("title", {
                    required: "Title is required",
                  })}
                />
                {errors.title && (
                  <p className="text-sm text-destructive">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Plant Type/Topic */}
              <div className="space-y-2">
                <Label htmlFor="plantType">Plant Type/Topic</Label>
                <Input
                  id="plantType"
                  placeholder="e.g., Tomatoes, Succulents, Composting"
                  {...register("plantType", {
                    required: "Plant type or topic is required",
                  })}
                />
                {errors.plantType && (
                  <p className="text-sm text-destructive">
                    {errors.plantType.message}
                  </p>
                )}
              </div>

              {/* Difficulty Level */}
              <div className="space-y-2">
                <Label htmlFor="difficultyLevel">Difficulty Level</Label>
                <Select
                  value={difficultyLevel}
                  onValueChange={(value) => setValue("difficultyLevel", value)}
                >
                  <SelectTrigger id="difficultyLevel">
                    <SelectValue placeholder="Select difficulty level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                {errors.difficultyLevel && (
                  <p className="text-sm text-destructive">
                    {errors.difficultyLevel.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  placeholder="Share your detailed gardening tip here..."
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/your-image.jpg"
                  {...register("imageUrl", {
                    required: "Image URL is required",
                  })}
                />
                {errors.imageUrl && (
                  <p className="text-sm text-destructive">
                    {errors.imageUrl.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category}
                  onValueChange={(value) => setValue("category", value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-destructive">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Availability */}
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select
                  value={availability}
                  onValueChange={(value) => setValue("availability", value)}
                >
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Public">Public</SelectItem>
                    <SelectItem value="Hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
                {errors.availability && (
                  <p className="text-sm text-destructive">
                    {errors.availability.message}
                  </p>
                )}
              </div>

              {/* User Info (Read-only) */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="userEmail">Your Email (Read-only)</Label>
                  <Input
                    id="userEmail"
                    value={user?.email || ""}
                    readOnly
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userName">Your Name (Read-only)</Label>
                  <Input
                    id="userName"
                    value={user?.displayName || "User"}
                    readOnly
                    className="bg-muted"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/my-tips")}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;

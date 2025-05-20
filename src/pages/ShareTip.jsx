
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import useAuth from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const ShareTip = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // In a real app, you would call your API to save the data
      console.log("Submitting tip data:", data);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your garden tip has been shared successfully.",
      });
      
      // Navigate to the my tips page
      navigate("/my-tips");
    } catch (error) {
      console.error("Error sharing tip:", error);
      toast({
        title: "Error",
        description: "Failed to share your garden tip. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Share a Garden Tip</h1>
      <p className="text-muted-foreground mb-8">
        Share your gardening knowledge and experience with our community
      </p>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Garden Tip Details</CardTitle>
              <CardDescription>
                Fill out the form below to share your gardening tip with others.
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
            <CardFooter className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Share Tip"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;

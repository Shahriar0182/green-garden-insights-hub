
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Eye, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample user tips data (in a real app, this would come from your API)
const userTipsData = [
  {
    id: 1,
    title: "Growing Herbs in Small Spaces",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    difficulty: "Easy",
    availability: "Public",
    createdAt: "2023-10-15",
    likes: 45,
  },
  {
    id: 2,
    title: "My Vertical Gardening Setup",
    category: "Vertical Gardening",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
    difficulty: "Medium",
    availability: "Public",
    createdAt: "2023-09-22",
    likes: 38,
  },
  {
    id: 3,
    title: "Experimenting with Rare Succulents",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
    difficulty: "Hard",
    availability: "Hidden",
    createdAt: "2023-11-05",
    likes: 0,
  },
  {
    id: 4,
    title: "DIY Irrigation System for Potted Plants",
    category: "DIY Projects",
    image: "https://images.unsplash.com/photo-1562351778-a451cb905e1a",
    difficulty: "Medium",
    availability: "Public",
    createdAt: "2023-10-30",
    likes: 27,
  },
];

const MyTips = () => {
  const [tips, setTips] = useState(userTipsData);
  const { toast } = useToast();

  const handleDelete = (id) => {
    // Filter out the deleted tip
    const updatedTips = tips.filter((tip) => tip.id !== id);
    setTips(updatedTips);
    
    toast({
      title: "Tip Deleted",
      description: "Your garden tip has been successfully deleted.",
    });
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Garden Tips</h1>
          <p className="text-muted-foreground">
            Manage your shared gardening knowledge
          </p>
        </div>
        <Button asChild className="mt-4 sm:mt-0">
          <Link to="/share-tip">Share New Tip</Link>
        </Button>
      </div>

      <Card className="mt-6">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tips.length > 0 ? (
                tips.map((tip) => (
                  <TableRow key={tip.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          src={tip.image}
                          alt={tip.title}
                          className="h-10 w-10 rounded object-cover"
                        />
                        {tip.title}
                      </div>
                    </TableCell>
                    <TableCell>{tip.category}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          tip.difficulty === "Easy"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                            : tip.difficulty === "Medium"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                            : "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
                        }`}
                      >
                        {tip.difficulty}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          tip.availability === "Public"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {tip.availability}
                      </span>
                    </TableCell>
                    <TableCell>{tip.likes}</TableCell>
                    <TableCell>{tip.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button asChild size="icon" variant="outline">
                          <Link to={`/tip-details/${tip.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild size="icon" variant="outline">
                          <Link to={`/update-tip/${tip.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="icon" variant="outline">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your gardening tip.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(tip.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground mb-4">
                        You haven't shared any gardening tips yet
                      </p>
                      <Button asChild>
                        <Link to="/share-tip">Share Your First Tip</Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default MyTips;


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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, Filter } from "lucide-react";

// Sample tip data (in a real app, this would come from your API)
const tipData = [
  {
    id: 1,
    title: "Growing Herbs in Small Spaces",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    difficulty: "Easy",
    createdBy: "Maria Rodriguez",
  },
  {
    id: 2,
    title: "Composting 101: Getting Started",
    category: "Composting",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a",
    difficulty: "Medium",
    createdBy: "James Wilson",
  },
  {
    id: 3,
    title: "Vertical Gardening for Urban Homes",
    category: "Vertical Gardening",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
    difficulty: "Medium",
    createdBy: "Sophia Chen",
  },
  {
    id: 4,
    title: "Natural Pest Control Methods",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1623210383368-4256663f88a5",
    difficulty: "Easy",
    createdBy: "Michael Thompson",
  },
  {
    id: 5,
    title: "Growing Tomatoes from Seeds",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1592921031553-a87675efe427",
    difficulty: "Medium",
    createdBy: "Emma Davis",
  },
  {
    id: 6,
    title: "Indoor Plant Lighting Guide",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
    difficulty: "Hard",
    createdBy: "Robert Kim",
  },
  {
    id: 7,
    title: "DIY Garden Trellis Ideas",
    category: "DIY",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    difficulty: "Medium",
    createdBy: "Maria Rodriguez",
  },
  {
    id: 8,
    title: "Winter Plant Protection Guide",
    category: "Plant Care",
    image: "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0",
    difficulty: "Hard",
    createdBy: "James Wilson",
  },
];

const BrowseTips = () => {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  
  // Apply filtering
  const filteredTips = difficultyFilter === "all" 
    ? tipData 
    : tipData.filter(tip => tip.difficulty === difficultyFilter);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Garden Tips</h1>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <p className="text-muted-foreground">
          Explore our collection of gardening tips shared by our community
        </p>
        
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <Select 
            value={difficultyFilter} 
            onValueChange={setDifficultyFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Card>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTips.map((tip) => (
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
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tip.difficulty === "Easy" 
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" 
                        : tip.difficulty === "Medium"
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                        : "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
                    }`}>
                      {tip.difficulty}
                    </span>
                  </TableCell>
                  <TableCell>{tip.createdBy}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/tip-details/${tip.id}`}>
                        <Eye className="w-4 h-4 mr-1" /> Details
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default BrowseTips;

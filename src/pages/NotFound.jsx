
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/20">404</div>
            <AlertCircle className="w-16 h-16 text-destructive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page not found</h1>
        <p className="text-muted-foreground">
          Oops! The page you're looking for seems to have gone on a gardening break. 
          Let's help you find your way back to our blooming community!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/browse-tips">Browse Tips</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

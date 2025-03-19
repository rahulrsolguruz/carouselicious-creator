
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import CustomButton from "@/components/ui/custom-button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFCFC] px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-neobrutalism-primary/10 rounded-full flex items-center justify-center">
            <AlertTriangle size={40} className="text-neobrutalism-primary" />
          </div>
        </div>
        <h1 className="text-6xl font-bold font-display mb-4 neo-card inline-block px-6 py-2">404</h1>
        <p className="text-xl font-medium mb-6 text-gray-700">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-600 mb-8">
          The page may have been moved, deleted, or perhaps never existed.
        </p>
        <Link to="/">
          <CustomButton
            variant="primary"
            className="mx-auto"
            icon={<Home size={18} />}
          >
            Return to Home
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center flex flex-col items-left justify-left bg-black  p-3">
        <h1 className="text-8xl font-bold mb-4 text-aurora-primary">404</h1>
        <p className="text-xl text-gray-600">A página que você está procurando não existe</p>
      </div>
      <Button variant="default" size="lg" onClick={() => navigate("/")}><svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 8-4 4 4 4" /> </svg>Voltar</Button>
    </div>
  );
};

export default NotFound;

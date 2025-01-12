import { motion } from "framer-motion";
import { Copy, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const { toast } = useToast();
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  const handleFeaturesClick = () => {
    toast({
      title: "Coming Soon",
      description: "These features are currently in development",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-kanae-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold text-kanae-text">
              Kanae
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#token" className="text-gray-600 hover:text-kanae-secondary transition-colors">
                Token
              </a>
              <a href="#roadmap" className="text-gray-600 hover:text-kanae-secondary transition-colors">
                Roadmap
              </a>
              <a href="#community" className="text-gray-600 hover:text-kanae-secondary transition-colors">
                Community
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger onClick={handleFeaturesClick} className="text-gray-600 hover:text-kanae-secondary transition-colors">
                      Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#brain-terminal" className="block p-2 hover:bg-gray-100 rounded-md">
                              Brain Terminal
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#livestream" className="block p-2 hover:bg-gray-100 rounded-md">
                              Livestream
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#album" className="block p-2 hover:bg-gray-100 rounded-md">
                              Album
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#music" className="block p-2 hover:bg-gray-100 rounded-md">
                              Music
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center px-4 py-2 bg-kanae-primary/10 hover:bg-kanae-primary/20 rounded-full text-sm text-gray-600 transition-colors"
          >
            <span className="hidden md:inline mr-2">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};
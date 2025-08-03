import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import Committees from "./pages/Committees";
import Offices from "./pages/Offices";
import Leadership from "./pages/Leadership";
import Conference from "./pages/Conference";
import Media from "./pages/Media";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/media" element={<Media />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Nutrition } from './pages/Nutrition';
import { FindYourProgramPage } from './pages/FindYourProgramPage';
import { Community } from './pages/Community';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { Stories } from './pages/Stories';
import { Locations } from './pages/Locations';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Programs Routes */}
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            
            {/* Nutrition Consultation Route */}
            <Route path="/nutrition" element={<Nutrition />} />

            {/* Legacy Service Redirects */}
            <Route path="/services" element={<Navigate to="/programs" replace />} />
            <Route path="/services/*" element={<Navigate to="/programs" replace />} />

            {/* Life-Stage Program Matcher */}
            <Route path="/find-your-program" element={<FindYourProgramPage />} />

            {/* Community & Mom Networks */}
            <Route path="/community" element={<Community />} />

            {/* Coach Rachel D'Rozario Profile */}
            <Route path="/team" element={<Team />} />

            {/* Learn Library & Client Case Studies */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/stories" element={<Stories />} />

            {/* Studio Locations, Contact & Booking */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />

            {/* Fallback 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

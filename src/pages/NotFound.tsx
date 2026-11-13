import React from 'react';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="min-h-[70vh] flex items-center justify-center bg-white py-20">
        <div className="max-w-md mx-auto text-center px-4 space-y-6">
          <span className="font-display text-8xl text-burntOrange font-bold tracking-tight">
            404
          </span>
          <h1 className="text-3xl font-light text-[#3B6B96]">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            The page or fitness program resource you are looking for has been moved or does not exist.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button to="/" variant="primary" size="md">
              Return to Home
            </Button>
            <Button to="/programs" variant="secondary" size="md">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

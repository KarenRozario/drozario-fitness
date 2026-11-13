import React from 'react';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="min-h-[70vh] flex items-center justify-center bg-espresso py-20">
        <div className="max-w-md mx-auto text-center px-4 space-y-6">
          <span className="font-display text-8xl text-burntOrange font-bold tracking-tight">
            404
          </span>
          <h1 className="text-3xl font-display text-cream uppercase">
            Page Not Found
          </h1>
          <p className="text-sm text-cream-muted leading-relaxed">
            The page or movement resource you are looking for has been moved or does not exist.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button to="/" variant="primary" size="md">
              Return to Home
            </Button>
            <Button to="/services" variant="secondary" size="md">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

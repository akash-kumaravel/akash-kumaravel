import React from 'react';
import ErrorOne, { defaultErrorOneAction } from '../components/ui/ErrorOne';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <ErrorOne
          code="404"
          title="No, no, that's right."
          description="This is a 404 page. And this page exists, no matter what anyone says."
          action={defaultErrorOneAction}
        />
      </div>
      <Footer />
    </div>
  );
}

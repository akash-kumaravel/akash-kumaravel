import React, { Component, ErrorInfo, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent cross-origin third-party script errors from crashing runtime
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.message === 'Script error.' || event.message?.includes('Script error')) {
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('Script error')) {
      event.preventDefault();
    }
  });
}

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Unhandled React Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-white/70 mb-6 max-w-md">
            An unexpected error occurred. Please refresh the page to continue.
          </p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);


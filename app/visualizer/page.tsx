"use client";

import Container from "@/components/ui/Container";
import QuickEstimate from "@/components/ui/QuickEstimate";
import Script from "next/script";

export default function VisualizerPage() {
  return (
    <>
      {/* Owens Corning Roof Visualizer */}
      <section className="bg-gray-50 py-20 min-h-screen">
        <Container>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              Owens Corning Roof Visualizer
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Use the Owens Corning Design EyeQ tool to visualize your new roof.
              Enter your ZIP code to get started!
            </p>
          </div>

          {/* Widget Container */}
          <div
            id="visualizer"
            data-zip="47421"
            className="rounded-xl shadow-lg overflow-hidden min-h-[800px]"
          ></div>
        </Container>
      </section>

      {/* Load Owens Corning widget script */}
      <Script
        src="https://apis.owenscorning.com/client/widget.js"
        strategy="afterInteractive"
        async
      />
                <QuickEstimate />
    </>
  );
}

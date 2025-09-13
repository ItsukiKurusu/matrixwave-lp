import React from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, Users, TrendingUp, Award, AlertTriangle, History } from "lucide-react";

export default function MatrixWaveLanding() {
    return (
      <div className="min-h-screen bg-background">
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">その中でひとりの男が挑戦を続けた</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                世界的なエビデンスはあるものの、火傷リスクはある...その葛藤で、どうすれば患者さんへ効果を還元できるのか。
                直流電流を治療機器としてどう使えるのか、開発と改良を続けてきました。
              </p>
            </div>
            {/* ...existing code for cards and images... */}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* ...existing code for benefits... */}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            {/* ...existing code for CTA... */}
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            {/* ...existing code for contact... */}
          </div>
        </section>
      </div>
    );
}
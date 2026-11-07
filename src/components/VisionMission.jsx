import React from "react";
import { Compass, Target, Quote } from "lucide-react";
import { visionMission } from "../data/companyData";

export default function VisionMission() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#F7FAFD] to-[#FFFFFF] border border-[#E3ECF5] shadow-card-subtle hover:border-[#1464AD]/40 transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top icon and label */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#062B60] text-white flex items-center justify-center shadow-sm">
                    <Compass className="w-6 h-6 text-[#DCEEFF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1464AD]">
                      Our Direction
                    </span>
                    <h3 className="text-2xl font-bold text-[#062B60] font-heading">
                      {visionMission.vision.title}
                    </h3>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-[#DCEEFF]" />
              </div>

              {/* Vision Text */}
              <p className="text-base sm:text-lg text-[#17253A] font-medium leading-relaxed italic border-l-2 border-[#1464AD] pl-4 my-4">
                “{visionMission.vision.text}”
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E3ECF5]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1464AD]"></span>
              <span className="text-xs font-semibold text-[#5E718D]">
                Excellence • Integrity • Innovation
              </span>
            </div>

          </div>

          {/* Mission Card */}
          <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#062B60] to-[#041C3E] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Top icon and label */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1464AD] text-white flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCEEFF]">
                      Our Purpose
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {visionMission.mission.title}
                    </h3>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-white/20" />
              </div>

              {/* Mission Text */}
              <p className="text-base sm:text-lg text-[#DCEEFF] font-medium leading-relaxed italic border-l-2 border-[#539FE0] pl-4 my-4">
                “{visionMission.mission.text}”
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#539FE0]"></span>
              <span className="text-xs font-semibold text-[#BFE0FC]">
                Expertise • Insights • Personalized Solutions
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


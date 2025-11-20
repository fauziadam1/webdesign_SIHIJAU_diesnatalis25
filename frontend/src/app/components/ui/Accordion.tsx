'use client'
import React, { useState } from "react";

interface AccordionItemType {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItemType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-card border border-border-secondary rounded-lg hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full cursor-pointer text-left px-6 py-5 font-semibold text-foreground hover:text-primary flex items-center justify-between"
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 text-muted-foreground leading-relaxed ${
                isOpen ? "max-h-[500px] pb-5" : "max-h-0 pb-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

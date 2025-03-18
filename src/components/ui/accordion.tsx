import * as React from "react";

// Accordion component with custom props
type AccordionProps = {
  type?: "single" | "multiple";  // You can specify types here
  collapsible?: boolean;          // Whether the accordion can be collapsed
  className?: string;             // Optional className for styling
  children: React.ReactNode;      // Accepts children as part of the Accordion
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", collapsible = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`${className} ${type === "single" ? "accordion-single" : "accordion-multiple"}`}
      {...props}
    >
      {children}
    </div>
  )
);

Accordion.displayName = "Accordion";

// AccordionItem component with value prop and default className
const AccordionItem = React.forwardRef<HTMLDivElement, { value: string; className?: string } & React.HTMLAttributes<HTMLDivElement>>(
  ({ value, className, ...props }, ref) => (
    <div ref={ref} className={`border-b ${className}`} {...props}>
      {/* You can use the value prop here for specific functionality */}
    </div>
  )
);
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger component
const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={`flex w-full items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent component
const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`overflow-hidden text-sm transition-all ${className}`}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
);
AccordionContent.displayName = "AccordionContent";

// Export components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

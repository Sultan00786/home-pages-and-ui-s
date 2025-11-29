# Creating Smooth Slide Animations with Framer Motion: A Beginner's Guide

## Introduction

Have you ever wondered how to create those smooth, professional-looking slide animations you see on modern websites? In this tutorial, we'll build an automated image carousel with beautiful vertical slide transitions using **Framer Motion** and **React**.

By the end of this guide, you'll understand:
- How to set up Framer Motion in your React project
- How to create smooth slide transitions
- How to manage animation states
- How to build both automatic and manual slide navigation

Let's dive in! 🚀

---

## What We're Building

We'll create a slide carousel component with these features:
- **Automatic sliding**: Slides change every 8 seconds
- **Smooth vertical transitions**: Slides move up and down elegantly
- **Manual navigation**: Click tabs to jump to any slide
- **Bi-directional animations**: Different animations for moving forward vs backward

![Demo Preview](example-carousel.gif)

---

## Prerequisites

Before we start, make sure you have:
- Basic knowledge of React (hooks like `useState` and `useEffect`)
- A React project set up (Next.js, Create React App, or Vite)
- Node.js and npm/pnpm/yarn installed

---

## Step 1: Install Framer Motion

First, let's install Framer Motion in your project:

```bash
# Using npm
npm install motion

# Using pnpm
pnpm add motion

# Using yarn
yarn add motion
```

> **Note**: We're using the new `motion` package (formerly `framer-motion`)

---

## Step 2: Understanding the Core Concepts

Before we code, let's understand the key concepts:

### **Animation States**
We'll track three states:
1. **Current Slide**: The slide currently visible
2. **Previous Slide**: The slide we're transitioning from
3. **Animation Direction**: Whether we're moving to the next or previous slide

### **Motion Variants**
Variants are predefined animation states in Framer Motion. They make it easy to create reusable animations:

```tsx
const slideVariants = {
  nextSlide: { translateY: 800 },   // Move down
  prevSlide: { translateY: -800 }   // Move up
}
```

---

## Step 3: Setting Up the Component Structure

Let's start by creating our component skeleton:

```tsx
"use client"; // If using Next.js App Router

import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

type PanelSlideProps = {
  slideImgs: string[];      // Array of image URLs
  uiToolbar?: string;       // Optional toolbar overlay
};

function PanelSlide({ slideImgs, uiToolbar }: PanelSlideProps) {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<null | number>(null);
  const [animationState, setAnimationState] = useState<"nextSlide" | "prevSlid" | "">("");

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Slide container will go here */}
    </div>
  );
}

export default PanelSlide;
```

**What's happening here?**
- `currentSlide`: Tracks which slide is currently showing (0-indexed)
- `previousSlide`: Tracks the slide we're animating away from
- `animationState`: Determines the direction of animation

---

## Step 4: Creating Animation Variants

Now let's define our animation variants. These control how slides move in and out:

```tsx
function PanelSlide({ slideImgs, uiToolbar }: PanelSlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<null | number>(null);
  const [animationState, setAnimationState] = useState<"nextSlide" | "prevSlid" | "">("");

  // Animation for the CURRENT slide (the one entering)
  const currentSlideAnimation: Variants = {
    nextSlide: {
      translateY: 800,  // Start below viewport
    },
    prevSlid: {
      translateY: -800, // Start above viewport
    },
  };

  // Animation for the PREVIOUS slide (the one exiting)
  const previousSlideAnimation: Variants = {
    nextSlide: {
      translateY: -800, // Exit upward
    },
    prevSlid: {
      translateY: 800,  // Exit downward
    },
  };

  // ... rest of component
}
```

**Key Insight**: 
- When going **forward** (nextSlide): New slide comes from **below** (800px), old slide exits **upward** (-800px)
- When going **backward** (prevSlid): New slide comes from **above** (-800px), old slide exits **downward** (800px)

---

## Step 5: Implementing Auto-Play with useEffect

Let's add automatic slide advancement every 8 seconds:

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    if (currentSlide < slideImgs.length - 1) {
      // Not at the last slide, go forward
      setPreviousSlide(currentSlide);
      setCurrentSlide(currentSlide + 1);
      setAnimationState("nextSlide");
    } else {
      // At the last slide, loop back to first
      setPreviousSlide(currentSlide);
      setCurrentSlide(0);
      setAnimationState("prevSlid");
    }
  }, 8000); // 8 seconds

  // Cleanup: Clear interval when component unmounts
  return () => clearInterval(interval);
}, [currentSlide, slideImgs.length]);
```

**Breaking it down:**
1. `setInterval` runs every 8 seconds
2. We check if there's a next slide
3. Update states: previous → current, current → next
4. Set animation direction
5. Clean up the interval to prevent memory leaks

---

## Step 6: Building the Slide Container

Now for the exciting part - rendering the animated slides!

```tsx
return (
  <div className="w-full max-w-[1192px] h-[728px] flex flex-col items-center">
    {/* Main slide container */}
    <div className="w-full h-full bg-gray-100 relative rounded-xl border-4 overflow-hidden">
      
      {/* Slides container */}
      <div className="w-full h-full absolute inset-0 z-0">
        
        {/* CURRENT SLIDE */}
        {currentSlide !== null && currentSlide !== undefined && (
          <div className="w-full h-full absolute px-12 flex items-center justify-center">
            <motion.img
              initial={previousSlide === null ? false : animationState}
              animate={previousSlide === null ? false : { translateY: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              variants={currentSlideAnimation}
              src={slideImgs[currentSlide]}
              alt={`slide-${currentSlide + 1}`}
              key={`current-slide-${currentSlide + 1}`}
              className="w-full rounded-lg"
            />
          </div>
        )}

        {/* PREVIOUS SLIDE */}
        {previousSlide !== null && previousSlide !== undefined && (
          <div className="w-full h-full absolute px-12 flex items-center justify-center">
            <motion.img
              initial={previousSlide === null ? false : { translateY: 0 }}
              animate={previousSlide === null ? false : animationState}
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              variants={previousSlideAnimation}
              src={slideImgs[previousSlide]}
              alt={`slide-${previousSlide + 1}`}
              key={`previous-slide-${previousSlide + 1}`}
              className="w-full rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Optional toolbar overlay */}
      {uiToolbar && (
        <div className="relative inset-0 z-30 pointer-events-none">
          <img src={uiToolbar} alt="ui-toolbar" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  </div>
);
```

**Understanding the Motion Props:**

- **`initial`**: Starting position of the animation
  - `false` = No initial animation (for first load)
  - `animationState` = Use the variant key ("nextSlide" or "prevSlid")
  
- **`animate`**: Target position to animate to
  - `{ translateY: 0 }` = Center position (visible)
  
- **`variants`**: Object containing animation definitions
  
- **`transition`**: Animation timing
  - `duration`: 0.35 seconds
  - `ease`: "easeInOut" for smooth acceleration/deceleration
  - `delay`: 0.3 seconds (allows previous slide to start exiting first)

- **`key`**: React key for proper re-rendering

---

## Step 7: Adding Navigation Tabs

Let's add clickable tabs for manual navigation:

```tsx
type SlideTabsProps = {
  slideImgs: string[];
  currentSlide: number;
  setAnimationState: React.Dispatch<React.SetStateAction<"nextSlide" | "prevSlid" | "">>;
  setPreviousSlide: React.Dispatch<React.SetStateAction<null | number>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};

function SlideTabs({
  slideImgs,
  currentSlide,
  setAnimationState,
  setPreviousSlide,
  setCurrentSlide,
}: SlideTabsProps) {
  return (
    <div className="w-full h-20 my-5 relative overflow-hidden">
      <div className="py-4 flex gap-6 items-center justify-center">
        {slideImgs.map((_, index) => (
          <div
            key={`slide-tab-${index + 1}`}
            className={`
              cursor-pointer py-1.5 px-4 rounded-lg transition-all duration-300
              hover:text-white
              ${index === currentSlide ? 'text-white bg-blue-500' : 'text-gray-400'}
            `}
            onClick={() => {
              if (index === currentSlide) return; // Already on this slide
              
              // Determine animation direction
              if (index > currentSlide) {
                setAnimationState("nextSlide"); // Moving forward
              } else {
                setAnimationState("prevSlid");  // Moving backward
              }
              
              // Update slides
              setPreviousSlide(currentSlide);
              setCurrentSlide(index);
            }}
          >
            Slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Logic explained:**
1. Check if clicked tab is already active
2. Determine direction: forward if `index > currentSlide`, backward otherwise
3. Set the previous slide for animation
4. Update to the new slide

---

## Step 8: Putting It All Together

Here's the complete component:

```tsx
"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

type PanelSlideProps = {
  slideImgs: string[];
  uiToolbar?: string;
};

type SlideTabsProps = {
  slideImgs: string[];
  currentSlide: number;
  setAnimationState: React.Dispatch<React.SetStateAction<"nextSlide" | "prevSlid" | "">>;
  setPreviousSlide: React.Dispatch<React.SetStateAction<null | number>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};

function PanelSlide({ slideImgs, uiToolbar }: PanelSlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<null | number>(null);
  const [animationState, setAnimationState] = useState<"nextSlide" | "prevSlid" | "">("");

  // Animation variants
  const currentSlideAnimation: Variants = {
    nextSlide: { translateY: 800 },
    prevSlid: { translateY: -800 },
  };

  const previousSlideAnimation: Variants = {
    nextSlide: { translateY: -800 },
    prevSlid: { translateY: 800 },
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slideImgs.length - 1) {
        setPreviousSlide(currentSlide);
        setCurrentSlide(currentSlide + 1);
        setAnimationState("nextSlide");
      } else {
        setPreviousSlide(currentSlide);
        setCurrentSlide(0);
        setAnimationState("prevSlid");
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, slideImgs.length]);

  return (
    <div className="w-full max-w-[1192px] h-full flex flex-col items-center">
      <div className="w-full h-[728px] bg-gray-100 relative rounded-xl border-4 overflow-hidden">
        <div className="w-full h-full absolute inset-0 z-0">
          {/* Current Slide */}
          {currentSlide !== null && currentSlide !== undefined && (
            <div className="w-full h-full absolute px-12 flex items-center justify-center">
              <motion.img
                initial={previousSlide === null ? false : animationState}
                animate={previousSlide === null ? false : { translateY: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
                variants={currentSlideAnimation}
                src={slideImgs[currentSlide]}
                alt={`slide-${currentSlide + 1}`}
                key={`current-slide-${currentSlide + 1}`}
                className="w-full rounded-lg"
              />
            </div>
          )}

          {/* Previous Slide */}
          {previousSlide !== null && previousSlide !== undefined && (
            <div className="w-full h-full absolute px-12 flex items-center justify-center">
              <motion.img
                initial={{ translateY: 0 }}
                animate={animationState}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
                variants={previousSlideAnimation}
                src={slideImgs[previousSlide]}
                alt={`slide-${previousSlide + 1}`}
                key={`previous-slide-${previousSlide + 1}`}
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Optional UI Toolbar Overlay */}
        {uiToolbar && (
          <div className="relative inset-0 z-30 pointer-events-none">
            <img src={uiToolbar} alt="ui-toolbar" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <SlideTabs
        slideImgs={slideImgs}
        currentSlide={currentSlide}
        setAnimationState={setAnimationState}
        setPreviousSlide={setPreviousSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

function SlideTabs({
  slideImgs,
  currentSlide,
  setAnimationState,
  setPreviousSlide,
  setCurrentSlide,
}: SlideTabsProps) {
  return (
    <div className="w-full h-20 my-5 relative overflow-hidden">
      <div className="py-4 flex gap-6 items-center justify-center">
        {slideImgs.map((_, index) => (
          <div
            key={`slide-tab-${index + 1}`}
            className={`
              cursor-pointer py-1.5 px-4 rounded-lg transition-all duration-300
              hover:text-white whitespace-nowrap
              ${index === currentSlide ? 'text-white bg-blue-500' : 'text-gray-400'}
            `}
            onClick={() => {
              if (index === currentSlide) return;
              
              if (index > currentSlide) {
                setAnimationState("nextSlide");
              } else {
                setAnimationState("prevSlid");
              }
              
              setPreviousSlide(currentSlide);
              setCurrentSlide(index);
            }}
          >
            Slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PanelSlide;
```

---

## Step 9: Using the Component

Now you can use your carousel in any page:

```tsx
import PanelSlide from './components/PanelSlide';

const slides = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
];

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1>My Awesome Carousel</h1>
      <PanelSlide 
        slideImgs={slides} 
        uiToolbar="/images/toolbar.png" 
      />
    </div>
  );
}
```

---

## Common Customizations

### 1. **Change Animation Direction (Horizontal)**

```tsx
const currentSlideAnimation: Variants = {
  nextSlide: { translateX: 800 },   // From right
  prevSlid: { translateX: -800 },   // From left
};
```

### 2. **Adjust Animation Speed**

```tsx
transition={{ 
  duration: 0.5,        // Slower animation
  ease: "easeInOut", 
  delay: 0.1            // Less delay
}}
```

### 3. **Change Auto-Play Interval**

```tsx
setInterval(() => {
  // Your logic
}, 5000); // 5 seconds instead of 8
```

### 4. **Add Fade Effect**

```tsx
const currentSlideAnimation: Variants = {
  nextSlide: { 
    translateY: 800,
    opacity: 0          // Start invisible
  },
  visible: {
    translateY: 0,
    opacity: 1          // Fade in
  }
};
```

### 5. **Pause on Hover**

```tsx
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return; // Don't run if paused
  
  const interval = setInterval(() => {
    // Your auto-play logic
  }, 8000);

  return () => clearInterval(interval);
}, [currentSlide, isPaused]);

// In JSX:
<div 
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* Carousel content */}
</div>
```

---

## Troubleshooting Common Issues

### **Issue 1: Slides appear without animation on first load**
**Solution:** Use `initial={false}` to prevent initial animation:
```tsx
initial={previousSlide === null ? false : animationState}
```

### **Issue 2: Animation feels jerky**
**Solutions:**
- Ensure `overflow: hidden` on container
- Use `will-change: transform` in CSS
- Check if images are properly loaded

### **Issue 3: Tabs don't reflect current slide**
**Solution:** Make sure to update state in the correct order:
```tsx
setPreviousSlide(currentSlide);  // First
setCurrentSlide(index);          // Then
```

---

## Performance Tips

1. **Preload images**: Use Next.js `<Image>` component or preload links
2. **Optimize images**: Compress and use modern formats (WebP, AVIF)
3. **Use CSS transforms**: Framer Motion automatically uses GPU-accelerated transforms
4. **Lazy load**: Only render visible and adjacent slides
5. **Memoize components**: Use `React.memo` for tabs if needed

---

## Conclusion

Congratulations! 🎉 You've just built a professional slide carousel with smooth animations using Framer Motion. 

**Key takeaways:**
- Framer Motion makes complex animations simple with variants
- Managing animation states (current, previous, direction) is crucial
- `useEffect` handles automatic progression
- Absolute positioning allows smooth overlapping transitions

**Next steps:**
- Add touch/swipe gestures with Framer Motion's `drag` API
- Implement progress indicators
- Add keyboard navigation (arrow keys)
- Create different transition effects (fade, scale, 3D)

### Resources
- [Framer Motion Documentation](https://motion.dev/)
- [Motion Variants Guide](https://motion.dev/docs/react-animation#variants)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)

Happy coding! If you have questions or want to share your implementations, drop a comment below! 👇

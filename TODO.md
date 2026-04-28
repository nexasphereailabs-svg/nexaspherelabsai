# Adaptive Video Quality Implementation Plan

## Information Gathered
- `OptimizedVideo.tsx` already has basic network detection using `navigator.connection`
- It only adjusts `preload` strategy (auto/metadata) but doesn't adapt video quality/bitrate
- Videos are single MP4 files from catbox.moe with no multi-quality variants
- Components are used in `Hero.tsx` (autoplay, muted) and `LearnMorePage.tsx` (controls, autoplay)
- Constraint: Cannot modify existing props/events like autoplay, muted, etc.

## Problem
With a single MP4 source, true Adaptive Bitrate Streaming (ABR) is impossible. The browser downloads whatever bitrate the single file has. We need a mechanism to:
1. Detect actual network quality (not just `effectiveType`)
2. Select appropriate quality source when multiple are available
3. Monitor buffer health during playback
4. Dynamically switch quality if buffering occurs
5. Preserve playback position during switches

## Solution: Smart Adaptive Video Hook + Enhanced Component

### Step 1: Create `src/hooks/useAdaptiveVideo.ts`
A comprehensive hook that:
- Measures actual bandwidth via fetch/HEAD requests or video download timing
- Monitors buffer health (`waiting`, `stalled`, `playing`, `progress` events)
- Determines optimal quality level (high/medium/low) based on:
  - Network Information API (`effectiveType`, `downlink`, `saveData`)
  - Real-time bandwidth measurement
  - Buffer stall history
- Manages source switching with `currentTime` preservation
- Provides `videoQuality`, `isSwitching`, `bufferHealth`, `networkSpeed` state

### Step 2: Update `OptimizedVideo.tsx`
- Add `sources?: VideoSource[]` prop for multi-quality support (backward compatible with `src`)
- Add `adaptive?: boolean` prop to enable/disable adaptive behavior
- Use `useAdaptiveVideo` hook
- Display quality indicator (optional, subtle)
- Handle smooth source switching with position preservation
- Keep all existing props/events untouched (autoPlay, muted, etc.)

### Step 3: Create `src/hooks/useVideoBufferMonitor.ts` (optional, can be merged)
Dedicated buffer monitoring for separation of concerns

## Quality Levels Strategy
| Quality | Resolution | Approx Bitrate | Network Condition |
|---------|-----------|----------------|-------------------|
| high    | 1080p     | 4-8 Mbps       | 4g, WiFi, >5 Mbps |
| medium  | 720p      | 1.5-3 Mbps     | 3g, 2-5 Mbps      |
| low     | 480p      | 0.5-1 Mbps     | slow-2g, 2g, <2 Mbps |

## Files to Edit
1. **NEW**: `src/hooks/useAdaptiveVideo.ts`
2. **MODIFY**: `src/components/OptimizedVideo.tsx`
3. **MODIFY**: `src/components/Hero.tsx` (add multi-source example)
4. **MODIFY**: `src/components/LearnMorePage.tsx` (add multi-source example)

## Followup Steps
- Test with actual multi-quality video sources
- Fine-tune bandwidth thresholds
- Verify `currentTime` preservation works seamlessly

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface YearSelectorProps {
  currentYear: number;
  onYearChange: (year: number) => void;
  minYear?: number;
  maxYear?: number;
  className?: string;
}

/**
 * Year Selector Component
 * 
 * Provides intuitive navigation through years of data.
 * Features:
 * - Dropdown selector for quick year jumping
 * - Previous/Next buttons for sequential navigation
 * - Disabled states for boundary years
 * - Bilingual support
 */
export function YearSelector({
  currentYear,
  onYearChange,
  minYear = 2010,
  maxYear = 2025,
  className = '',
}: YearSelectorProps) {
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => maxYear - i
  );

  const canGoPrevious = currentYear > minYear;
  const canGoNext = currentYear < maxYear;

  const handlePrevious = () => {
    if (canGoPrevious) {
      onYearChange(currentYear - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onYearChange(currentYear + 1);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        disabled={!canGoPrevious}
        aria-label="Previous year"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Select
        value={currentYear.toString()}
        onValueChange={(value) => onYearChange(parseInt(value))}
      >
        <SelectTrigger className="w-[140px]">
          <Calendar className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={!canGoNext}
        aria-label="Next year"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

/**
 * Year Range Selector Component
 * 
 * Allows selection of a year range for comparative analysis
 */
interface YearRangeSelectorProps {
  startYear: number;
  endYear: number;
  onRangeChange: (start: number, end: number) => void;
  minYear?: number;
  maxYear?: number;
  className?: string;
}

export function YearRangeSelector({
  startYear,
  endYear,
  onRangeChange,
  minYear = 2010,
  maxYear = 2025,
  className = '',
}: YearRangeSelectorProps) {
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground">From:</span>
      <Select
        value={startYear.toString()}
        onValueChange={(value) => {
          const newStart = parseInt(value);
          if (newStart <= endYear) {
            onRangeChange(newStart, endYear);
          }
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem
              key={year}
              value={year.toString()}
              disabled={year > endYear}
            >
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-sm text-muted-foreground">To:</span>
      <Select
        value={endYear.toString()}
        onValueChange={(value) => {
          const newEnd = parseInt(value);
          if (newEnd >= startYear) {
            onRangeChange(startYear, newEnd);
          }
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem
              key={year}
              value={year.toString()}
              disabled={year < startYear}
            >
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

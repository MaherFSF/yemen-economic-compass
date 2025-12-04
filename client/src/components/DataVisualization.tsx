import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface DataVisualizationProps {
  title: string;
  description?: string;
  data: DataPoint[];
  type: 'bar' | 'line' | 'area';
  height?: number;
}

export default function DataVisualization({ 
  title, 
  description, 
  data, 
  type,
  height = 300 
}: DataVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !data || data.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate dimensions
    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = rect.height - padding * 2;

    // Find max value
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value), 0);
    const valueRange = maxValue - minValue;

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }

    // Draw chart based on type
    const barWidth = chartWidth / data.length;
    const barSpacing = barWidth * 0.2;
    const actualBarWidth = barWidth - barSpacing;

    if (type === 'bar') {
      data.forEach((point, index) => {
        const x = padding + index * barWidth + barSpacing / 2;
        const barHeight = (point.value / maxValue) * chartHeight;
        const y = padding + chartHeight - barHeight;

        // Draw bar
        ctx.fillStyle = point.color || '#0D9488';
        ctx.fillRect(x, y, actualBarWidth, barHeight);

        // Draw label
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(point.label, x + actualBarWidth / 2, rect.height - 10);

        // Draw value
        ctx.fillStyle = '#111827';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(
          point.value.toLocaleString(),
          x + actualBarWidth / 2,
          y - 5
        );
      });
    } else if (type === 'line' || type === 'area') {
      // Draw line/area
      ctx.beginPath();
      data.forEach((point, index) => {
        const x = padding + (index / (data.length - 1)) * chartWidth;
        const normalizedValue = (point.value - minValue) / valueRange;
        const y = padding + chartHeight - normalizedValue * chartHeight;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      if (type === 'area') {
        // Fill area
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.closePath();
        ctx.fillStyle = 'rgba(13, 148, 136, 0.2)';
        ctx.fill();
      }

      // Draw line
      ctx.strokeStyle = '#0D9488';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw points
      data.forEach((point, index) => {
        const x = padding + (index / (data.length - 1)) * chartWidth;
        const normalizedValue = (point.value - minValue) / valueRange;
        const y = padding + chartHeight - normalizedValue * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#0D9488';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw label
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(point.label, x, rect.height - 10);
      });
    }

    // Draw axes
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();

  }, [data, type, height]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: `${height}px` }}
          className="w-full"
        />
      </CardContent>
    </Card>
  );
}

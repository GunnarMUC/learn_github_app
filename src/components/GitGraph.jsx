import React, { useEffect, useRef } from 'react';

export default function GitGraph({ commits = [], branches = [] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--tw-bg') || '#0f172a';
    if (ctx.fillStyle === '#000000' || !ctx.fillStyle) ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, W, H);

    const centerX = W / 2;
    const startY = 60;
    const spacing = Math.min(60, (H - 120) / Math.max(commits.length || 1, 3));

    // Draw main branch line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX, startY);
    ctx.lineTo(centerX, startY + (commits.length - 1) * spacing + 20);
    ctx.stroke();

    // Draw commit nodes
    commits.forEach((c, i) => {
      const y = startY + i * spacing;
      const isMerge = c.type === 'merge';
      const color = c.branch ? '#8b5cf6' : isMerge ? '#f59e0b' : '#22c55e';

      ctx.beginPath();
      ctx.arc(centerX, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(c.message || 'commit', centerX + 25, y + 5);

      if (c.hash) {
        ctx.fillStyle = '#64748b';
        ctx.font = '11px monospace';
        ctx.fillText(c.hash, centerX + 25, y + 22);
      }

      if (c.branch) {
        const bx = centerX - 80 - Math.random() * 40;
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(bx, y);
        ctx.lineTo(centerX - 15, y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(bx, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();

        ctx.fillStyle = '#e2e8f0';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(c.branch, bx - 12, y + 4);
      }
    });

    // Legend
    const legendY = H - 30;
    [
      { label: 'main', color: '#22c55e' },
      { label: 'feature', color: '#8b5cf6' },
      { label: 'merge', color: '#f59e0b' },
    ].forEach((item, i) => {
      const lx = 30 + i * 120;
      ctx.beginPath();
      ctx.arc(lx, legendY, 6, 0, Math.PI * 2);
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(item.label, lx + 14, legendY + 4);
    });
  }, [commits, branches]);

  return React.createElement('div', { className: 'rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg' },
    React.createElement('canvas', {
      ref: canvasRef,
      width: 700,
      height: 400,
      className: 'w-full',
    }),
  );
}

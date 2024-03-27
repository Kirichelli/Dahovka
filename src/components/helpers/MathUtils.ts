import { Vec2 } from './Vec2';

export function convertRemToPixels(rem: number) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function lerp(x: number, y: number, alpha: number) {
    return (1 - alpha) * x + alpha * y;
}

export function invLerp(value: number, from: number, to: number) {
    if (from === to) {
        return 0;
    }

    return saturate((value - from) / (to - from));
}

export function clamp(x: number, min: number, max: number) {
    return Math.min(Math.max(x, min), max);
}

export function saturate(x: number) {
    return clamp(x, 0, 1);
}

export function euclideanModulo(n: number, m: number) {
    return ((n % m) + m) % m;
}

export function damp(x: number, y: number, lambda: number, dt: number) {
    return lerp(x, y, 1 - Math.exp(-lambda * dt));
}

export function lineToPointDistanceSquared(start: Vec2, end: Vec2, point: Vec2) {
    const A = point.x - start.x;
    const B = point.y - start.y;
    const C = end.x - start.x;
    const D = end.y - start.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) {
        // in case of 0 length line
        param = saturate(dot / lenSq);
    }

    return new Vec2(start.x + param * C, start.y + param * D).distanceSq(point);
}

export function lineToPointDistance(start: Vec2, end: Vec2, point: Vec2) {
    return Math.sqrt(lineToPointDistanceSquared(start, end, point));
}

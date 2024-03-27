export class Vec2 {
    public constructor(
        public x: number = 0,
        public y: number = 0,
    ) {}

    public clone() {
        return new Vec2(this.x, this.y);
    }

    public copy(from: Vec2) {
        this.x = from.x;
        this.y = from.y;

        return this;
    }

    public get length() {
        return Math.hypot(this.x, this.y);
    }

    public scale(scale: number) {
        this.x *= scale;
        this.y *= scale;

        return this;
    }

    public add(other: Vec2) {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    public rotate(angle: number) {
        const ox = this.x;
        const oy = this.y;
        const sn = Math.sin(angle);
        const cs = Math.cos(angle);
        this.x = ox * cs - oy * sn;
        this.y = ox * sn + oy * cs;

        return this;
    }

    public setScalar(value: number) {
        this.x = this.y = value;

        return this;
    }

    public set(x: number, y: number) {
        this.x = x;
        this.y = y;

        return this;
    }

    public normalize() {
        return this.scale(1 / this.length);
    }

    public distance(to: Vec2) {
        return Math.hypot(to.x - this.x, to.y - this.y);
    }

    public distanceSq(to: Vec2) {
        return (to.x - this.x) ** 2 + (to.y - this.y) ** 2;
    }
}

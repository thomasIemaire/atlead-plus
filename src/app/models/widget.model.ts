import { GridStackWidget } from "gridstack";

export class WidgetsDto {

    public x: number | undefined;
    public y: number | undefined;
    public w: number | undefined;
    public h: number | undefined;
    public id: string | undefined;
    public rule: string | undefined;
    public hash: string | undefined;

    public options: GridStackWidget = {};

    constructor(hash: string | null, data?: any | undefined) {
        if (hash)
            this.readHash(hash);
        else {
            this.x = data.x;
            this.y = data.y;
            this.w = data.w;
            this.h = data.h
            this.id = data.id;
            this.rule = data.rule;
            this.writeHash();
        }
        this.options = {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            id: this.rule,
            noResize: true
        };
    }

    public update(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.writeHash();
    }

    public writeHash(): void {
        const pad = (num: number | undefined, size: number): string => {
            if (num === undefined) return '0'.repeat(size);
            let s = num.toString();
            while (s.length < size) s = '0' + s;
            return s;
        };

        const xStr = pad(this.x, 2);
        const yStr = pad(this.y, 2);
        const wStr = pad(this.w, 2);
        const hStr = pad(this.h, 2);
        const idStr = (this.id || '').padEnd(4, '0').slice(0, 4);
        const ruleStr = (this.rule || '').padEnd(4, '0').slice(0, 4);

        this.hash = `${xStr}${yStr}${wStr}${hStr}${idStr}${ruleStr}`;
    }

    public readHash(hash: string): void {
        this.x = parseInt(hash.slice(0, 2));
        this.y = parseInt(hash.slice(2, 4));
        this.w = parseInt(hash.slice(4, 6));
        this.h = parseInt(hash.slice(6, 8));
        this.id = hash.slice(8, 12).replace(/0+$/, '');
        this.rule = hash.slice(12, 16).replace(/0+$/, '');
        this.hash = hash;
    }
}
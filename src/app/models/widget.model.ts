import { GridStackWidget } from "gridstack";

export interface IWidgetsDto {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    id?: string;
    rule?: string;
    noResize?: boolean;
}

export class WidgetsDto implements IWidgetsDto {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    id?: string;
    rule?: string;
    noResize?: boolean;
    options?: GridStackWidget;

    constructor(widget?: IWidgetsDto) {
        if (widget) {
            this.x = widget.x;
            this.y = widget.y;
            this.w = widget.w;
            this.h = widget.h;
            this.id = widget.id;
            this.rule = widget.rule;
            this.noResize = widget.noResize;
            this.options = this.getOptions();
        }
    }

    private getOptions(): GridStackWidget {
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            id: this.id,
            noResize: this.noResize
        };
    }

    public update(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public toModel(): IWidgetsDto {
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            id: this.id,
            rule: this.rule,
            noResize: this.noResize
        };
    }
}
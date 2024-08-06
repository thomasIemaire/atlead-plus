import { IWidgetsDto } from "./widget.model";

export interface IAppearanceDto {
    options: IAppearanceOptionsDto;
    widgets: IAppearanceWidgetsDto[];
}

export interface IAppearanceOptionsDto {
    banner: boolean
}

export interface IAppearanceWidgetsDto {
    id: string;
    widgets: IWidgetsDto[];
}
import { Injectable } from "@angular/core";
import { Logger } from "./logger";

@Injectable()
export class Colors {

    private colorList: string[] = [];

    constructor(private logger: Logger) {

    }

    public getAll() {
        this.logger.log("retrieved color list");
        return this.colorList;
    }

    public addColor(color: string) {
        this.logger.log("add color to list: " + color);
        this.colorList.push(color);
    }
}
import { Injectable } from "@angular/core";
import { TeaserModel } from "../models/teaser.model";

@Injectable()
export class DataService {

    _data: TeaserModel[] = [];


    public getData(): TeaserModel[] {
        this._data = this.generateLocalData();

        return this._data;
    }

    private generateLocalData(): TeaserModel[] {

        const data: TeaserModel[] = [
            {
                client: "Gjøl Kro's owner",
                myRole: "UX Designer - Co-developer",
                sector: "Restaurants & Events",
                challenge: `For this project the challenges were mostly throughout 
                the User Research and the UX (IA) phases, with the concern to firstly 
                target the right audience and therefore meeting their satisfaction criteria`,
                duration: "1 month"
            },
            {
                client: "2",
                myRole: "sdf",
                sector: "sdf",
                challenge: "sdf",
                duration: "sdf",
            },
            {
                client: "3",
                myRole: "sdf",
                sector: "sdf",
                challenge: "sdf",
                duration: "sdf",
            },
            {
                client: "4",
                myRole: "sdf",
                sector: "sdf",
                challenge: "sdf",
                duration: "sdf",
            },
            {
                client: "4",
                myRole: "sdf",
                sector: "sdf",
                challenge: "sdf",
                duration: "sdf",
            },
            {
                client: "4",
                myRole: "sdf",
                sector: "sdf",
                challenge: "sdf",
                duration: "sdf",
            }
        ];

        return data;
    }
}
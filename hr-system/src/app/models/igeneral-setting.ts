import { IWeekend } from "./iweekend";

export interface IGeneralSetting {
    id: number;
    overtimeHour: number;
    discountHour: number;
    WeekendDays: IWeekend[];
}

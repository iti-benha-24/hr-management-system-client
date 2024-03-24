export interface IAttendance {
    id:number,
    date: Date;
    arrivalTime: number; 
    leaveTime: number | null;
    employeeName?: string;
    departmentName?: string;
}

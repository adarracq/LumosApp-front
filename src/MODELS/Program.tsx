import Daily from "./Daily";

export default class Program {
    currentDay: number;
    currentProgramIndice: number;
    dailies: Daily[];

    constructor(
        currentDay: number,
        currentProgramIndice: number,
        dailies: Daily[]) {
        this.currentDay = currentDay;
        this.currentProgramIndice = currentProgramIndice;
        this.dailies = dailies;
    }
}
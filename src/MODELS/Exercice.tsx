export default class Exercice {
    title: string;
    objective: string;
    steps: string[];

    constructor(title: string, objective: string, steps: string[]) {
        this.title = title;
        this.objective = objective;
        this.steps = steps;
    }
}
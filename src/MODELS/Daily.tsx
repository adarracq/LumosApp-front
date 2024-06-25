import Exercice from "./Exercice";
import Feeling from "./Feeling";
import Question from "./Question";
import Theme from "./Theme";

export default class Daily {
    day: number;
    theme: Theme;
    mantra: string;
    questions: Question[];
    dayExercice: Exercice;
    nightExercice: Exercice;
    feelings: Feeling[];
    gratitudeDiarie: string[];
    positivityDiarie: string[];
    goalsDiarie: string[];
    todayGoals: string[];
    advancement: number;

    constructor(
        day: number,
        theme: Theme,
        mantra: string,
        questions: Question[],
        dayExercice: Exercice,
        nightExercice: Exercice,
    ) {
        this.day = day;
        this.theme = theme;
        this.mantra = mantra;
        this.questions = questions;
        this.dayExercice = dayExercice;
        this.nightExercice = nightExercice;
        this.feelings = [];
        this.gratitudeDiarie = [];
        this.positivityDiarie = [];
        this.goalsDiarie = [];
        this.todayGoals = [];
        this.advancement = 0;
    }
}

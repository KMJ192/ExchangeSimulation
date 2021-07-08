import {
    selectMinuteChart,
    selectDayChart,
    selectWeekChart,
    selectMonthChart
} from './action';

export type SelectedChartAction = 
    ReturnType<typeof selectMinuteChart> |
    ReturnType<typeof selectDayChart> |
    ReturnType<typeof selectWeekChart> |
    ReturnType<typeof selectMonthChart>
export type SelectedChartState = {
    minuteChart: boolean;
    dayChart: boolean;
    weekChart: boolean;
    monthChart: boolean;
}

export const InitialSelectedChart: SelectedChartState = {
    minuteChart: true,
    dayChart: false,
    weekChart: false,
    monthChart: false
}
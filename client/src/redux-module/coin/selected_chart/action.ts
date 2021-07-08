export const MINUTE_CHART = 'coin/MINUTE_CHART';
export const DAY_CHART = 'coin/DAY_CHART';
export const WEEK_CHART = 'coin/WEEK_CHART';
export const MONTH_CHART = 'coin/MONTH_CHART';

export const selectMinuteChart = () => ({
    type: MINUTE_CHART,
    payload: true
})
export const selectDayChart = () => ({
    type: MINUTE_CHART,
    payload: true
})
export const selectWeekChart = () => ({
    type: WEEK_CHART,
    payload: true
})
export const selectMonthChart = () => ({
    type: MONTH_CHART,
    payload: true
})
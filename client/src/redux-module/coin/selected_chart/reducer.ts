import { 
    MINUTE_CHART,
    DAY_CHART,
    WEEK_CHART,
    MONTH_CHART
} from './action';
import { SelectedChartAction, SelectedChartState, InitialSelectedChart } from './types'

export default function selectedChartReducer(
    state: SelectedChartState = InitialSelectedChart,
    action: SelectedChartAction
){
    switch(action.type){
        case MINUTE_CHART:
            return {
                minuteChart: true,
                dayChart: false,
                weekChart: false,
                monthChart: false
            }
        case DAY_CHART: 
            return {
                minuteChart: false,
                dayChart: true,
                weekChart: false,
                monthChart: false
            }
        case WEEK_CHART:
            return {
                minuteChart: false,
                dayChart: false,
                weekChart: true,
                monthChart: false
            }
        case MONTH_CHART:
            return {
                minuteChart: false,
                dayChart: false,
                weekChart: false,
                monthChart: true
            }
        default: 
            return state;
    }
}
export const Aspects = [
    'Readability', 'Performance', 'Security', 'Documentation', 'Testing'
]

export const Rates = [
    {percent: 0, rate: ''},
    {percent: 10, rate: 'Extremely Poor'},
    {percent: 25, rate: 'Poor'},
    {percent: 50, rate: 'Average'},
    {percent: 75, rate: 'Good'},
    {percent: 90, rate: 'Very Good'},
    {percent: 100, rate: 'Excellent'},
]

export const explicitRate =(percent) =>{
    return Rates.find((r) => r.percent === percent)?.rate;
}

export function ColorRates(percent) {
    if (percent === 0) {
        return "#ffffff";
    }
    if (percent <= 10) {
        return "#ff0026";
    }
    if (percent <= 25) {
        return "#ff5900";
    }
    if (percent <= 50) {
        return "#f6f200";
    }
    if (percent <= 75) {
        return "#c1f600";
    }
    if (percent <= 90) {
        return "#73ff00";
    }
    return "#00ff33";
}
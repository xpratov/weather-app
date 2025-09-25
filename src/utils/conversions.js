// C <-> F
export const celsiusToFahrenheit = (c) => Math.round((c * 9) / 5 + 32)+" F";
export const fahrenheitToCelsius = (f) => Math.round(((f - 32) * 5) / 9)+" °";

// km/h <-> mph
export const kmhToMph = (kmh) => Math.round(kmh / 1.609)+" mph";
export const mphToKmh = (mph) => Math.round(mph * 1.609)+"km/s";

// mm <-> inch
export const mmToInch = (mm) => Math.round(mm / 25.4)+"in";
export const inchToMm = (inch) => Math.round(inch * 25.4)+"mm";
